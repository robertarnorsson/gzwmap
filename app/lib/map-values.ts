import { Extent } from "ol/extent";
import Tile from "ol/layer/Tile";
import { Projection } from "ol/proj";
import XYZ from "ol/source/XYZ";
import { createXYZ } from "ol/tilegrid";

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
  worldExtent: tileExtent
});

/* export const tilegrid = new TileGrid({
  extent: tileExtent,
  resolutions: [128, 64, 32, 16, 8, 4, 2, 1]
}); */

export const rasterTileLayer = new Tile({
  preload: 128,
  extent: maxExtent,
  source: new XYZ({
    url: 'https://tiles.gzwmap.com/{z}/{x}/{y}',
    tileGrid: createXYZ({
      maxZoom: 7,
      minZoom: 1,
      extent: tileExtent
    }),
    projection: projection,
    tileSize: 256,
    cacheSize: 256,
    transition: 100
  })
});