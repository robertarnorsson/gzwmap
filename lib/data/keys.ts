import { KeyTypes, MarkerType, key } from "@/lib/types";
import {
  BanPa,
  FortNarith,
  HuntersParadise,
  KiuVongsa,
  Sawmill,
  PhaLangAirfield,
  YBL1,
  PhaLang,
  NamThaven
} from "@/lib/data/locations";

export const PLDoctorsOffice: key = {
    id: "N/A",
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
    id: "N/A",
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
    id: "N/A",
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
    id: "N/A",
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

export const NTDoctorsOffice: key = {
    id: "N/A",
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
    id: "N/A",
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
    id: "N/A",
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
    id: "N/A",
    name: "Nam Thaven Lumberyard Maintenance Room Key",
    shortName: "NT Lubmer",
    description: "No description",
    size: [1, 1],
    image: KeyTypes.SQUAREKEY,
    types: [MarkerType.KEY, MarkerType.NAMTHAVEN],
    questKey: false,
    location: NamThaven,
    position: [16692.42225467822, 12656.073327420738]
}

export const KVDoctorsOffice: key = {
    id: "N/A",
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
    id: "N/A",
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
    id: "N/A",
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
    id: "N/A",
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

export const Keys: key[] = [
    PLDoctorsOffice,
    PLAttic,
    PLMotel,
    PLLumber,
    NTDoctorsOffice,
    NTAttic,
    NTMotel,
    NTLumber,
    KVDoctorsOffice,
    KVAttic,
    KVMotel,
    KVLumber
]