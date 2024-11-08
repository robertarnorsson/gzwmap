import { Extent } from "ol/extent";
import { Projection } from "ol/proj";
import { dataMap, DataMap } from "~/data/map";

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

export function getDataFromId<T extends keyof DataMap>(id: string): DataMap[T][number] | null {
  const prefix = id.split('-')[0] as T;

  if (!(prefix in dataMap)) {
    return null;
  }

  const dataArray = dataMap[prefix] as DataMap[T];
  return dataArray.find((item) => item.id === id) || null;
}