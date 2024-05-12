import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const LeftBehind_Objective1_LRI: objective = {
  name: "Left Behind - Body",
  description: "Locate the missing body to confirm its identity",
  position: [0.8544378292498375, -0.44340629498993656],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const LeftBehind_Objective1_MMS: objective = {
  name: "Left Behind - Body",
  description: "Locate the missing body to confirm its identity",
  position: [0.5731656157592651, -0.7360875132283897],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const LeftBehind_Objective1_CSI: objective = {
  name: "Left Behind - Body",
  description: "Locate the missing body to confirm its identity",
  position: [0.9032517355468691, -0.8930146026828379],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}


export const LeftBehind: task = {
  name: "Left Behind",
  briefing: "",
  debriefing: "What the fuck are you talking about!? If what you're saying about the body is true… This is EXACTLY why we don't mark them, see? Can you imagine the effect this would have on morale? Or if somebody here leaked this shit to the media? They would have a fucking field day with it, and our funding would go down the drain! You're doing great work, man. Just keep it to yourself, and I assure you that you and I will come out of this on top, okay?",
  objectives: [
    LeftBehind_Objective1_LRI,
    LeftBehind_Objective1_MMS,
    LeftBehind_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}