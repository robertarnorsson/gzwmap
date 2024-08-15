import { key, KeyTypes, MarkerType } from "@/lib/types"
import { PhaLangAirfield } from "@/lib/data/locations"

export const PLAStrg: key = {
  id: "K-RDRX8C",
  name: "Pha Lang Airfield Storage Office Key",
  shortName: "PLA Strg",
  description: "Key to the office room in the storage building at the Pha Lang Airfield.",
  size: [1, 1],
  image: KeyTypes.SKINNYKEY,
  types: [MarkerType.KEY, MarkerType.PHALANGAIRFIELD, MarkerType.QUESTKEY],
  questKey: true,
  location: PhaLangAirfield,
  position: [[18542.667487277162, 19653.676888276157], [18546.167487277162, 19666.176888276157]]
}

export const PLA03: key = {
  id: "K-QH7A6C",
  name: "Hangar 03 Key",
  shortName: "PLA 03",
  description: "A key to Hangar 03 at the Pha Lang Airfield.",
  size: [1, 1],
  image: KeyTypes.SQUAREGOLDKEY,
  types: [MarkerType.KEY, MarkerType.PHALANGAIRFIELD, MarkerType.QUESTKEY],
  questKey: true,
  location: PhaLangAirfield,
  position: [18476.51300790585, 19711.799700158237]
}

export const PLAShed: key = {
  id: "K-0943M7",
  name: "Airport Storage Shed Key",
  shortName: "PLA Shed",
  description: "A key to the storage shed located near the Pha Lang Airfield terminal.",
  size: [1, 1],
  image: KeyTypes.SKINNYKEY,
  types: [MarkerType.KEY, MarkerType.PHALANGAIRFIELD],
  questKey: false,
  location: PhaLangAirfield,
  position: [18768.701318987463, 19962.566092834142]
}