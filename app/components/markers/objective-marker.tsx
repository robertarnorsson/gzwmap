import { memo, useCallback } from "react";
import { Marker } from "../map/Marker";
import { usePopup } from "~/context/PopupContext";
import { ObjectivePopupContent } from "../popups/objective-popup";
import { Dot } from "lucide-react";
import { useData } from "~/context/DataContext";
import { useLocalStorage } from "~/context/LocalStorageContext";
import { objective, task } from "~/lib/types";

interface ObjectiveMarkerProps {
  task: task;
  objective: objective;
}

export const ObjectiveMarker = memo(({ task, objective }: ObjectiveMarkerProps) => {
  const { data, actions } = useLocalStorage();
  const { tasks } = useData();
  const { showPopup } = usePopup();

  const selectedFaction = data.user.faction;
  const shouldHide = !!(selectedFaction && objective.faction && objective.faction.id !== selectedFaction);
  const isComplete = data.user.completedObjectives.includes(objective.id);

  const isCanceledTaskCompleted = task.cancelTaskId
    ? (() => {
        const canceledTask = tasks.find(t => t.id === task.cancelTaskId);
        if (!canceledTask) return false;
        const relevantObjectives = canceledTask.objectives.filter(obj => {
          return !obj.faction || selectedFaction === null || obj.faction.id === selectedFaction;
        });
        return relevantObjectives.every(obj => data.user.completedObjectives.includes(obj.id));
      })()
    : false;

  const handleClick = useCallback(() => {
    showPopup(objective.position, <ObjectivePopupContent task={task} objective={objective} />, [0, -20]);
  }, [showPopup, task, objective]);

  if (
    (isComplete && !data.user.settings.showCompletedObjectives) ||
    (isCanceledTaskCompleted && !data.user.settings.showCanceledObjectives)
  ) {
    return null;
  }

  return (
    <Marker position={objective.position} hide={shouldHide} enableHoverEffect>
      <button
        className="group/objective relative p-1.5"
        onClick={handleClick}
        onDoubleClick={() => !isCanceledTaskCompleted && actions.user.addCompletedObjective(objective.id)}
      >
        <div className={isCanceledTaskCompleted ? 'bg-red-500' : isComplete ? 'bg-green-200' : 'bg-orange-500'}>
          <div className="flex justify-center items-center w-3 h-3 border border-black relative overflow-hidden group-hover/objective:outline group-hover/objective:outline-white group-hover/objective:outline-[1.5px]">
            <div className="absolute w-[21px] h-[1px] bg-black transform rotate-45"></div>
            <div className="absolute w-[22px] h-[1px] bg-black transform -rotate-45"></div>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-6 transform translate-y-6 group-hover/objective:translate-y-1/2 grid-bg border border-border text-primary text-xs px-2 py-1 shadow-lg opacity-0 group-hover/objective:opacity-100 transition-all text-nowrap pointer-events-none">
          <div className="flex flex-row">
            <span className="text-xs text-primary/85">{task.name}</span>
            <Dot className="w-4 h-4 text-primary/85" />
            <span className="text-xs text-primary/85">{objective.name}</span>
          </div>
        </div>
      </button>
    </Marker>
  );
});

ObjectiveMarker.displayName = "ObjectiveMarker";
