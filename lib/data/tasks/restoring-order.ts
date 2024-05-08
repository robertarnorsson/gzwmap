import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { LittleBirdDown } from "@/lib/data/tasks/little-bird-down";

const RestoringOrder_Objective1_LRI: objective = {
  name: "Restoring Order - Enemies",
  description: "Neutralize 10 enemies in Pha Lang",
  position: [0.9012219281561347, -0.4402840150754029],
  type: ObjectiveType.ELIMINATION,
  faction: LamangRecoveryInitiative
}

const RestoringOrder_Objective1_MMS: objective = {
  name: "Restoring Order - Enemies",
  description: "Neutralize 10 enemies in Nam Thaven",
  position: [0.5353820522417571, -0.7095481339548538],
  type: ObjectiveType.ELIMINATION,
  faction: MithrasSecuritySystems
}

const RestoringOrder_Objective1_CSI: objective = {
  name: "Restoring Order - Enemies",
  description: "Neutralize 10 enemies in Kiu Vongsa",
  position: [0.9144194438812896, -0.9381876736336638],
  type: ObjectiveType.ELIMINATION,
  faction: CrimsonShieldInternational
}


export const RestoringOrder: task = {
  name: "Restoring Order",
  description: "Excellent! I knew you wouldn't have any problems handling those lowlifes. They'll think twice before crossing our path again. A little display of force goes a long way in maintaining control.",
  objectives: [
    RestoringOrder_Objective1_LRI,
    RestoringOrder_Objective1_MMS,
    RestoringOrder_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0,
  prerequisites: LittleBirdDown
}