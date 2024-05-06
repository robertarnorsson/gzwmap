import LZMarker from "@/components/map/lz-marker";
import LocationMarker from "@/components/map/location-marker";
import FactionMarker from "@/components/map/faction-marker";
import TaskMarker from "@/components/map/task-marker";
import { Factions } from "@/lib/data/factions";
import { LZs } from "@/lib/data/lzs";
import { Locations } from "@/lib/data/locations";
import { Tasks } from "@/lib/data/tasks";

export default function MapMarkers() {
  return (
    <>
      {LZs.map((lz) => (
        <LZMarker
          key={`${lz.position[0]}${lz.name}`}
          lz={lz}
        />
      ))}
      {Locations.map((location) => (
        <LocationMarker
          key={`${location.position[0]}${location.name}`}
          location={location}
        />
      ))}
      {Factions.map((faction) => (
        <FactionMarker
          key={`${faction.position[0]}${faction.name}`}
          faction={faction}
        />
      ))}
      {Tasks.map((task) => (
        task.objectives.map((objective) => (
          <TaskMarker
            key={`${objective.position[0]}${objective.description}`}
            task={task}
            objective={objective}
          />
        ))
      ))}
    </>
  )
}