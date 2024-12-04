import { memo, useCallback, MouseEvent } from "react";
import { Marker } from "../map/Marker";
import { usePopup } from "~/context/PopupContext";
import { ObjectivePopupContent } from "../popups/objective-popup";
import { Dot, Eye } from "lucide-react";
import { useData } from "~/context/DataContext";
import { useLocalStorage } from "~/context/LocalStorageContext";
import { objective, task } from "~/lib/types";
import { isObjectiveFromCanceledTask } from "~/util/task-utils";

interface ObjectiveMarkerProps {
  task: task;
  objective: objective;
}

export const ObjectiveMarker = memo(({ task, objective }: ObjectiveMarkerProps) => {
  const { data, actions } = useLocalStorage();
  const { tasks } = useData();
  const { showPopup } = usePopup();

  const selectedFaction = data.user.faction;
  const isComplete = data.user.completedObjectives.includes(objective.id);

  const shouldHide = !!(
    selectedFaction &&
    objective.faction &&
    objective.faction.id !== selectedFaction
  );
  const isCanceled = isObjectiveFromCanceledTask(tasks, task, data.user.completedObjectives, data.user.faction);

  const handleClick = useCallback(() => {
    showPopup(
      objective.position,
      <ObjectivePopupContent task={task} objective={objective} />,
      [0, -20]
    );
  }, [showPopup, task, objective]);

  const handleComplete = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (data.user) {
        event.preventDefault();
        if (isComplete) {
          actions.user.removeCompletedObjective(objective.id);
        } else {
          actions.user.addCompletedObjective(objective.id, tasks, data.user);
        }
      }
    },
    [data.user, isComplete, actions.user, objective.id, tasks]
  );

  if (
    (isComplete && !data.user.settings.showCompletedObjectives) ||
    (isCanceled && !data.user.settings.showCanceledObjectives)
  ) {
    return null;
  }

  return (
    <Marker position={objective.position} hide={shouldHide} enableHoverEffect>
      <button
        className="group/objective relative p-1.5"
        onClick={handleClick}
        onContextMenu={handleComplete}
      >
        <div
          className={
            isCanceled
              ? "bg-red-500"
              : isComplete
              ? "bg-green-200"
              : task.isHidden 
                ? "bg-purple-800"
                : "bg-orange-500"
          }
        >
          <div className="flex justify-center items-center w-3 h-3 border border-black relative overflow-hidden group-hover/objective:outline group-hover/objective:outline-white group-hover/objective:outline-[1.5px]">
            <div className="absolute w-[21px] h-[1px] bg-black transform rotate-45"></div>
            <div className="absolute w-[22px] h-[1px] bg-black transform -rotate-45"></div>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-6 transform translate-y-6 group-hover/objective:translate-y-1/2 grid-bg border border-border text-primary text-xs px-2 py-1 opacity-0 group-hover/objective:opacity-100 transition-all text-nowrap pointer-events-none">
          <div className="flex flex-row items-center">
            {task.isHidden && (
              <Eye className="w-3.5 h-3.5 text-primary/85 mr-1.5" />
            )}
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
