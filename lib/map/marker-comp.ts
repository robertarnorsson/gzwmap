import Overlay from "ol/Overlay";
import { MarkerType } from "../types";
import { Map } from "ol";
import { Root, createRoot } from "react-dom/client";
import { openPopup } from "./utils";

export interface MarkerData {
  id: string;
  coordinates: [number, number];
  content: string;
  types: MarkerType[];
}

export class MarkerOverlay extends Overlay {
  id: string;
  types: MarkerType[];

  constructor(id: string, types: MarkerType[], options: any) {
    super(options);
    this.id = id;
    this.types = types;
  }
}

export const createMarkerOverlay = (
  id: string,
  map: Map,
  coordinates: [number, number],
  content: string,
  types: MarkerType[],
  popupContent?: React.ReactNode,
  popupOverlay?: Overlay,
  stopEvent?: boolean,
): MarkerOverlay => {
  let dragging = false;
  let element = document.createElement('div');
  element.className = 'overlay-marker';
  element.innerHTML = content;
  
  if (popupContent && popupOverlay) {
    element.onmousemove = (e) => {
      dragging = true;
    }
    element.onmousedown = (e) => {
      dragging = false;
    }
    element.onmouseup = (e) => {
      if (!dragging) {
        openPopup(popupOverlay, coordinates, popupContent);
      }
    }
  }

  const overlay = new Overlay({
    position: coordinates,
    positioning: 'center-center',
    element: element,
    stopEvent: stopEvent || false
  }) as MarkerOverlay;

  overlay.id = id;
  overlay.types = types;

  return overlay;
};