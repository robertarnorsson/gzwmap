import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useMap } from "react-leaflet";
import LZMarker from "@/components/old/map/lz-marker";
import LocationMarker from "@/components/old/map/location-marker";
import FactionMarker from "@/components/old/map/faction-marker";
import TaskMarker from "@/components/old/map/task-marker";
import POIMarker from "@/components/old/map/poi-marker";
import { Factions } from "@/lib/data/factions";
import { LZs } from "@/lib/data/lzs";
import { Locations } from "@/lib/data/locations";
import { POIs } from "@/lib/data/pois";
import { Tasks } from "@/lib/data/tasks";

export default function MapMarkers() {
  const map = useMap();
  
  return (
    <>
      {LZs.map((lz, index) => (
        <LZMarker
          key={index}
          map={map}
          lz={lz}
        />
      ))}
      {Locations.map((location, index) => (
        <LocationMarker
          key={index}
          map={map}
          location={location}
        />
      ))}
      {Factions.map((faction, index) => (
        <FactionMarker
          key={index}
          map={map}
          faction={faction}
        />
      ))}
      {Tasks.map((task) =>
        task.objectives.map((objective, index) => (
          <TaskMarker
            key={`${task.name}-${index}`}
            map={map}
            task={task}
            objective={objective}
          />
        ))
      )}
      {POIs.map((poi, index) => (
        <POIMarker
          key={index}
          map={map}
          poi={poi}
        />
      ))}
    </>
  );
}
