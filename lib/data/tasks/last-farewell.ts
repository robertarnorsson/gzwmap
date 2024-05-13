import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const LastFarewell_Objective1_LRI: objective = {
  name: "Body",
  description: "Locate and mark the location of the body",
  position: [0.854994396513734, -0.44340629498993656],
  type: ObjectiveType.MARK,
  faction: LamangRecoveryInitiative
}

const LastFarewell_Objective1_MMS: objective = {
  name: "Body",
  description: "Locate and mark the location of the body",
  position: [0.5731581782987111, -0.7366074238787413],
  type: ObjectiveType.MARK,
  faction: MithrasSecuritySystems
}

const LastFarewell_Objective1_CSI: objective = {
  name: "Body",
  description: "Locate and mark the location of the body",
  position: [0.9029869247450095, -0.893505141021247],
  type: ObjectiveType.MARK,
  faction: CrimsonShieldInternational
}


export const LastFarewell: task = {
  name: "Last Farewell",
  briefing: "I've got another assignment for you: Steven Clarke. He got separated from his squad during the retreat while seeking cover in a farmhouse southeast of the town's gas station. The last thing they heard on the comms was him screaming in terror and then suddendly dead silence. I need you to investigate and mark the body like before. Be extra careful on this one. I remember the guy, and he was tough as nails. No idea what happened to him to make him scream like that, so make sure the same thing doesn't happen to you. I'll provide you with a tracker right away.",
  objectives: [
    LastFarewell_Objective1_LRI,
    LastFarewell_Objective1_MMS,
    LastFarewell_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}