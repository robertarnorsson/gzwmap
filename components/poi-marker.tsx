import L, { LatLngTuple } from "leaflet";
import { Marker } from "react-leaflet";

export default function POIMarker({ name, position }: { name: string, position: LatLngTuple }) {
  return (
    <Marker
      position={position}
      icon={L.divIcon({
        className: 'custom-div-icon',
        html: `<div class='poi-marker-pin'><span class='poi-marker-text poi-text-border'>${name}</span></div>`,
        iconSize: [100, 30],
        iconAnchor: [50, 15]
      })}
    >
    </Marker>
  )
}