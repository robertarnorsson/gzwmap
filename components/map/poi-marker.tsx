import L from "leaflet";
import { Marker } from "react-leaflet";
import { Rubik } from "next/font/google";
import { poi } from "@/lib/types";

const rubik = Rubik({ subsets: ["latin"] });

export default function POIMarker({ poi }: { poi: poi }) {
  return (
    <Marker
      riseOnHover
      position={poi.position}
      icon={L.divIcon({
        className: 'marker',
        html: `<div class='poi-marker-pin'><span class='poi-marker-text poi-text-border ${rubik.className}'>${poi.name}</span></div>`,
        iconSize: [100, 30],
        iconAnchor: [50, 15]
      })}
    >
    </Marker>
  )
}