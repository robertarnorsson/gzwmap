import { Map } from "ol";
import ReactDOMServer from "react-dom/server";
import { Tasks } from "../data/tasks";
import { createMarkerOverlay } from "./marker-comp";
import { taskMarker } from "@/components/overlays/task-overlay";
import { locationMarker } from "@/components/overlays/location-overlay";
import { Locations } from "../data/locations";

export const taskOverlays = (map: Map) => {
  Tasks.map((task) => {
    task.objectives.map((objective) => {
      const overlay = createMarkerOverlay(
        objective.id,
        objective.position,
        ReactDOMServer.renderToString(taskMarker(task, objective)),
        objective.types
      );

      map.addOverlay(overlay);
    })
  })
}

export const locationOverlays = (map: Map) => {
  Locations.map((location) => {
    const overlay = createMarkerOverlay(
      location.id,
      location.position,
      ReactDOMServer.renderToString(locationMarker(location)),
      location.types
    );

    map.addOverlay(overlay);
  })
}