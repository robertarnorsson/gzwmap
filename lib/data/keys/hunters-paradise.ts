import { key, KeyTypes, MarkerType } from "@/lib/types"
import { HuntersParadise } from "@/lib/data/locations"

export const HPWep: key = {
  id: "K-77TMQR",
  name: "Hunter's Paradise Weapon Storage Key",
  shortName: "HP Wep",
  description: "A key for the weapon storage room in Hunter's Paradise.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.HUNTERSPARADISE, MarkerType.QUESTKEY],
  questKey: true,
  location: HuntersParadise,
  position: [[14165.363854971592, 22009.806850236866], [14157.363854971592, 21999.306850236866]]
}

export const HP101: key = {
  id: "K-VXP7T9",
  name: "Hunter's Paradise Motel Room 101 Key",
  shortName: "HP 101",
  description: "A key to motel room 101 in Hunter's Paradise.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.HUNTERSPARADISE],
  questKey: false,
  location: HuntersParadise,
  position: [14484.869159393007, 21893.14829269409]
}

export const HP102: key = {
  id: "K-I044WI",
  name: "Hunter's Paradise Motel Room 102 Key",
  shortName: "HP 102",
  description: "A key to motel room 102 in Hunter's Paradise.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.HUNTERSPARADISE, MarkerType.QUESTKEY],
  questKey: true,
  location: HuntersParadise,
  position: [14455.722337997006, 21855.283781303744]
}

export const HP103: key = {
  id: "K-J1V6Z5",
  name: "Hunter's Paradise Motel Room 103 Key",
  shortName: "HP 103",
  description: "A key to motel room 103 in Hunter's Paradise.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.HUNTERSPARADISE],
  questKey: false,
  location: HuntersParadise,
  position: [14470.427055119539, 21857.67795333388]
}

export const HP104: key = {
  id: "K-PBRFQI",
  name: "Hunter's Paradise Improvised Motel Armory Key",
  shortName: "HP 104",
  description: "A key to an improvised armory in the Hunter's Paradise Motel.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.HUNTERSPARADISE],
  questKey: false,
  location: HuntersParadise,
  position: [14483.869159393007, 21906.14829269409]
}