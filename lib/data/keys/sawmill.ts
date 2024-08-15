import { key, KeyTypes, MarkerType } from "@/lib/types"
import { Sawmill } from "@/lib/data/locations"

export const SMOfc: key = {
  id: "K-R26GPO",
  name: "Sawmill Office Key",
  shortName: "SM Ofc",
  description: "A key for the office building at the Tonmai Hainy Lumber Company.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.SAWMILL, MarkerType.QUESTKEY],
  questKey: true,
  location: Sawmill,
  position: [10307.910871446922, 17296.164932532156]
}

export const SMOstrg: key = {
  id: "K-7Q473W",
  name: "Sawmill Office Storage Room Key",
  shortName: "SM Ostrg",
  description: "A key to an office storage room at the Tonmai Hainy Lumber Company.",
  size: [1, 1],
  image: KeyTypes.SKINNYKEY,
  types: [MarkerType.KEY, MarkerType.SAWMILL, MarkerType.QUESTKEY],
  questKey: true,
  location: Sawmill,
  position: [10310.999228590492, 17310.139054617237]
}

export const SMStrg: key = {
  id: "K-KI7OBX",
  name: "Sawmill Storage Shed Key",
  shortName: "SM Strg",
  description: "A key to a storage shed at the Tonmai Hainy Lumber Company.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.SAWMILL],
  questKey: false,
  location: Sawmill,
  position: [10183.272263734734, 17361.476963880155]
}