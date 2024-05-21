import Overlay from "ol/Overlay";
import { MarkerType } from "../types";
import { Map } from "ol";

export interface MarkerData {
  id: string;
  coordinates: [number, number];
  content: string;
  types: MarkerType[];
}

class MarkerOverlay extends Overlay {
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
  coordinates: [number, number],
  content: string,
  types: MarkerType[]
): MarkerOverlay => {
  const element = document.createElement('div');
  element.className = 'overlay-marker';
  element.innerHTML = content;

  const overlay = new Overlay({
    position: coordinates,
    positioning: 'center-center',
    element: element,
    stopEvent: false,
  }) as MarkerOverlay;

  overlay.id = id;
  overlay.types = types;

  return overlay;
};

/**
 * Add an overlay to the map
 * @param map - The OpenLayers map instance
 * @param overlay - The overlay to add
 */
export const addOverlayToMap = (map: Map, overlay: MarkerOverlay): void => {
  map.addOverlay(overlay);
};

/**
 * Remove an overlay from the map
 * @param map - The OpenLayers map instance
 * @param overlayId - The unique identifier of the overlay to remove
 */
export const removeOverlayFromMap = (map: Map, overlayId: string): void => {
  const overlays = map.getOverlays().getArray() as MarkerOverlay[];
  const overlayToRemove = overlays.find(overlay => overlay.id === overlayId);
  if (overlayToRemove) {
    map.removeOverlay(overlayToRemove);
  }
};

/**
 * Toggle visibility of markers by type
 * @param map - The OpenLayers map instance
 * @param type - The type of marker to toggle
 * @param visible - Whether to show or hide the markers
 */
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