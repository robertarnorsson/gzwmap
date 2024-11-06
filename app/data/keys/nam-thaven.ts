import { key, KeyTypes, MarkerType } from "~/lib/types"
import { NamThaven } from "~/data/locations"

export const NTDoctorsOffice: key = {
  id: "K-W68678",
  name: "Nam Thaven Doctor's Office Key",
  shortName: "NT Doc",
  description: "A key for the local doctor's office in Nam Thaven.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.NAMTHAVEN, MarkerType.QUESTKEY],
  questKey: true,
  location: NamThaven,
  position: [16065.50882633552, 11951.633912191932]
}

export const NTAttic: key = {
  id: "K-C197YO",
  name: "Nam Thaven Resturant Storage Key",
  shortName: "NT Attic",
  description: "A key for the attic storage space of a resturant in Nam Thaven.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.NAMTHAVEN, MarkerType.QUESTKEY],
  questKey: true,
  location: NamThaven,
  position: [16313.505701775528, 12090.861535369435]
}

export const NTMotel: key = {
  id: "K-WRPKPY",
  name: "Nam Thaven Motel Room Key",
  shortName: "NT Motel",
  description: "A key to one of the room in the Nam Thaven motel.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.NAMTHAVEN],
  questKey: false,
  location: NamThaven,
  position: [16336.663947056411, 12003.923957741516]
}

export const NTLumber: key = {
  id: "K-RPE1PL",
  name: "Nam Thaven Lumberyard Maintenance Room Key",
  shortName: "NT Lubmer",
  description: "A key to the Nam Thaven lumberyard maintenance room.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.NAMTHAVEN],
  questKey: false,
  location: NamThaven,
  position: [16692.42225467822, 12656.073327420738]
}

export const NTUNLRA: key = {
  id: "K-7OBSDE",
  name: "Nam Thaven UNLRA Office Room Key",
  shortName: "NT UNLRA",
  description: "A key to the UNLRA office in Nam Thaven.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.NAMTHAVEN],
  questKey: false,
  location: NamThaven,
  position: [16746.86205830489, 12441.711765655544]
}

export const NTMarOfc: key = {
  id: "K-6S9UE7",
  name: "Nam Thaven Marketplace Office Key",
  shortName: "NT MarOfc",
  description: "A key for an office in the Nam Thaven marketplace.",
  size: [1, 1],
  image: KeyTypes.ROUNDGOLDKEY,
  types: [MarkerType.KEY, MarkerType.NAMTHAVEN],
  questKey: false,
  location: NamThaven,
  position: [16504.980087429096, 12581.50519073759]
}

export const NTMarStr: key = {
  id: "K-UW5S17",
  name: "Nam Thaven Marketplace Storeroom Key",
  shortName: "NT MarStr",
  description: "A key for an storeroom in the Nam Thaven marketplace.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.NAMTHAVEN],
  questKey: false,
  location: NamThaven,
  position: [16522.041995672604, 12577.938308724099]
}