import LZMarker from "@/components/map/lz-marker";
import LocationMarker from "@/components/map/location-marker";
import FactionMarker from "@/components/map/faction-marker";
import TaskMarker from "@/components/map/task-marker";
import POIMarker from "@/components/map/poi-marker";
import { Factions } from "@/lib/data/factions";
import { LZs } from "@/lib/data/lzs";
import { Locations } from "@/lib/data/locations";
import { POIs } from "@/lib/data/pois";
import { Tasks } from "@/lib/data/tasks";

export default function MapMarkers() {
  return (
    <>
      {LZs.map((lz, index) => (
        <LZMarker
          key={index}
          lz={lz}
        />
      ))}
      {Locations.map((location, index) => (
        <LocationMarker
          key={index}
          location={location}
        />
      ))}
      {Factions.map((faction, index) => (
        <FactionMarker
          key={index}
          faction={faction}
        />
      ))}
      {Tasks.map((task) => (
        task.objectives.map((objective, index) => (
          <TaskMarker
            key={index}
            task={task}
            objective={objective}
          />
        ))
      ))}
      {POIs.map((poi, index) => (
        <POIMarker
          key={index}
          poi={poi}
        />
      ))}
    </>
  )
}