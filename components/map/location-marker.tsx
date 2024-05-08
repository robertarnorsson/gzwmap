import { Rubik } from "next/font/google";
import { location } from "@/lib/types";
import { cn } from "@/lib/utils";
import MapMarker from "./map-marker";
import { Map } from "leaflet";

const rubik = Rubik({ subsets: ["latin"] });

export default function LocationMarker({ map, location }: { map: Map, location: location }) {
  return (
    <MapMarker
      map={map}
      position={location.position}
    >
      <div className='location-marker-pin'>
        <span className={cn(
          rubik.className,
          'location-marker-text location-text-border'
        )}>{location.name}</span>
      </div>
    </MapMarker>
  )
}