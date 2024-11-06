import { location, poi } from "~/lib/types";
import { POIs } from "../pois";

export function getAllPOIsForLocation(location: location) {
  const pois: poi[] = []
  POIs.forEach((poi) => {
    if (poi.location === location) pois.push(poi);
  });
  return pois;
}