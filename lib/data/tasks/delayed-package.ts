import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Turncoat } from "@/lib/data/vendors";
import { PhaLang, NamThaven, KiuVongsa, PhaLangAirfield } from "@/lib/data/locations";
import { PLA03 } from "../keys/pha-lang-airfield";
import { BoxOfSupplies } from "../items";

const DelayedPackage_Objective1_LRI: objective = {
    id: "O-X98YRR",
    name: "Package",
    description: "Collect the package at the command tent in Lamang Recovery Initiative's Base Camp",
    position: [23449.527260647137, 22673.593782152464],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.PHALANG],
    location: PhaLang
}

const DelayedPackage_Objective1_MMS: objective = {
  id: "O-5E7SYW",
  name: "Package",
  description: "Collect the package at the command tent in Mithras Security Systems's Base Camp",
  position: [16731.921532613327, 10355.03929533017],
  type: ObjectiveType.COLLECT,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const DelayedPackage_Objective1_CSI: objective = {
  id: "O-3J1V70",
  name: "Package",
  description: "Collect the package at the command tent in Crimson Shield International's Base Camp",
  position: [9207.637082808887, 22337.920549105445],
  type: ObjectiveType.COLLECT,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.KIUVONGSA],
  location: KiuVongsa
}

const DelayedPackage_Objective2: objective = {
  id: "O-YKVFWK",
  name: "Plane",
  description: "Plant the package above the plane's front landing gear",
  position: [18491.331262078515, 19708.20925465674],
  type: ObjectiveType.STASH,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.TURNCOAT, MarkerType.PHALANGAIRFIELD],
  location: PhaLangAirfield,
  items: [ BoxOfSupplies ],
  key: PLA03
}


export const DelayedPackage: task = {
    id: "T-HFJD25",
    name: "Delayed Package",
    briefing: "Friend, it's a pleasure to see you again! May I propose a mutually advantageous arrangement? An airplane housed in one of the secured hangars at Pha Lang Airfield lacks a crucial component that would elevate its significance greatly. I currently possess this component and urge you to assume ownership of it and transfer it to the aforementioned plane. Furthermore, I kindly request you refrain from perusing the contents of the package and ensure its safekeeping. Rest assured, your compliance will be generously compensated.",
    debriefing: "Magnificent work, friend! Your actions ensured that I will sleep a tiny bit better from now on. While the value of a restful night's slumber may be immeasurable, permit me to express my gratitude nonetheless...",
    objectives: [
        DelayedPackage_Objective1_LRI,
        DelayedPackage_Objective1_MMS,
        DelayedPackage_Objective1_CSI,
        DelayedPackage_Objective2,
    ],
    vendor: Turncoat,
    level: 0,
    items: [
      BoxOfSupplies
    ],
    key: [
      PLA03
    ]
}