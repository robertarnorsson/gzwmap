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
    position: [22914.900970484305, 21013.597589003977]
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
    name: "PL Motel",
    shortName: "PL Doc",
    description: "A key to one of the room in the Pha Lang motel.",
    size: [1, 1],
    image: KeyTypes.SQUAREKEY,
    types: [MarkerType.KEY, MarkerType.PHALANG],
    questKey: false,
    location: PhaLang,
    position: [22643.21175250135, 21063.447756478625]
}

export const PLLumber: key = {
    id: "N/A",
    name: "PL Motel",
    shortName: "PL Doc",
    description: "Description needed!",
    size: [1, 1],
    image: KeyTypes.SQUAREKEY,
    types: [MarkerType.KEY, MarkerType.PHALANG],
    questKey: false,
    location: PhaLang,
    position: [22643.21175250135, 21063.447756478625]
}

/* export const BPWarehouse: key = {
    id: "N/A",
    name: "BP Warehouse",
    image: "/items/keys/bp-warehouse.png",
    types: [MarkerType.KEY, MarkerType.BANPA],
    location: BanPa,
    position: [16186.635394344388, 17344.667035158986]
}

export const FNDumpingGroundStorageShed: key = {
    id: "N/A",
    name: "FN Dumping Ground Storage Shed",
    image: "/items/keys/fn-dumping-ground-storage-shed.png",
    types: [MarkerType.KEY, MarkerType.FORTNARITH],
    location: FortNarith,
    position: [16186.635394344388, 17344.667035158986]
}

export const HP101: key = {
    id: "N/A",
    name: "HP 101",
    image: "/items/keys/hp-101.png",
    types: [MarkerType.KEY, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise,
    position: [16186.635394344388, 17344.667035158986]
}

export const HP102: key = {
    id: "N/A",
    name: "HP 102",
    image: "/items/keys/hp-102.png",
    types: [MarkerType.KEY, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise,
    position: [16186.635394344388, 17344.667035158986]
}

export const PLAttic: key = {
    id: "N/A",
    name: "PL Attic",
    image: "/items/keys/kv-attic.png",
    types: [MarkerType.KEY, MarkerType.PHALANG],
    location: PhaLang,
    position: [22643.21175250135, 21063.447756478625]
}

export const HPWeaponStorage: key = {
    id: "N/A",
    name: "HP Weapon Storage",
    image: "/items/keys/hp-weapon-storage.png",
    types: [MarkerType.KEY, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise,
    position: [16186.635394344388, 17344.667035158986]
}

export const KVAttic: key = {
    id: "N/A",
    name: "KV Attic",
    image: "/items/keys/kv-attic.png",
    types: [MarkerType.KEY, MarkerType.KIUVONGSA],
    location: KiuVongsa,
    position: [16186.635394344388, 17344.667035158986]
}

export const KVDoctorsOffice: key = {
    id: "N/A",
    name: "KV Doctor's Office",
    image: "/items/keys/kv-doctors-office.png",
    types: [MarkerType.KEY, MarkerType.KIUVONGSA],
    location: KiuVongsa,
    position: [10745.543371665743, 21522.836288973736]
}

export const PLDoctorsOffice: key = {
    id: "N/A",
    name: "PL Doctor's Office",
    // image: "/items/keys/pl-doctors-office.png",
    types: [MarkerType.KEY, MarkerType.PHALANG],
    location: PhaLang,
    position: [22914.900970484305, 21013.597589003977]
}

export const NTDoctorsOffice: key = {
    id: "N/A",
    name: "NT Doctor's Office",
    // image: "/items/keys/nt-doctors-office.png",
    types: [MarkerType.KEY, MarkerType.NAMTHAVEN],
    location: NamThaven,
    position: [16075.605056837403, 11956.12234332931]
}

export const KVLumber: key = {
    id: "N/A",
    name: "KV Lumber",
    image: "/items/keys/kv-lumber.png",
    types: [MarkerType.KEY, MarkerType.KIUVONGSA],
    location: KiuVongsa,
    position: [16186.635394344388, 17344.667035158986]
}

export const KVMotel: key = {
    id: "N/A",
    name: "KV Motel",
    image: "/items/keys/kv-motel.png",
    types: [MarkerType.KEY, MarkerType.KIUVONGSA],
    location: KiuVongsa,
    position: [16186.635394344388, 17344.667035158986]
}

export const KVUnlra: key = {
    id: "N/A",
    name: "KV Unlra",
    image: "/items/keys/kv-unlra.png",
    types: [MarkerType.KEY, MarkerType.KIUVONGSA],
    location: KiuVongsa,
    position: [16186.635394344388, 17344.667035158986]
}

export const PLAStorageShed: key = {
    id: "N/A",
    name: "PLA Storage Shed",
    image: "/items/keys/pla-storage-shed.png",
    types: [MarkerType.KEY, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield,
    position: [16186.635394344388, 17344.667035158986]
}

export const SMOffice: key = {
    id: "N/A",
    name: "SM Office",
    image: "/items/keys/sm-office.png",
    types: [MarkerType.KEY, MarkerType.SAWMILL],
    location: Sawmill,
    position: [16186.635394344388, 17344.667035158986]
}

export const SMStorageShed: key = {
    id: "N/A",
    name: "SM Storage Shed",
    image: "/items/keys/sm-storage-shed.png",
    types: [MarkerType.KEY, MarkerType.SAWMILL],
    location: Sawmill,
    position: [16186.635394344388, 17344.667035158986]
}

export const YBL1CorridorDStorageRoom: key = {
    id: "N/A",
    name: "YBL 1 Corridor D Storage Room",
    image: "/items/keys/ybl-1-corridor-d-storage-room.png",
    types: [MarkerType.KEY, MarkerType.YBL1],
    location: YBL1,
    position: [16186.635394344388, 17344.667035158986]
}

export const YBL1GeneratorRoom: key = {
    id: "N/A",
    name: "YBL 1 Generator Room",
    image: "/items/keys/ybl-1-generator-room.png",
    types: [MarkerType.KEY, MarkerType.YBL1],
    location: YBL1,
    position: [16186.635394344388, 17344.667035158986]
}

export const YBL1MaintenanceDoor: key = {
    id: "N/A",
    name: "YBL 1 Maintenance Door",
    image: "/items/keys/ybl-1-maintenance-door.png",
    types: [MarkerType.KEY, MarkerType.YBL1],
    location: YBL1,
    position: [16186.635394344388, 17344.667035158986]
}

export const YBL1Office01: key = {
    id: "N/A",
    name: "YBL 1 Office 01",
    image: "/items/keys/ybl-1-office-01.png",
    types: [MarkerType.KEY, MarkerType.YBL1],
    location: YBL1,
    position: [16186.635394344388, 17344.667035158986]
}

export const YBL1Office02: key = {
    id: "N/A",
    name: "YBL 1 Office 02",
    image: "/items/keys/ybl-1-office-02.png",
    types: [MarkerType.KEY, MarkerType.YBL1],
    location: YBL1,
    position: [16186.635394344388, 17344.667035158986]
}

export const YBL1WeaponStorage: key = {
    id: "N/A",
    name: "YBL 1 Weapon Storage",
    image: "/items/keys/ybl-1-weapon-storage.png",
    types: [MarkerType.KEY, MarkerType.YBL1],
    location: YBL1,
    position: [16186.635394344388, 17344.667035158986]
} */

export const Keys: key[] = [
    PLDoctorsOffice
    /* PLAttic,
    BPWarehouse,
    FNDumpingGroundStorageShed,
    HP101,
    HP102,
    HPWeaponStorage,
    KVAttic,
    KVDoctorsOffice,
    PLDoctorsOffice,
    NTDoctorsOffice,
    KVLumber,
    KVMotel,
    KVUnlra,
    PLAStorageShed,
    SMOffice,
    SMStorageShed,
    YBL1CorridorDStorageRoom,
    YBL1GeneratorRoom,
    YBL1MaintenanceDoor,
    YBL1Office01,
    YBL1Office02,
    YBL1WeaponStorage, */
]