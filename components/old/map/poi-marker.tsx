import { Rubik } from "next/font/google";
import { poi } from "@/lib/types";
import { cn } from "@/lib/utils";
import MapMarker from "./map-marker";
import { Map } from "leaflet";

const rubik = Rubik({ subsets: ["latin"] });

export default function POIMarker({ map, poi }: { map: Map, poi: poi }) {
  return (
    <MapMarker
      map={map}
      showZoom={14}
      position={poi.position}
    >
      <div className='poi-marker-pin'>
        <span className={cn(
          rubik.className,
          'poi-marker-text poi-text-border'
        )}>{poi.name}</span>
      </div>
    </MapMarker>
  )
}