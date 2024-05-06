import { LatLngTuple } from "leaflet"

export type faction = {
  name: string,
  description: string,
  position: LatLngTuple
};

export type lz = {
  name: string,
  position: LatLngTuple,
  faction?: faction
};

export type location = {
  name: string,
  position: LatLngTuple
};

export type task = {
  name: string,
  faction: faction
  position: LatLngTuple
};

export type key = {
  name: string,
  locations: location[],
  position: LatLngTuple
}