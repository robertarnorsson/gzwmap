import { memo, useCallback } from "react";
import { Marker } from "../map/Marker";
import { useSettings } from "~/context/SettingsProvider";
import { objective, task } from "~/lib/types";
import { usePopup } from "~/context/PopupContext";
import { ObjectivePopupContent } from "../popups/objective-popup";
import { Tasks } from "~/data/tasks";
import { Check, Minus, X } from "lucide-react";

interface ObjectiveMarkerProps {
  task: task;
  objective: objective;
}

export const ObjectiveMarker = memo(({ task, objective }: ObjectiveMarkerProps) => {
  const { settings, actions } = useSettings();
  const { showPopup } = usePopup();

  const selectedFaction = settings.faction;
  const shouldHide = !!(selectedFaction && objective.faction && objective.faction.id !== selectedFaction);
  const isComplete = settings.objectivesComplete.includes(objective.id);

  const isCanceledTaskCompleted = task.cancelTaskId
    ? (() => {
        const canceledTask = Tasks.find(t => t.id === task.cancelTaskId);
        if (!canceledTask) return false;
        const relevantObjectives = canceledTask.objectives.filter(obj => {
          return !obj.faction || selectedFaction === null || obj.faction.id === selectedFaction;
        });
        return relevantObjectives.every(obj => settings.objectivesComplete.includes(obj.id));
      })()
    : false;

  const handleClick = useCallback(() => {
    showPopup(objective.position, <ObjectivePopupContent task={task} objective={objective} />, [0, -20]);
  }, [showPopup, task, objective]);

  return (
    <Marker position={objective.position} hide={shouldHide} enableHoverEffect>
      <button
        className="group/objective relative p-1.5"
        onClick={handleClick}
        onDoubleClick={() => actions.toggleObjectiveCompletion(objective.id)}
      >
        <div className={isCanceledTaskCompleted ? 'bg-red-500' : isComplete ? 'bg-green-200' : 'bg-orange-500'}>
          <div className="flex justify-center items-center w-3 h-3 border border-black relative overflow-hidden group-hover/objective:outline group-hover/objective:outline-white group-hover/objective:outline-[1.5px]">
            <div className="absolute w-[21px] h-[1px] bg-black transform rotate-45"></div>
            <div className="absolute w-[22px] h-[1px] bg-black transform -rotate-45"></div>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-6 transform translate-y-6 group-hover/objective:translate-y-1/2 grid-bg border border-border text-primary text-xs px-2 py-1 shadow-lg opacity-0 group-hover/objective:opacity-100 transition-all text-nowrap pointer-events-none">
          <div className="relative space-x-2">
            <span className="text-xs text-primary/85">{task.name}</span>
            <span className="text-xs text-primary/85">▪</span>
            <span className="text-xs text-primary/85">{objective.name}</span>
          </div>
          <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 border border-border bg-background p-[1px]">
            {isComplete && <Check className="w-3.5 h-3.5 text-green-400" />}
            {isCanceledTaskCompleted && <X className="w-3.5 h-3.5 text-red-400" />}
            {!isComplete && !isCanceledTaskCompleted && <Minus className="w-3.5 h-3.5 text-primary/85" />}
          </div>
        </div>
      </button>
    </Marker>
  );
});

ObjectiveMarker.displayName = "ObjectiveMarker";
