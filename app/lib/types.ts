export type BaseMarker = {
  id: string;
  name: string;
}

export type Marker = BaseMarker & {
  types: MarkerType[];
  position: [number, number];
};

export type faction = Marker & {
  shorthand: string;
  description: string;
  image: string;
  types: MarkerType[];
};

export type lz = Marker & {
  discoverable: boolean;
  location: location;
  faction?: faction;
};

export type location = Marker & {
  pois: poi[];
};

export type poi = Marker & {
  location: location;
};

export type objective = Marker & {
  description: string;
  type: ObjectiveType;
  location: location;
  faction?: faction;
  image?: {
    large: string;
    small: string;
  };
  key?: key;
  items?: item[];
  note?: string;
  difficulty?: difficulty;
  time?: [string, string];
};

export type item = Marker & {
  shortName?: string;
  description: string;
  vendor?: vendor;
  size: [number, number];
  image: string | KeyTypes;
  note?: string;
};

export type key = item & {
  image: KeyTypes;
  questKey: boolean;
  location: location;
  position: [number, number] | [number, number][];
  faction?: faction;
};

export type task = BaseMarker & {
  briefing?: string
  debriefing?: string
  note?: string
  objectives: objective[]
  vendor: vendor
  level: number
  prerequisites?: task
  cancelTaskId?: string,
  key?: key[]
  items?: item[]
  faction?: faction,
  difficulty?: difficulty,
  notMultiLocation?: boolean,
};

export type difficulty = {
  name: string
  description: string
  level: number
}

export type vendor = {
  name: string
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
  INTEL = "Intel",

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

  // Difficuly
  DIFFICULTY_1 = "Easy",
  DIFFICULTY_2 = "Normal",
  DIFFICULTY_3 = "Difficult",
  DIFFICULTY_4 = "Hard",
  DIFFICULTY_5 = "Extreme",
  DIFFICULTY_6 = "Insane",
}

export enum ObjectiveType {
  COLLECT = "Collect",
  MARK = "Mark",
  STASH = "Stash",
  ELIMINATION = "Elimination",
  LOCATE = "Locate",
  HACK = "Hack",
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
