import { Marker } from "../map/Marker";
import { useSettings } from "~/context/SettingsProvider";
import { objective, task } from "~/lib/types";
import { usePopup } from "~/context/PopupContext";
import { Checkbox } from "../ui/checkbox";

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
    <Marker position={objective.position} hide={shouldHide} enableHoverEffect>
      <button
        className={`group/objective relative ${isComplete ? 'bg-green-200' : 'bg-orange-500'}`}
        onClick={handleClick}
      >
        <div className="flex justify-center items-center w-3 h-3 border border-black relative overflow-hidden group-hover/objective:outline group-hover/objective:outline-white group-hover/objective:outline-[1.5px]">
          <div className="absolute w-[21px] h-[1px] bg-black transform rotate-45"></div>
          <div className="absolute w-[22px] h-[1px] bg-black transform -rotate-45"></div>
        </div>
        <div className="absolute bottom-1/2 left-5 transform translate-y-1/2 grid-background border border-border text-primary text-xs px-2 py-1 shadow-lg opacity-0 group-hover/objective:opacity-100 transition-opacity text-nowrap pointer-events-none">
          <div className="relative space-x-2">
          <span className="text-xs">{task.name}</span>
          <span className="text-xs">▪</span>
          <span className="text-xs">{objective.name}</span>
          </div>
        </div>
      </button>
    </Marker>
  );
};

interface ObjectivePopupContentProps {
  task: task;
  objective: objective;
}

const ObjectivePopupContent = ({ task, objective }: ObjectivePopupContentProps) => {
  const { settings, updateSetting } = useSettings();
  const isComplete = settings.objectivesComplete.includes(objective.id);

  const handleCheckboxChange = () => {
    const updatedObjectives = isComplete
      ? settings.objectivesComplete.filter(id => id !== objective.id)
      : [...settings.objectivesComplete, objective.id];

    updateSetting('objectivesComplete', updatedObjectives);
  };

  return (
    <>
      <div className="relative">
        <Checkbox
          checked={isComplete}
          onCheckedChange={handleCheckboxChange}
          className="absolute top-0 right-0"
        />
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
      </div>
    </>
  );
};
