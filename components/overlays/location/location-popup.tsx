import { getAllLZsForLocation } from "@/lib/data/util/lz-utils";
import { getAllPOIsForLocation } from "@/lib/data/util/poi-utils";
import { getAllObjectivesForLocation } from "@/lib/data/util/task-util";
import { location } from "@/lib/types";
import { PopUp } from "../popup";
import { getAllKeysForLocation } from "@/lib/data/util/key-utils";

export const LocationPopup = (location: location, onClick: () => void) => {

  const objectives = getAllObjectivesForLocation(location);
  const pois = getAllPOIsForLocation(location);
  const lzs = getAllLZsForLocation(location);
  const keys = getAllKeysForLocation(location);

  return (
    <PopUp
      id={location.id}
      onClick={onClick}
    >
      <h2 className="text-lg font-bold text-primary">{location.name}</h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <p className="text-xs text-muted-foreground">{`${objectives.length} objectives`}</p>
          <p className="text-xs text-muted-foreground">▪</p>
          <p className="text-xs text-muted-foreground">{`${pois.length} pois`}</p>
        </div>
        <div className="flex flex-row gap-2">
          <p className="text-xs text-muted-foreground">{`${lzs.length} landing zones`}</p>
          <p className="text-xs text-muted-foreground">▪</p>
          <p className="text-xs text-muted-foreground">{`${keys.length} keys`}</p>
        </div>
      </div>
    </PopUp>
  );
}
