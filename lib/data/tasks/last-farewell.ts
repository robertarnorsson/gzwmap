import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const LastFarewell_Objective1_LRI: objective = {
  name: "Last Farewell - Body",
  description: "Locate and mark the location of the body",
  position: [0.854994396513734, -0.44340629498993656],
  type: ObjectiveType.MARK,
  faction: LamangRecoveryInitiative
}

const LastFarewell_Objective1_MMS: objective = {
  name: "Last Farewell - Body",
  description: "Locate and mark the location of the body",
  position: [0.5731581782987111, -0.7366074238787413],
  type: ObjectiveType.MARK,
  faction: MithrasSecuritySystems
}

const LastFarewell_Objective1_CSI: objective = {
  name: "Last Farewell - Body",
  description: "Locate and mark the location of the body",
  position: [0.9029869247450095, -0.893505141021247],
  type: ObjectiveType.MARK,
  faction: CrimsonShieldInternational
}


export const LastFarewell: task = {
  name: "Last Farewell",
  briefing: "",
  debriefing: "TASK DESCRIPTION",
  objectives: [
    LastFarewell_Objective1_LRI,
    LastFarewell_Objective1_MMS,
    LastFarewell_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}