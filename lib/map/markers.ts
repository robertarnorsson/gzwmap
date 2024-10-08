import { Map, Overlay } from "ol";
import ReactDOMServer from "react-dom/server";
import { Tasks } from "../data/tasks";
import { Locations } from "../data/locations";
import { MarkerOverlay, createMarkerOverlay } from "./marker-comp";
import { taskMarker } from "@/components/overlays/task/task-overlay";
import { locationMarker } from "@/components/overlays/location/location-overlay";
import { TaskPopup } from "@/components/overlays/task/task-popup";
import { lzMarker } from "@/components/overlays/location-zone/lz-overlay";
import { LZs } from "../data/lzs";
import { Factions } from "../data/factions";
import { factionMarker } from "@/components/overlays/faction-overlay";
import { POIs } from "../data/pois";
import { poiMarker } from "@/components/overlays/poi-overlay";
import { LocationPopup } from "@/components/overlays/location/location-popup";
import { closePopup } from "./utils";
import { LZPopup } from "@/components/overlays/location-zone/lz-popup";
import { Keys } from "../data/keys";
import { keyMarker } from "@/components/overlays/key/key-overlay";
import { KeyPopup } from "@/components/overlays/key/key-popup";

export const taskOverlays = (map: Map, popupOverlay: Overlay) => {

  Tasks.map((task) => {
    task.objectives.map((objective) => {
      const overlay = createMarkerOverlay(
        objective.id,
        map,
        objective.position,
        ReactDOMServer.renderToString(taskMarker(task, objective)),
        objective.types,
        TaskPopup(task, objective, () => closePopup(popupOverlay)),
        popupOverlay,
      );

      map.addOverlay(overlay);
    })
  })
}

export const keyOverlays = (map: Map, popupOverlay: Overlay) => {

  Keys.map((key) => {
    const positions = Array.isArray(key.position[0]) ? key.position as [number, number][] : [key.position] as [number, number][];

    positions.forEach(position => {
      const overlay = createMarkerOverlay(
        key.id,
        map,
        position,
        ReactDOMServer.renderToString(keyMarker(key)),
        key.types,
        KeyPopup(key, () => closePopup(popupOverlay)),
        popupOverlay
      );

      map.addOverlay(overlay);
    });
  })
}

export const factionOverlays = (map: Map, popupOverlay: Overlay) => {

  Factions.map((faction) => {
    const overlay = createMarkerOverlay(
      faction.id,
      map,
      faction.position,
      ReactDOMServer.renderToString(factionMarker(faction)),
      faction.types
    );

    map.addOverlay(overlay);
  })
}

export const lzOverlays = (map: Map, popupOverlay: Overlay) => {

  LZs.map((lz) => {
    const overlay = createMarkerOverlay(
      lz.id,
      map,
      lz.position,
      ReactDOMServer.renderToString(lzMarker(lz)),
      lz.types,
      LZPopup(lz, () => closePopup(popupOverlay)),
      popupOverlay
    );

    map.addOverlay(overlay);
  })
}

export const locationOverlays = (map: Map, popupOverlay: Overlay) => {

  Locations.map((location) => {
    const overlay = createMarkerOverlay(
      location.id,
      map,
      location.position,
      ReactDOMServer.renderToString(locationMarker(location)),
      location.types,
      LocationPopup(location, () => closePopup(popupOverlay)),
      popupOverlay
    );

    map.addOverlay(overlay);
  })
}

export const poiOverlays = (map: Map, popupOverlay: Overlay) => {

  POIs.map((poi) => {
    const overlay = createMarkerOverlay(
      poi.id,
      map,
      poi.position,
      ReactDOMServer.renderToString(poiMarker(poi)),
      poi.types
    );

    map.addOverlay(overlay as MarkerOverlay);
  })
}