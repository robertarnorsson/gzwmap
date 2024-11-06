import { Marker } from "../map/Marker";
import { Circle, CircleCheck, MapPin, MapPinCheck } from "lucide-react";
import { useSettings } from "~/context/SettingsProvider";
import { objective } from "~/lib/types";

interface ObjectiveMarkerProps {
    objective: objective;
}

export const ObjectiveMarker = ({ objective }: ObjectiveMarkerProps) => {
  const { settings, updateSetting } = useSettings();

  const isComplete = settings.objectivesComplete.includes(objective.id);

  const handleClick = () => {
    console.log(objective.name);
    const updatedCompleted = isComplete
      ? settings.objectivesComplete.filter(completedObjective => completedObjective !== objective.id)
      : [...settings.objectivesComplete, objective.id];

    updateSetting('objectivesComplete', updatedCompleted);
  };

  return (
    <Marker position={objective.position}>
      <button
        onClick={handleClick}
      >
        <div className="flex flex-col items-center">
          {isComplete
            ? <CircleCheck />
            : <Circle />
          }
          <p className="text-xs">{objective.name}</p>
        </div>
      </button>
    </Marker>
  );
};
