export type vendor = {
  name: string
}

export type faction = {
  id: string
  name: string
  shorthand: string
  description: string
  position: [number, number]
  image: string
  types: MarkerType[]
};

export type lz = {
  id: string
  name: string
  position: [number, number]
  discoverable: boolean
  types: MarkerType[]
  location: location
  faction?: faction
};

export type location = {
  id: string
  name: string
  position: [number, number]
  pois: poi[]
  types: MarkerType[]
};

export type poi = {
  id: string
  name: string
  position: [number, number]
  types: MarkerType[]
  location: location
}

export enum MarkerType {
  // Generic
  TASK = "Task",
  LZ = "Landing Zone",
  LOCATION = "Location",
  POI = "Place of Interest",

  // Keys
  KEY = "Key",
  QUESTKEY = "Quest Key",

  // Items
  ITEM = "Item",
  TOOL = "Tool",

  // Factions
  LRI = "Lamang Recovery Initiative",
  MSS = "Mithras Security Systems",
  CSI ="Crimson Shield International",

  // Vendors
  HANDSHAKE = "Handshake",
  GUNNY = "Gunny",
  LABRAT = "Lab Rat",
  ARTISAN = "Artisan",
  TURNCOAT = "Turncoat",
  BANSHEE = "Banshee",

  // Locations
  PHALANG = "Pha Lang",
  NAMTHAVEN = "Nam Thaven",
  KIUVONGSA = "Kiu Vongsa",
  BANPA = "Ban Pa",
  HUNTERSPARADISE = "Hunter's Paradise",
  YBL1 = "YBL-1",
  BLUELAGOON = "Blue Lagoon",
  SAWMILL = "Sawmill",
  PHALANGAIRFIELD = "Pha Lang Airfield",
  FORTNARITH = "Fort Narith",
  MIDNIGHTSAPPHIRE = "Midnight Sapphire",
  TIGERBAY = "Tiger Bay",

  // Task varients
  COLLECT = "Collect",
  MARK = "Mark",
  STASH = "Stash",
  ELIMINATION = "Elimination",
  LOCATE = "Locate",
  HACK = "Hack",
}

export enum ObjectiveType {
  COLLECT = "Collect",
  MARK = "Mark",
  STASH = "Stash",
  ELIMINATION = "Elimination",
  LOCATE = "Locate",
  HACK = "Hack",
}

export type task = {
  id: string
  name: string
  briefing?: string
  debriefing?: string
  note?: string
  objectives: objective[]
  vendor: vendor
  level: number
  prerequisites?: task
  key?: key[]
  items?: item[]
  faction?: faction
};

export type objective = {
  id: string
  name: string
  description: string
  position: [number, number]
  type: ObjectiveType
  types: MarkerType[]
  location: location 
  faction?: faction
  image?: string
  key?: key
  items?: item[]
  note?: string
}

export type item = {
  id: string
  name: string
  shortName?: string
  description: string
  types: MarkerType[]
  vendor?: vendor
  size: [number, number]
  image: string | KeyTypes
  note?: string
}

export enum KeyTypes {
  ROUNDKEY = "/items/keys/key-round.png",
  ROUNDGOLDKEY = "/items/keys/key-round-gold.png",
  SQUAREKEY = "/items/keys/key-square.png",
  SQUAREGOLDKEY = "/items/keys/key-gold-square.png",
  SKINNYKEY = "/items/keys/key-skinny.png",
  SKINNYGOLDKEY = "/items/keys/key-gold-skinny.png",
  BLUETHICKKEY = "/items/keys/key-blue-thick.png",
}

export type key = item & {
  image: KeyTypes
  questKey: boolean
  location: location
  position: [number, number] | [number, number][]
}