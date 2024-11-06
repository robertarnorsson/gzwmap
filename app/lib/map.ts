import { Extent } from "ol/extent";
import { Projection } from "ol/proj";

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