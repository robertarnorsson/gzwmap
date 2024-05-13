import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const TASKNAME_Objective1_LRI: objective = {
  name: "OBJECTIVE TITLE",
  description: "OBJECTIVE DESCRIPTION",
  position: [0.7533526986575634, -0.7050375729025516],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const TASKNAME_Objective1_MMS: objective = {
  name: "OBJECTIVE TITLE",
  description: "OBJECTIVE DESCRIPTION",
  position: [0.7533526986575634, -0.7050375729025516],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const TASKNAME_Objective1_CSI: objective = {
  name: "OBJECTIVE TITLE",
  description: "OBJECTIVE DESCRIPTION",
  position: [0.7533526986575634, -0.7050375729025516],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}


export const TASKNAME: task = {
  name: "TASK NAME",
  briefing: "BRIEFING DESCRIPTION",
  debriefing: "DEBRIEFING DESCRIPTION",
  note: "TASK NOTES",
  objectives: [
    TASKNAME_Objective1_LRI,
    TASKNAME_Objective1_MMS,
    TASKNAME_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}