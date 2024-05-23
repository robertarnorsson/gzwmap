import { Map, Overlay, View } from "ol";
import { Extent, getCenter } from "ol/extent";
import Tile from 'ol/layer/Tile';
import Projection from "ol/proj/Projection";
import XYZ from "ol/source/XYZ";
import { createXYZ } from "ol/tilegrid";
import TileGrid from "ol/tilegrid/TileGrid";

export const tileExtent: Extent = [
  0,
  0,
  32768,
  32768,
];

export const maxExtent: Extent = [
  650,
  8473,
  32116,
  24208,
];

export const projection = new Projection({
  code: 'gzw-map',
  units: 'pixels',
  extent: tileExtent,
});

/* export const tilegrid = new TileGrid({
  extent: tileExtent,
  resolutions: [128, 64, 32, 16, 8, 4, 2, 1]
}); */

export const rasterTileLayer = new Tile({
  preload: 128,
  extent: maxExtent,
  source: new XYZ({
    url: 'https://tiles.gzwmap.com/v2/{z}/{y}/{x}',
    tileGrid: createXYZ({
      maxZoom: 7,
      minZoom: 1,
      extent: tileExtent
    }),
    projection: projection,
    tileSize: 256,
    cacheSize: 128,
    transition: 0
  })
});

export const mapView = new View({
  center: getCenter(tileExtent),
  zoom: 3,
  projection: projection,
  enableRotation: false,
  maxZoom: 8
});

export function addPopup(map: Map) {
  const popupElement = document.createElement('div');
  popupElement.className = 'marker';

  const popupOverlay = new Overlay({
    element: popupElement,
    autoPan: true,
    positioning: 'bottom-center',
    stopEvent: false,
  });

  map.addOverlay(popupOverlay);
  return popupOverlay;
}