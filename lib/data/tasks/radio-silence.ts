import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const RadioSilence_Objective1_LRI: objective = {
  name: "Radio Silence - Comms Equipment",
  description: "Find the isolated house in the north part of Pha Lang and neutralize the equipment within ",
  position: [0.9214646094708584, -0.4371211421688215],
  type: ObjectiveType.DELIVER,
  faction: LamangRecoveryInitiative
}

const RadioSilence_Objective1_MMS: objective = {
  name: "Radio Silence - Comms Equipment",
  description: "Find the isolated house in the south part of Nam Thaven and neutralize the equipment within ",
  position: [0.5178583139635412, -0.6990768393076997],
  type: ObjectiveType.DELIVER,
  faction: MithrasSecuritySystems
}

const RadioSilence_Objective1_CSI: objective = {
  name: "Radio Silence - Comms Equipment",
  description: "Find the isolated house in the north part of Kiu Vongsa and neutralize the equipment within ",
  position: [0.9208685817808192, -0.957270720811263],
  type: ObjectiveType.DELIVER,
  faction: CrimsonShieldInternational
}


export const RadioSilence: task = {
  name: "Radio Silence",
  briefing: "",
  debriefing: "You did a great job, but what you found is troubling. There is no way the locals would gain access to equipment like that, with or without the help of the LAF. It's possible that some of our... competitors here tried to eavesdrop, but we also can't rule out the possibility that a new player has entered the game. Stay sharp. This is far from over.",
  objectives: [
    RadioSilence_Objective1_LRI,
    RadioSilence_Objective1_MMS,
    RadioSilence_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}