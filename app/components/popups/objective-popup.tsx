import { useSettings } from "~/context/SettingsProvider";
import { objective, task } from "~/lib/types";
import { Check, Link, X } from "lucide-react";
import clsx from "clsx";
import { copy } from "~/lib/utils";

interface ObjectivePopupContentProps {
  task: task;
  objective: objective;
}

export const ObjectivePopupContent = ({ task, objective }: ObjectivePopupContentProps) => {
  const { settings, updateSetting } = useSettings();
  const isComplete = settings.objectivesComplete.includes(objective.id);

  const handleChange = () => {
    const updatedObjectives = isComplete
      ? settings.objectivesComplete.filter(id => id !== objective.id)
      : [...settings.objectivesComplete, objective.id];

    updateSetting('objectivesComplete', updatedObjectives);
  };

  return (
    <>
      <div className="group">
        <span className="text-xl font-bold text-primary text-pretty">{task.name}</span>
        <div className="flex flex-row gap-2">
          <p className="text-xs text-muted-foreground">{task.vendor.name}</p>
          <p className="text-xs text-muted-foreground">▪</p>
          <p className="text-xs text-muted-foreground">{objective.faction?.shorthand || "All Factions"}</p>
          <p className="text-xs text-muted-foreground">▪</p>
          <p className="text-xs text-muted-foreground">{objective.type}</p>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-sm text-primary text-pretty font-semibold">{objective.name}</span>
        <p className="text-xs text-primary/85 text-pretty">{objective.description}</p>
      </div>
      <div className="flex flex-col mt-6 space-y-2">
        <div className="flex flex-row items-center space-x-6">
          <div className="w-full h-[1px] bg-border" />
          <span className="text-[8px] text-border text-nowrap select-none">Available Actions</span>
          <div className="w-full h-[1px] bg-border" />
        </div>
        <div className="flex flex-row space-x-2">
          <button
            className={clsx(
              "bg-primary/10 w-full p-2.5",
              isComplete && "bg-primary/20"
            )}
            onClick={handleChange}
          >
            {isComplete
              ? <div className="flex justify-center items-center space-x-3">
                  <Check className="w-4 h-4" />
                  <span className="text-xs uppercase">Completed</span>
                </div>
              : <div className="flex justify-center items-center space-x-3">
                  <X className="w-4 h-4" />
                  <span className="text-xs uppercase">Complete</span>
                </div>
            }
          </button>
          <button
            className="bg-primary/10 p-2.5"
            onClick={() => {
              if (typeof document === 'undefined') return;
              if (typeof window === 'undefined') return;

              copy(`https://${window.location.hostname}?marker=${task.id}:${objective.id}&zoom=6`);
            }}
          >
            <Link className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
