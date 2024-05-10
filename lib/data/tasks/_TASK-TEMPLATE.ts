import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const TASKNAME_Objective1_LRI: objective = {
  name: "TASK NAME - OBJECTIVE TITLE",
  description: "OBJECTIVE DESCRIPTION",
  position: [0.7533526986575634, -0.7050375729025516],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const TASKNAME_Objective1_MMS: objective = {
  name: "TASK NAME - OBJECTIVE TITLE",
  description: "OBJECTIVE DESCRIPTION",
  position: [0.7533526986575634, -0.7050375729025516],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const TASKNAME_Objective1_CSI: objective = {
  name: "TASK NAME - OBJECTIVE TITLE",
  description: "OBJECTIVE DESCRIPTION",
  position: [0.7533526986575634, -0.7050375729025516],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}


export const TASKNAME: task = {
  name: "TASK NAME",
  description: "TASK DESCRIPTION",
  objectives: [
    TASKNAME_Objective1_LRI,
    TASKNAME_Objective1_MMS,
    TASKNAME_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}