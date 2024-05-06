import { LatLngTuple } from "leaflet"

export type vendor = {
  name: string
}

export type faction = {
  name: string
  description: string
  position: LatLngTuple
};

export type lz = {
  name: string
  position: LatLngTuple
  faction?: faction
};

export type location = {
  name: string
  position: LatLngTuple
};

export enum TaskType {
  DISCOVER = "Discover",
  DELIVER = "Deliver",
}

export type task = {
  name: string,
  description: string
  tasks: subtask[]
  vendor: vendor
  level: number
  key?: key
  faction?: faction
};

export type subtask = {
  description: string
  position: LatLngTuple
  type: TaskType
  faction?: faction
}

export type key = {
  name: string
  locations: location[]
  position: LatLngTuple
}