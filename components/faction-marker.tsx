import L from "leaflet";
import { Marker } from "react-leaflet";
import { Rubik } from "next/font/google";
import { faction } from "@/lib/types";

const rubik = Rubik({ subsets: ["latin"] });

export default function FactionMarker({ faction }: { faction: faction }) {
  return (
    <Marker
      position={faction.position}
      icon={L.divIcon({
        className: 'marker',
        html: `<div class='faction-marker-pin'><span class='faction-marker-text faction-text-border ${rubik.className}'>${faction.name}</span></div>`,
        iconSize: [100, 30],
        iconAnchor: [50, 15]
      })}
    >
    </Marker>
  )
}