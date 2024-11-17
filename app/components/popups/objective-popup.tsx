import { useState, useEffect, useRef, useMemo } from "react";
import { useLocalStorage } from "~/context/LocalStorageContext"; // Updated import
import { objective, task } from "~/lib/types";
import { Ban, Check, Dot, Ellipsis, Link, Pencil, X } from "lucide-react";
import { copyMarker } from "~/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import { toast } from "~/hooks/use-toast";
import { Button } from "../ui/button";
import PopupImage from "../common/PopupImage";
import { useData } from "~/context/DataContext";

interface ObjectivePopupContentProps {
  task: task;
  objective: objective;
}

export const ObjectivePopupContent = ({
  task,
  objective,
}: ObjectivePopupContentProps) => {
  const { data, actions } = useLocalStorage(); // Using LocalStorageContext
  const { tasks } = useData();
  const userSettings = data.user;
  const selectedFaction = userSettings.faction;
  const isComplete = userSettings.completedObjectives.includes(objective.id);

  const isTaskCanceled = useMemo(() => {
    if (!task.cancelTaskId) return false;
  
    const canceledTask = tasks.find(t => t.id === task.cancelTaskId);
    if (!canceledTask) return false;
  
    // Filter objectives based on selected faction
    const relevantObjectives = canceledTask.objectives.filter(obj => {
      return !obj.faction || selectedFaction === null || obj.faction.id === selectedFaction;
    });
  
    // Check if all relevant objectives for the canceled task are completed
    return relevantObjectives.every(obj => userSettings.completedObjectives.includes(obj.id));
  }, [task.cancelTaskId, tasks, selectedFaction, userSettings.completedObjectives]);

  const [noteText, setNoteText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const existingNote = userSettings.notes?.[objective.id] || "";
    setNoteText(existingNote);

    if (textareaRef.current) {
      const length = existingNote.length;
      textareaRef.current.setSelectionRange(length, length);
    }
  }, [objective.id, userSettings.notes]);

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(event.target.value);
  };

  const handleSaveNote = () => {
    actions.user.updateNote(objective.id, noteText);
    toast({
      description: "Note saved successfully",
    });
  };

  const handleCancelNote = () => {
    setNoteText(userSettings.notes?.[objective.id] || "");
  };

  return (
    <>
      <div className="group">
        <span className="text-xl font-bold text-primary text-pretty">
          {task.name}
        </span>
        <div className="flex flex-row gap-1">
          <p className="text-xs text-muted-foreground">{task.vendor.name}</p>
          <Dot className="w-4 h-4 text-muted-foreground" />
          <p className="text-xs text-muted-foreground">
            {objective.faction?.shorthand || "All Factions"}
          </p>
          <Dot className="w-4 h-4 text-muted-foreground" />
          <p className="text-xs text-muted-foreground">{objective.type}</p>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-sm text-primary text-pretty font-semibold">
          {objective.name}
        </span>
        <p className="text-xs text-primary/85 text-pretty">
          {objective.description}
        </p>
      </div>
      {objective.image && (
        <div className="mt-3">
          <span className="text-sm text-primary font-semibold">
            Image
          </span>
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative w-64 border border-border aspect-video overflow-hidden mt-1 cursor-pointer">
                <PopupImage
                  src={objective.image.small}
                  alt={objective.name}
                />
                <div className="absolute bottom-0 left-0 w-full bg-background/60 backdrop-blur-[2px] text-left py-[2px] pl-2 text-[0.5rem] text-muted-foreground">
                  Click the image for a better view
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-screen-xl" aria-describedby="">
              <DialogTitle className="sr-only">
                {objective.name}
              </DialogTitle>
              <img
                src={objective.image.large}
                alt={objective.name}
                className="w-full h-auto"
              />
            </DialogContent>
          </Dialog>
        </div>
      )}
      {userSettings.notes?.[objective.id] && (
        <div className="mt-3">
          <span className="text-xs text-muted-foreground">User note</span>
          <p className="text-xs text-muted-foreground">{userSettings.notes?.[objective.id] || ""}</p>
        </div>
      )}
      <div className="flex flex-col mt-3">
        <div className="flex flex-row items-center space-x-6 mb-3">
          <div className="w-full h-[1px] bg-border" />
          <span className="text-[8px] text-border text-nowrap select-none">
            Available Actions
          </span>
          <div className="w-full h-[1px] bg-border" />
        </div>
        <div className="flex flex-row space-x-2">
          <Button
            className="w-full"
            variant='secondary'
            onClick={() => actions.user.addCompletedObjective(objective.id)}
            disabled={isTaskCanceled}
          >
            {isTaskCanceled
              ? (
                <div className="flex justify-center items-center space-x-3">
                  <Ban className="w-4 h-4" />
                  <span className="text-xs uppercase line-through">Canceled</span>
                </div>
              )
              : isComplete ? (
                <div className="flex justify-center items-center space-x-3">
                  <Check className="w-4 h-4" />
                  <span className="text-xs uppercase">Completed</span>
                </div>
              ) : (
                <div className="flex justify-center items-center space-x-3">
                  <X className="w-4 h-4" />
                  <span className="text-xs uppercase">Complete</span>
                </div>
              )
            }
          </Button>
          <Button
            size="icon"
            variant='secondary'
            onClick={() => {
              copyMarker(`${task.id}:${objective.id}`);
              toast({
                description: "Copied to clipboard",
              });
            }}
          >
            <Link className="w-4 h-4" />
          </Button>
          <Dialog>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  variant='secondary'
                >
                  <Ellipsis className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" align="start">
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DialogTrigger asChild>
                  <DropdownMenuItem asChild>
                    <div>
                      <Pencil className="w-3.5 h-3.5" />
                      <span>Add Note</span>
                    </div>
                  </DropdownMenuItem>
                </DialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent aria-describedby="">
              <DialogTitle className="sr-only">
                Add a Note
              </DialogTitle>
              <span className="text-xl font-semibold">Add a Note</span>
              <Textarea
                ref={textareaRef}
                className="w-full p-2"
                placeholder="Enter your note here..."
                rows={8}
                value={noteText}
                onChange={handleNoteChange}
                onFocus={() => {
                  if (textareaRef.current) {
                    const length = noteText.length;
                    textareaRef.current.setSelectionRange(length, length);
                  }
                }}
              />
              <DialogClose asChild>
                <div className="flex flex-row space-x-2">
                  <Button
                    className="w-full"
                    onClick={handleSaveNote}
                  >
                    <div className="flex justify-center items-center space-x-3">
                      <span className="text-xs uppercase">Save</span>
                    </div>
                  </Button>
                  <Button onClick={handleCancelNote}>
                    <div className="flex justify-center items-center space-x-3">
                      <span className="text-xs uppercase">Cancel</span>
                    </div>
                  </Button>
                </div>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};
