import { lz, MarkerType, faction, location } from "./types";
import locationsData from "~/data/lzs.json";

const parseMarkerTypes = (types: string[]): MarkerType[] => {
  return types.map((type) => MarkerType[type as keyof typeof MarkerType]);
};

export const LZs: lz[] = locationsData.map((data) => ({
  id: data.id,
  name: data.name,
  position: data.position as [number, number],
  discoverable: data.discoverable,
  types: parseMarkerTypes(data.types),
  location: data.location as unknown as location,
  faction: data.faction as unknown as faction
}));