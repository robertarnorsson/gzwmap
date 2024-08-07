import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { FirstRecon } from "@/lib/data/tasks/first-recon";
import { KiuVongsa, NamThaven, PhaLang } from "../locations";

const LittleBirdDown_Objective1_LRI: objective = {
  id: "N/A",
  name: "Crashed Helicopter",
  description: "Find the Crashed Helicopter south of the gas station",
  position: [21867.898970748625, 20074.915036259845],
  type: ObjectiveType.LOCATE,
  faction: LamangRecoveryInitiative,
  image: "/objectives/little-bird-down.webp",
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.PHALANG],
  location: PhaLang
}

const LittleBirdDown_Objective2_LRI: objective = {
  id: "N/A",
  name: "Crew",
  description: "Find out what happened to the rest of the crew",
  position: [22061.372545944494, 20074.24166816653],
  type: ObjectiveType.LOCATE,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.PHALANG],
  location: PhaLang
}

const LittleBirdDown_Objective1_MMS: objective = {
  id: "N/A",
  name: "Crashed Helicopter",
  description: "Find the Crashed Helicopter north of the gas station",
  position: [16278.358687200945, 13345.219093063928],
  type: ObjectiveType.LOCATE,
  faction: MithrasSecuritySystems,
  image: "/objectives/little-bird-down.webp",
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const LittleBirdDown_Objective2_MMS: objective = {
  id: "N/A",
  name: "Crew",
  description: "Find out what happened to the rest of the crew",
  position: [16128.358687200945, 13221.219093063928],
  type: ObjectiveType.LOCATE,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const LittleBirdDown_Objective1_CSI: objective = {
  id: "N/A",
  name: "Crashed Helicopter",
  description: "Find the Crashed Helicopter south-east of the gas station",
  position: [11495.67860568678, 20324.019616535705],
  type: ObjectiveType.LOCATE,
  faction: CrimsonShieldInternational,
  image: "/objectives/little-bird-down.webp",
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
  location: KiuVongsa
}

const LittleBirdDown_Objective2_CSI: objective = {
  id: "N/A",
  name: "Crew",
  description: "Find out what happened to the rest of the crew",
  position: [11521.67860568678, 20522.519616535705],
  type: ObjectiveType.LOCATE,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
  location: KiuVongsa
}


export const LittleBirdDown: task = {
  id: "N/A",
  name: "Little Bird Down",
  briefing: "Okay, listen up, this is a big one. One of our helicopters went down nearby, and we need to assess the situation. I'll be straight with you, there's valuable cargo on board—a metal container—and we have to secure it. According to our intel, the heli went down north of the gas station. Your mission is to determine if there are any survivors from the crash. Check the wreckage thoroughly and provide a detailed report. If there are any injured personnel, aid them and call for immediate extraction. But remember, your primary objective is to retrieve that container! It goes without saying, but discretion is crucial. We don't want any unnecessary attention on this one. Oh, and one more thing, whatever you do, do not open it. Just bring it back here, and we'll take care of the rest, got it?",
  debriefing: "This turn of events is deeply concerning. It's clear that someone knew about the crash or caused it themselves and acted swiftly to eliminate any witnesses and disappear with the cargo. We can't rule out the possibility of the other PMCs interfering with our operations, but so far, we're in the dark. I need your unwavering commitment and utmost discretion moving forward. We're entering uncharted territory, and I'll be relying on your skills to uncover the truth and help us regain control of the situation. Be prepared for further instructions.",
  objectives: [
    LittleBirdDown_Objective1_LRI,
    LittleBirdDown_Objective2_LRI,
    LittleBirdDown_Objective1_MMS,
    LittleBirdDown_Objective2_MMS,
    LittleBirdDown_Objective1_CSI,
    LittleBirdDown_Objective2_CSI,
  ],
  vendor: Handshake,
  level: 0,
  prerequisites: FirstRecon
}