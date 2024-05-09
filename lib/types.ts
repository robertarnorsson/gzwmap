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
  discoverable: boolean
  faction?: faction
};

export type location = {
  name: string
  position: LatLngTuple
  tasks: task[]
};

export type poi = {
  name: string
  position: LatLngTuple
  faction?: faction
}

export enum ObjectiveType {
  DISCOVER = "Discover",
  MARK = "Mark",
  STASH = "Stash",
  DELIVER = "Deliver",
  ELIMINATION = "Elimination",
}

export type task = {
  name: string
  description: string
  objectives: objective[]
  vendor: vendor
  level: number
  prerequisites?: task
  items?: item[]
  key?: key
  faction?: faction
};

export type objective = {
  name: string
  description: string
  position: LatLngTuple
  type: ObjectiveType
  faction?: faction
  subobjective?: subobjective
}

export type subobjective = {
  description: string
  position: LatLngTuple
  type: ObjectiveType
  faction?: faction
}

export type item = {
  name: string
  description: string
  vendor: vendor
}

export type key = {
  name: string
  locations: location[]
  position: LatLngTuple
}