import clsx from "clsx";
import { Marker } from "../map/Marker";
import { useSettings } from "~/context/SettingsProvider";
import { objective, task } from "~/lib/types";
import { usePopup } from "~/context/PopupContext";

interface ObjectiveMarkerProps {
  task: task;
  objective: objective;
}

export const ObjectiveMarker = ({ task, objective }: ObjectiveMarkerProps) => {
  const { settings } = useSettings();
  const { showPopup } = usePopup();

  const selectedFaction = settings.faction;

  const shouldHide = !!(selectedFaction && objective.faction && objective.faction.id !== selectedFaction);

  const isComplete = settings.objectivesComplete.includes(objective.id);

  const handleClick = () => {
    showPopup(objective.position, <ObjectivePopupContent task={task} objective={objective} />);
  };

  return (
    <Marker position={objective.position} hide={shouldHide}>
      <button
        className="p-2"
        onClick={handleClick}
      >
        <div className={clsx(
          "w-2 h-2 bg-orange-500 border border-black rounded-sm rotate-45",
          isComplete ? 'bg-gray-400' : 'bg-orange-500'
        )} />
      </button>
    </Marker>
  );
};

interface ObjectivePopupContentProps {
  task: task;
  objective: objective;
}

const ObjectivePopupContent = ({ task, objective }: ObjectivePopupContentProps) => {
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
    </>
  );
};