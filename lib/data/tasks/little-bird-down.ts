import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { FirstRecon } from "@/lib/data/tasks/first-recon";

const LittleBirdDown_Objective1_LRI: objective = {
  name: "Little Bird Down - Crashed Helicopter",
  description: "Find the Crashed Helicopter south of the gas station",
  position: [0.8701198989084618, -0.4681893918115621],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const LittleBirdDown_Objective2_LRI: objective = {
  name: "Little Bird Down - Crew",
  description: "Find out what happened to the rest of the crew",
  position: [0.8701061856898239, -0.4595375061035157],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const LittleBirdDown_Objective1_MMS: objective = {
  name: "Little Bird Down - Crashed Helicopter",
  description: "Find the Crashed Helicopter south of the gas station",
  position: [0.577160050808248, -0.7074991377609388],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const LittleBirdDown_Objective2_MMS: objective = {
  name: "Little Bird Down - Crew",
  description: "Find out what happened to the rest of the crew",
  position: [0.5718559643080323, -0.7144592200704315],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const LittleBirdDown_Objective1_CSI: objective = {
  name: "Little Bird Down - Crashed Helicopter",
  description: "Find the Crashed Helicopter south of the gas station",
  position: [0.8809060508184482, -0.9125518798828126],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}

const LittleBirdDown_Objective2_CSI: objective = {
  name: "Little Bird Down - Crew",
  description: "Find out what happened to the rest of the crew",
  position: [0.8894163222135618, -0.9114360809326172],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}


export const LittleBirdDown: task = {
  name: "Little Bird Down",
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