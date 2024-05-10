import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const FirstHit_Objective1_LRI: objective = {
  name: "First Hit - Criminal Leader",
  description: "Neutralize the criminal leader in Pha Lang",
  position: [0.9032189967270826, -0.4536837997086064],
  type: ObjectiveType.ELIMINATION,
  faction: LamangRecoveryInitiative
}

const FirstHit_Objective1_MMS: objective = {
  name: "First Hit - Criminal Leader",
  description: "Neutralize the criminal leader in Nam Thaven",
  position: [0.5425851766511464, -0.6980022030209022],
  type: ObjectiveType.ELIMINATION,
  faction: MithrasSecuritySystems
}

const FirstHit_Objective1_CSI: objective = {
  name: "First Hit - Criminal Leader",
  description: "Neutralize the criminal leader in Kiu Vongsa",
  position: [0.9016802718607833, -0.9424832250787475],
  type: ObjectiveType.ELIMINATION,
  faction: CrimsonShieldInternational
}


export const FirstHit: task = {
  name: "First Hit",
  description: "Another job well done! That bastard won't be causing us any more trouble, thanks to your swift and efficient action. Keep up the good work!",
  objectives: [
    FirstHit_Objective1_LRI,
    FirstHit_Objective1_MMS,
    FirstHit_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}