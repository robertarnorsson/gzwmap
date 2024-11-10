import { useState, useEffect, useRef } from "react";
import { useSettings } from "~/context/SettingsProvider";
import { objective, task } from "~/lib/types";
import { Check, Ellipsis, Link, Pencil, X } from "lucide-react";
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
  DialogHeader,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import { toast } from "~/hooks/use-toast";
import { Button } from "../ui/button";
import PopupImage from "../common/PopupImage";

interface ObjectivePopupContentProps {
  task: task;
  objective: objective;
}

export const ObjectivePopupContent = ({
  task,
  objective,
}: ObjectivePopupContentProps) => {
  const { settings, actions } = useSettings();
  const isComplete = settings.objectivesComplete.includes(objective.id);

  // State for the note text
  const [noteText, setNoteText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Pre-fill the note text if it exists
    const existingNote = settings.notes?.[objective.id] || "";
    setNoteText(existingNote);

    // Set cursor at the end of the text
    if (textareaRef.current) {
      const length = existingNote.length;
      textareaRef.current.setSelectionRange(length, length);
    }
  }, [objective.id, settings.notes]);

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(event.target.value);
  };

  const handleSaveNote = () => {
    actions.updateNote(objective.id, noteText);
    toast({
      description: "Note saved successfully",
    });
  };

  return (
    <>
      <div className="group">
        <span className="text-xl font-bold text-primary text-pretty">
          {task.name}
        </span>
        <div className="flex flex-row gap-2">
          <p className="text-xs text-muted-foreground">{task.vendor.name}</p>
          <p className="text-xs text-muted-foreground">▪</p>
          <p className="text-xs text-muted-foreground">
            {objective.faction?.shorthand || "All Factions"}
          </p>
          <p className="text-xs text-muted-foreground">▪</p>
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
          <div className="relative w-64 border border-border aspect-video overflow-hidden mt-1">
            <PopupImage
              src={objective.image}
              alt={objective.name}
            />
            <div className="absolute bottom-0 left-0 w-full bg-background/60 backdrop-blur-[2px] text-left py-[2px] pl-2 text-[0.5rem] text-muted-foreground">
              Click the image for a better view
            </div>
          </div>
        </div>
      )}
      {noteText && (
        <div className="mt-3">
          <span className="text-xs text-muted-foreground">User note</span>
          <p className="text-xs text-muted-foreground">{settings.notes?.[objective.id] || ""}</p>
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
            onClick={() => actions.toggleObjectiveCompletion(objective.id)}
          >
            {isComplete ? (
              <div className="flex justify-center items-center space-x-3">
                <Check className="w-4 h-4" />
                <span className="text-xs uppercase">Completed</span>
              </div>
            ) : (
              <div className="flex justify-center items-center space-x-3">
                <X className="w-4 h-4" />
                <span className="text-xs uppercase">Complete</span>
              </div>
            )}
          </Button>
          <Button
            size="icon"
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
                <Button size="icon">
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
            <DialogContent>
              <DialogHeader>
                <DialogContent>
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
                    <Button className="px-6" onClick={handleSaveNote}>Save</Button>
                  </DialogClose>
                </DialogContent>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};