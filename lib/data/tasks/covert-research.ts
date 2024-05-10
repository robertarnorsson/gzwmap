import { ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const CovertResearch_Objective1_LRI: objective = {
  name: "Covert Research - Cargo",
  description: "Retrieve the cargo from the fortified hideout in Pha Lang and report back to Lab Rat",
  position: [0.9027279143946259, -0.42496532924471975],
  type: ObjectiveType.DELIVER,
  faction: LamangRecoveryInitiative
}

const CovertResearch_Objective1_MMS: objective = {
  name: "Covert Research - Cargo",
  description: "Retrieve the cargo from the fortified hideout in Nam Thaven and report back to Lab Rat",
  position: [0.5240534847301731, -0.7203785424083998],
  type: ObjectiveType.DELIVER,
  faction: MithrasSecuritySystems
}

const CovertResearch_Objective1_CSI: objective = {
  name: "Covert Research - Cargo",
  description: "Retrieve the cargo from the fortified hideout in Kiu Vongsa and report back to Lab Rat",
  position: [0.9300319890170154, -0.9370192352283137],
  type: ObjectiveType.DELIVER,
  faction: CrimsonShieldInternational
}


export const CovertResearch: task = {
  name: "Covert Research",
  description: "Thank you! Thank you so much! I understand the trust you've placed in me, and I assure you it will not be in vain. The contents of this container hold incredible potential, and I believe it may be the key to truly understanding what's happening here. I know you must be curious about what's inside, but I must keep it a secret for now, sorry. Rest assured that once I know more, I'll share my findings with you. I'm sure that together, we'll get to the bottom of all of this!",
  objectives: [
    CovertResearch_Objective1_LRI,
    CovertResearch_Objective1_MMS,
    CovertResearch_Objective1_CSI,
  ],
  vendor: LabRat,
  level: 0
}