import { key, KeyTypes, MarkerType } from "@/lib/types"
import { KiuVongsa } from "@/lib/data/locations"

export const KVDoctorsOffice: key = {
  id: "K-ROD483",
  name: "Kiu Vongsa Doctor's Office Key",
  shortName: "KV Doc",
  description: "A key for the local doctor's office in Kiu Vongsa.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.KIUVONGSA, MarkerType.QUESTKEY],
  questKey: true,
  location: KiuVongsa,
  position: [10754.267925879132, 21539.991016960234]
}

export const KVAttic: key = {
  id: "K-QL0TPU",
  name: "Kiu Vongsa Resturant Storage Key",
  shortName: "KV Attic",
  description: "A key for the attic storage space of a resturant in Kiu Vongsa.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.KIUVONGSA, MarkerType.QUESTKEY],
  questKey: true,
  location: KiuVongsa,
  position: [10658.773970571741, 21258.267538297983]
}

export const KVMotel: key = {
  id: "K-E2RH0L",
  name: "Kiu Vongsa Motel Room Key",
  shortName: "KV Motel",
  description: "A key to one of the room in the Kiu Vongsa motel.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.KIUVONGSA],
  questKey: false,
  location: KiuVongsa,
  position: [10577.773970571741, 21315.267538297983]
}

export const KVLumber: key = {
  id: "K-P1TCK9",
  name: "Kiu Vongsa Lumberyard Maintenance Room Key",
  shortName: "KV Lubmer",
  description: "No description",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.KIUVONGSA],
  questKey: false,
  location: KiuVongsa,
  position: [10722.207849909322, 20590.45838811121]
}