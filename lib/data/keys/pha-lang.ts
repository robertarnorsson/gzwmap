import { key, KeyTypes, MarkerType } from "@/lib/types"
import { PhaLang } from "@/lib/data/locations"

export const PLDoctorsOffice: key = {
  id: "K-FENEA3",
  name: "Pha Lang Doctor's Office Key",
  shortName: "PL Doc",
  description: "A key for the local doctor's office in Pha Lang.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG, MarkerType.QUESTKEY],
  questKey: true,
  location: PhaLang,
  position: [22932.111258241104, 21011.885756292824]
}

export const PLAttic: key = {
  id: "K-Z6FK5S",
  name: "Pha Lang Resturant Storage Key",
  shortName: "PL Attic",
  description: "A key for the attic storage space of a resturant in Pha Lang.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG, MarkerType.QUESTKEY],
  questKey: true,
  location: PhaLang,
  position: [22643.21175250135, 21063.447756478625]
}

export const PLMotel: key = {
  id: "K-KPYWFS",
  name: "Pha Lang Motel Room Key",
  shortName: "PL Motel",
  description: "A key to one of the room in the Pha Lang motel.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG],
  questKey: false,
  location: PhaLang,
  position: [22683.042289700912, 21140.937801685457]
}

export const PLLumber: key = {
  id: "K-MPI03V",
  name: "Pha Lang Lumberyard Maintenance Room Key",
  shortName: "PL Lubmer",
  description: "No description",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.PHALANG],
  questKey: false,
  location: PhaLang,
  position: [21994.037382036768, 20872.94422465671]
}