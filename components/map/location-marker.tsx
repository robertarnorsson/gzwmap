import L from "leaflet";
import { Marker } from "react-leaflet";
import { Rubik } from "next/font/google";
import { location } from "@/lib/types";

const rubik = Rubik({ subsets: ["latin"] });

export default function LocationMarker({ location }: { location: location }) {
  return (
    <Marker
      riseOnHover
      position={location.position}
      icon={L.divIcon({
        className: 'marker',
        html: `<div class='location-marker-pin'><span class='location-marker-text location-text-border ${rubik.className}'>${location.name}</span></div>`,
        iconSize: [100, 30],
        iconAnchor: [50, 15]
      })}
    >
    </Marker>
  )
}