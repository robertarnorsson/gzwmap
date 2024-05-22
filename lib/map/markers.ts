import { Map, Overlay } from "ol";
import ReactDOMServer from "react-dom/server";
import { Tasks } from "../data/tasks";
import { Locations } from "../data/locations";
import { createMarkerOverlay } from "./marker-comp";
import { taskMarker } from "@/components/overlays/task/task-overlay";
import { locationMarker } from "@/components/overlays/location-overlay";
import { taskPopup } from "@/components/overlays/task/task-popup";

export const taskOverlays = (map: Map, popupOverlay: Overlay) => {
  Tasks.map((task) => {
    task.objectives.map((objective) => {
      const overlay = createMarkerOverlay(
        objective.id,
        objective.position,
        ReactDOMServer.renderToString(taskMarker(task, objective)),
        objective.types,
        ReactDOMServer.renderToString(taskPopup(task, objective)),
        popupOverlay
      );

      map.addOverlay(overlay);
    })
  })
}

export const locationOverlays = (map: Map, popupOverlay: Overlay) => {
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