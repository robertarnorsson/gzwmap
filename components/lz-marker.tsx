import L, { LatLngTuple } from "leaflet";
import { Marker } from "react-leaflet";

export default function LZMarker({ name, position }: { name: string, position: LatLngTuple }) {
  return (
    <Marker
      position={position}
      icon={L.divIcon({
        className: 'custom-div-icon',
        html: `<div class='lz-marker-pin'><img class='lz-marker-icon' src='lz-marker.svg'></img><span class='lz-marker-text'>${name}</span></div>`,
        iconSize: [100, 30],
        iconAnchor: [50, 15]
      })}
    >
    </Marker>
  )
}