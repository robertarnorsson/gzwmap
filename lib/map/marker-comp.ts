import Overlay from "ol/Overlay";
import { MarkerType } from "../types";
import { Map } from "ol";
import { Root, createRoot } from "react-dom/client";

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
        const popupElement = popupOverlay.getElement()!;
        let root: Root | null = (popupElement as any).__reactRoot;

        if (!root) {
          root = createRoot(popupElement);
          (popupElement as any).__reactRoot = root;
        }

        root.render(popupContent);
        popupOverlay.setPosition(coordinates);
        popupElement.classList.add("visible");
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

export const addOverlayToMap = (map: Map, overlay: MarkerOverlay): void => {
  map.addOverlay(overlay);
};

export const removeOverlayFromMap = (map: Map, overlayId: string): void => {
  const overlays = map.getOverlays().getArray() as MarkerOverlay[];
  const overlayToRemove = overlays.find(overlay => overlay.id === overlayId);
  if (overlayToRemove) {
    map.removeOverlay(overlayToRemove);
  }
};

export const toggleMarkersByType = (
  map: Map,
  type: MarkerType,
  visible: boolean
): void => {
  const overlays = map.getOverlays().getArray() as MarkerOverlay[];
  overlays.forEach(overlay => {
    if (overlay.types.includes(type)) {
      overlay.getElement()!.style.display = visible ? '' : 'none';
    }
  });
};