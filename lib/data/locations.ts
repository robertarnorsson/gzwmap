import { MarkerType, location } from "@/lib/types";
import {
  FirstRecon_Objective1_LRI,
  FirstRecon_Objective2_LRI,
  FirstRecon_Objective3_LRI,
  FirstRecon_Objective1_MMS,
  FirstRecon_Objective2_MMS,
  FirstRecon_Objective3_MMS,
  FirstRecon_Objective1_CSI,
  FirstRecon_Objective2_CSI,
  FirstRecon_Objective3_CSI
} from "@/lib/data/tasks/first-recon";

export const PhaLang: location = {
  id: "L-001",
  name: "Pha Lang",
  position: [22360.37585245062,20866.74056911505],
  objectives: [
    FirstRecon_Objective1_LRI,
    FirstRecon_Objective2_LRI,
    FirstRecon_Objective3_LRI,
  ],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.PHALANG]
}

export const NamThaven: location = {
  id: "L-002",
  name: "Nam Thaven",
  position: [16401.93511663384,12424.766484447806],
  objectives: [
    FirstRecon_Objective1_MMS,
    FirstRecon_Objective2_MMS,
    FirstRecon_Objective3_MMS,
  ],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.NAMTHAVEN]
}

export const KiuVongsa: location = {
  id: "L-003",
  name: "Kiu Vongsa",
  position: [10799.378070005234,20952.55265726935],
  objectives: [
    FirstRecon_Objective1_CSI,
    FirstRecon_Objective2_CSI,
    FirstRecon_Objective3_CSI,
  ],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.KIUVONGSA]
}

export const BanPa: location = {
  id: "L-004",
  name: "Ban Pa",
  position: [23208.13506808619,15918.636745379685],
  objectives: [],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.BANPA]
}

export const HuntersParadise: location = {
  id: "L-005",
  name: "Hunter's Paradise",
  position: [14184.600722838573,22317.02116986508],
  objectives: [],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.HUNTERSPARADISE]
}

export const YBL1: location = {
  id: "L-006",
  name: "YBL-1",
  position: [11072.318675322842,13086.462000224528],
  objectives: [],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.YBL1]
}

export const BlueLagoon: location = {
  id: "L-006",
  name: "Blue Lagoon",
  position: [22630.933286472067,11952.919152073879],
  objectives: [],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.BLUELAGOON]
}

export const Sawmill: location = {
  id: "L-007",
  name: "Sawmill",
  position: [10328.194139464867,17332.425926079006],
  objectives: [],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.SAWMILL]
}

export const PhaLangAirfield: location = {
  id: "L-008",
  name: "Pha Lang Airfield",
  position: [18527.491460769867,19945.878314875386],
  objectives: [],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.PHALANGAIRFIELD]
}

export const FortNarith: location = {
  id: "L-009",
  name: "Fort Narith",
  position: [10962.758529537185,14300.126583471781],
  objectives: [],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.FORTNARITH]
}

export const MidnightSapphire: location = {
  id: "L-010",
  name: "Midnight Sapphire",
  position: [16390.199169785596,21381.445167069425],
  objectives: [],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.MIDNIGHTSAPPHIRE]
}

export const TigerBay: location = {
  id: "L-011",
  name: "Tiger Bay",
  position: [21775.17599488606,14724.287943772208],
  objectives: [],
  pois: [],
  types: [MarkerType.LOCATION, MarkerType.TIGERBAY]
}


export const Locations: location[] = [
  PhaLang,
  MidnightSapphire,
  HuntersParadise,
  KiuVongsa,
  Sawmill,
  FortNarith,
  YBL1,
  NamThaven,
  BlueLagoon,
  TigerBay,
  BanPa,
  PhaLangAirfield,
]