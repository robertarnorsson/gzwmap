import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "~/data/factions";
import { KiuVongsa, NamThaven, PhaLang } from "~/data/locations";

const RatsNest_Objective1_LRI: objective = {
  id: "O-87S74R",
  name: "Thug's Smartphone",
  description: "Gather intel from the hideout in the north part of Pha Lang and report back to Handshake",
  position: [22210.235315950442, 21098.835891821946],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative,
  image: "/assets/objectives/thugs-smartphone.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.PHALANG],
  location: PhaLang
}

const RatsNest_Objective2_LRI: objective = {
  id: "O-69KMV1",
  name: "Convict's Notepad",
  description: "Gather intel from the hideout in the south part of Pha Lang and report back to Handshake",
  position: [22405.956951974917, 20488.379843640443],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative,
  image: "/assets/objectives/convicts-notepad.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.PHALANG],
  location: PhaLang
}


const RatsNest_Objective1_MMS: objective = {
  id: "O-1OQDBY",
  name: "Thug's Smartphone",
  description: "Gather intel from the hideout in the east part of Nam Thaven and report back to Handshake",
  position: [16686.216046578968, 12357.993474060462],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems,
  image: "/assets/objectives/thugs-smartphone.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const RatsNest_Objective2_MMS: objective = {
  id: "O-PKPQOS",
  name: "Convict's Notepad",
  description: "Gather intel from the hideout in the west part of Kiu Thaven and report back to Handshake",
  position: [16130.321561677487, 12684.490952619288],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems,
  image: "/assets/objectives/convicts-notepad.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
  location: NamThaven
}


const RatsNest_Objective1_CSI: objective = {
  id: "O-M0JV37",
  name: "Thug's Smartphone",
  description: "Gather intel from the hideout in the southwest part of Kiu Vongsa and report back to Handshake",
  position: [10538.895754001025, 20821.01776831984],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational,
  image: "/assets/objectives/thugs-smartphone.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
  location: KiuVongsa
}

const RatsNest_Objective2_CSI: objective = {
  id: "O-X9C13A",
  name: "Convict's Notepad",
  description: "Gather intel from the hideout in the southeast part of Kiu Vongsa and report back to Handshake",
  position: [11173.943663076927, 20928.902433462805],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational,
  image: "/assets/objectives/convicts-notepad.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
  location: KiuVongsa
}


export const RatsNest: task = {
  id: "T-C35CU5",
  name: "Rat's Nest",
  briefing: "So, here's the deal. It looks like some of those rats in town didn't get the memo and are still scurrying around and causing trouble. It's time to put a stop to their operations. Your mission is to conduct a thorough search of the town and its outskirts and identify the hiedouts used by these punks. Keep your exes peeled for any suspicious signs or markings that might help you uncover them. The main areas of interest are the town's northwest and southeast sections. Once you've identified the hideouts, investigate them discreetly. We want to gather as much information as possible before moving. Don't engage in direct confrontations unless absolutely necessary. Don't forget, your primary objectives are reconnaissance and gathering intelligence.",
  debriefing: "Great work. You've done a commendable job out there. The information you've gathered during your search is invaluable. We now have a clearer picture of the local criminals' hideouts and activities. We'll be analyzing the data you've collected and devising a strategic plan to dismantle their operations.",
  objectives: [
    RatsNest_Objective1_LRI,
    RatsNest_Objective2_LRI,
    RatsNest_Objective1_MMS,
    RatsNest_Objective2_MMS,
    RatsNest_Objective1_CSI,
    RatsNest_Objective2_CSI,
  ],
  vendor: Handshake,
  level: 0
}