import { Extent } from "ol/extent";
import { Projection } from "ol/proj";
import { API_URL } from "./constnats";
import { lz, objective, task, location } from "./types";

export const prefixToEndpointMap = {
  LZ: 'lzs',
  T: 'tasks',
  O: 'objectives',
  L: 'locations',
} as const;

// Define a mapping of prefixes to their corresponding types
export type DataMap = {
  LZ: lz;
  T: task;
  O: objective;
  L: location;
};

type Prefix = keyof DataMap;

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

export async function getDataFromId<T extends Prefix>(
  id: string
): Promise<DataMap[T] | null> {
  const prefix = id.split('-')[0] as T;

  if (!(prefix in prefixToEndpointMap)) {
    return null;
  }

  const endpoint = prefixToEndpointMap[prefix];

  try {
    const response = await fetch(`${API_URL}/${endpoint}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for ID: ${id}`);
    }

    const data = (await response.json()) as DataMap[T];
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}