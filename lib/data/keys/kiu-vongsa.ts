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
  description: "A key to the Kiu Vongsa lumberyard maintenance room.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.KIUVONGSA],
  questKey: false,
  location: KiuVongsa,
  position: [10722.207849909322, 20590.45838811121]
}

export const KVUNLRA: key = {
  id: "K-HX41FV",
  name: "Kiu Vongsa UNLRA Office Room Key",
  shortName: "KV UNLRA",
  description: "A key to the UNLRA office in Kiu Vongsa.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.KIUVONGSA],
  questKey: false,
  location: KiuVongsa,
  position: [16746.86205830489, 12441.711765655544]
}

export const KVMarOfc: key = {
  id: "K-7DXKVR",
  name: "Kiu Vongsa Marketplace Office Key",
  shortName: "KV MarOfc",
  description: "A key for an office in the Kiu Vongsa marketplace.",
  size: [1, 1],
  image: KeyTypes.ROUNDGOLDKEY,
  types: [MarkerType.KEY, MarkerType.KIUVONGSA],
  questKey: false,
  location: KiuVongsa,
  position: [10822.441298295296, 20761.22714849532]
}

export const KVMarStr: key = {
  id: "K-HBKXG3",
  name: "Kiu Vongsa Marketplace Storeroom Key",
  shortName: "KV MarStr",
  description: "A key for an storeroom in the Kiu Vongsa marketplace.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.KIUVONGSA],
  questKey: false,
  location: KiuVongsa,
  position: [10809.4430742678, 20755.55498997356]
}