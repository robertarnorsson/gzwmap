import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const RatsNest_Objective1_LRI: objective = {
  id: "",
  name: "Thug's Smartphone",
  description: "Gather intel from the hideout in the north part of Pha Lang and report back to Handshake",
  position: [0.9144483943069508, -0.45361875221039855],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative,
  image: "/objectives/thugs-smartphone.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.PHALANG]
}

const RatsNest_Objective2_LRI: objective = {
  id: "",
  name: "Convict's Notepad",
  description: "Gather intel from the hideout in the south part of Pha Lang and report back to Handshake",
  position: [0.8881263691610816, -0.4449349111980894],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative,
  image: "/objectives/convicts-notepad.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.PHALANG]
}


const RatsNest_Objective1_MMS: objective = {
  id: "",
  name: "Thug's Smartphone",
  description: "Gather intel from the hideout in the east part of Nam Thaven and report back to Handshake",
  position: [0.5343998073371484, -0.6904566932274393],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems,
  image: "/objectives/thugs-smartphone.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN]
}

const RatsNest_Objective2_MMS: objective = {
  id: "",
  name: "Convict's Notepad",
  description: "Gather intel from the hideout in the west part of Kiu Thaven and report back to Handshake",
  position: [0.548413152772869, -0.7141665063284465],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems,
  image: "/objectives/convicts-notepad.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN]
}


const RatsNest_Objective1_CSI: objective = {
  id: "",
  name: "Thug's Smartphone",
  description: "Gather intel from the hideout in the southwest part of Kiu Vongsa and report back to Handshake",
  position: [0.903579123728169, -0.952890824793853],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational,
  image: "/objectives/thugs-smartphone.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA]
}

const RatsNest_Objective2_CSI: objective = {
  id: "",
  name: "Convict's Notepad",
  description: "Gather intel from the hideout in the southeast part of Kiu Vongsa and report back to Handshake",
  position: [0.9073768244433983, -0.9262863980220893],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational,
  image: "/objectives/convicts-notepad.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA]
}


export const RatsNest: task = {
  id: "",
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