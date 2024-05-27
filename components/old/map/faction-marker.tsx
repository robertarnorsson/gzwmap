import { Rubik } from "next/font/google";
import { faction } from "@/lib/types";
import { cn } from "@/lib/utils";
import MapMarker from "./map-marker";
import { Map } from "leaflet";

const rubik = Rubik({ subsets: ["latin"] });

export default function FactionMarker({ map, faction }: { map: Map, faction: faction }) {
  return (
    <MapMarker
      map={map}
      position={faction.position}
    >
      <div className='faction-marker-pin'>
        <span className={cn(
          rubik.className,
          'faction-marker-text faction-text-border'
        )}>{faction.name}</span>
      </div>
    </MapMarker>
  )
}