import LZMarker from "./lz-marker";
import LocationMarker from "./location-marker";
import FactionMarker from "./faction-marker";
import { Factions } from "@/lib/data/factions";
import { LZs } from "@/lib/data/lzs";
import { Locations } from "@/lib/data/locations";

export default function MapMarkers() {
  return (
    <>
      {LZs.map((lz) => (
        <LZMarker
          key={lz.name}
          lz={lz}
        />
      ))}
      {Locations.map((location) => (
        <LocationMarker
          key={location.name}
          location={location}
        />
      ))}
      {Factions.map((faction) => (
        <FactionMarker
          key={faction.name}
          faction={faction}
        />
      ))}
    </>
  )
}