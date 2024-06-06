import { getAllLZsForLocation } from "@/lib/data/util/lz-utils";
import { getAllPOIsForLocation } from "@/lib/data/util/poi-utils";
import { getAllObjectivesForLocation } from "@/lib/data/util/task-util";
import { location } from "@/lib/types";
import { PopUp } from "../popup";

export const LocationPopup = (location: location, onClick: () => void) => {

  const objectives = getAllObjectivesForLocation(location);
  const pois = getAllPOIsForLocation(location);
  const lzs = getAllLZsForLocation(location);

  return (
    <PopUp
      onClick={onClick}
    >
      <h2 className="text-lg font-bold text-primary">{location.name}</h2>
      <div className="flex flex-row gap-2">
        <p className="text-xs text-muted-foreground">{`${objectives.length} objectives`}</p>
        <p className="text-xs text-muted-foreground">▪</p>
        <p className="text-xs text-muted-foreground">{`${pois.length} pois`}</p>
        <p className="text-xs text-muted-foreground">▪</p>
        <p className="text-xs text-muted-foreground">{`${lzs.length} landing zones`}</p>
      </div>
    </PopUp>
  );
}
