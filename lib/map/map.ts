import { View } from "ol";
import { Extent, getCenter } from "ol/extent";
import Tile from 'ol/layer/Tile';
import Projection from "ol/proj/Projection";
import XYZ from "ol/source/XYZ";
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

export const tilegrid = new TileGrid({
  extent: tileExtent,
  resolutions: [128, 64, 32, 16, 8, 4, 2, 1]
});

export const rasterTileLayer = new Tile({
  preload: 64,
  extent: maxExtent,
  source: new XYZ({
    url: 'http://127.0.0.1:5000/v2/{z}/{y}/{x}',
    tileGrid: tilegrid,
    projection: projection,
    tileSize: 256,
    cacheSize: 64,
  })
});

export const mapView = new View({
  center: getCenter(tileExtent),
  zoom: 4,
  projection: projection,
  resolutions: tilegrid.getResolutions(),
  enableRotation: false,
});