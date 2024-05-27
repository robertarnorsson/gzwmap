import { location, poi } from "@/lib/types";
import { LZs } from "../lzs";

export function getAllLZsForLocation(location: location) {
  const lzs: poi[] = []
  LZs.forEach((poi) => {
    if (poi.location === location) lzs.push(poi);
  });
  return lzs;
}