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
      {Tasks.map((task) => (
        task.tasks.map((subtask) => (
          <TaskMarker
            key={subtask.position[0]}
            task={task}
            subtask={subtask}
          />
        ))
      ))}
    </>
  )
}