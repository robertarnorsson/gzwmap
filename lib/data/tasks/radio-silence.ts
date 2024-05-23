import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const RadioSilence_Objective1_LRI: objective = {
  id: "",
  name: "Comms Equipment",
  description: "Find the isolated house in the north part of Pha Lang and neutralize the equipment within ",
  position: [0.9214646094708584, -0.4371211421688215],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.PHALANG]
}

const RadioSilence_Objective1_MMS: objective = {
  id: "",
  name: "Comms Equipment",
  description: "Find the isolated house in the south part of Nam Thaven and neutralize the equipment within ",
  position: [0.5178583139635412, -0.6990768393076997],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN]
}

const RadioSilence_Objective1_CSI: objective = {
  id: "",
  name: "Comms Equipment",
  description: "Find the isolated house in the north part of Kiu Vongsa and neutralize the equipment within ",
  position: [0.9208685817808192, -0.957270720811263],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA]
}


export const RadioSilence: task = {
  id: "",
  name: "Radio Silence",
  briefing: "It appears that the local criminal elements we've been dealing with have acquired some advanced communication interception capabilities and are now able to monitor and decrypt our comms in real-time. This poses a significant threat to our operations and needs to be addressed immediately. Your mission is to locate and destroy the enemy's comms equipment. It's apparent that they have established a hidden communication hub within the vicinity of our base, and the most likely place is an isolated house in the northern part of town. Your task is to infiltrate this area, identify the equipment, and neutralize it. By doing so, we'll disrupt their ability to intercept our communications and regain control of the situation. Silence and stealth are paramount. We can't afford to alert those rats to our plans. Keep a low profile, gather intelligence, and strike with precision.",
  debriefing: "You did a great job, but what you found is troubling. There is no way the locals would gain access to equipment like that, with or without the help of the LAF. It's possible that some of our... competitors here tried to eavesdrop, but we also can't rule out the possibility that a new player has entered the game. Stay sharp. This is far from over.",
  objectives: [
    RadioSilence_Objective1_LRI,
    RadioSilence_Objective1_MMS,
    RadioSilence_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}