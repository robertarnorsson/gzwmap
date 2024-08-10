import { key, KeyTypes, MarkerType } from "@/lib/types"
import { YBL1 } from "@/lib/data/locations"

export const YBLGen: key = {
  id: "K-6KL6KL",
  name: "YBL-1 Generator Room Key",
  shortName: "YBl Gen",
  description: "A key to the generator room in YBL-1.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.YBL1, MarkerType.QUESTKEY],
  questKey: true,
  location: YBL1,
  position: [10808.054558708442, 12850.659903946596],
  note: "Positions will be updated soon"
}

export const YBLOfc2: key = {
  id: "K-VXKFH5",
  name: "YBL-1 Office Key 02",
  shortName: "YBL Ofc2",
  description: "A key to office 02 in YBL-1.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.YBL1, MarkerType.QUESTKEY],
  questKey: true,
  location: YBL1,
  position: [10828.054558708442, 12850.659903946596],
  note: "Positions will be updated soon"
}

export const YBLOfc1: key = {
  id: "K-15G6Y0",
  name: "YBL-1 Office Key 01",
  shortName: "YBL Ofc1",
  description: "A key to office 01 in YBL-1.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.YBL1],
  questKey: false,
  location: YBL1,
  position: [10828.054558708442, 12870.659903946596],
  note: "Positions will be updated soon"
}

export const YBLBed: key = {
  id: "K-JFKY53",
  name: "YBl-1 Bedroom Key",
  shortName: "YBL Bed",
  description: "A key to the first floor bedroom in YBL-1.",
  size: [1, 1],
  image: KeyTypes.SKINNYKEY,
  types: [MarkerType.KEY, MarkerType.YBL1],
  questKey: false,
  location: YBL1,
  position: [10848.054558708442, 12850.659903946596],
  note: "Positions will be updated soon"
}

export const YBLMain: key = {
  id: "K-XX2IKP",
  name: "YBL-1 Maintinance Door Key",
  shortName: "YBL Main",
  description: "A key to the maintenance entrance to YBL-1.",
  size: [1, 1],
  image: KeyTypes.ROUNDGOLDKEY,
  types: [MarkerType.KEY, MarkerType.YBL1],
  questKey: false,
  location: YBL1,
  position: [10808.054558708442, 12870.659903946596],
  note: "Positions will be updated soon"
}

export const YBLStrg: key = {
  id: "K-NGW4BU",
  name: "YBL-1 Corridor D Storage Room Key",
  shortName: "YBL Strg",
  description: "A key for the Corridor D storage room in YBL-1.",
  size: [1, 1],
  image: KeyTypes.SKINNYKEY,
  types: [MarkerType.KEY, MarkerType.YBL1],
  questKey: false,
  location: YBL1,
  position: [10848.054558708442, 12870.659903946596],
  note: "Positions will be updated soon"
}

export const YBLWep: key = {
  id: "K-HHHSNO",
  name: "YBL-1 Weapon Storage Key",
  shortName: "YBL Wep",
  description: "A key to the weapon storage room in YBL-1.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.YBL1],
  questKey: false,
  location: YBL1,
  position: [10868.054558708442, 12870.659903946596],
  note: "Positions will be updated soon"
}