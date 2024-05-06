import L from "leaflet";
import { Marker } from "react-leaflet";
import { Inter } from "next/font/google";
import { lz } from "@/lib/types";

const inter = Inter({ subsets: ["latin"] });

export default function LZMarker({ lz }: { lz: lz }) {
  return (
    <Marker
      riseOnHover
      position={lz.position}
      icon={L.divIcon({
        className: 'marker',
        html: `<div class='lz-marker-pin'><img class='lz-marker-icon' src='lz.jpg'></img><span class='lz-marker-text ${inter.className}'>${lz.name}</span></div>`,
        iconSize: [100, 30],
        iconAnchor: [50, 15]
      })}
    >
    </Marker>
  )
}