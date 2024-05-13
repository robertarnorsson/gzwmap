import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const FirstHit_Objective1_LRI: objective = {
  name: "Criminal Leader",
  description: "Neutralize the criminal leader in Pha Lang",
  position: [0.9032189967270826, -0.4536837997086064],
  type: ObjectiveType.ELIMINATION,
  faction: LamangRecoveryInitiative
}

const FirstHit_Objective1_MMS: objective = {
  name: "Criminal Leader",
  description: "Neutralize the criminal leader in Nam Thaven",
  position: [0.5425851766511464, -0.6980022030209022],
  type: ObjectiveType.ELIMINATION,
  faction: MithrasSecuritySystems
}

const FirstHit_Objective1_CSI: objective = {
  name: "Criminal Leader",
  description: "Neutralize the criminal leader in Kiu Vongsa",
  position: [0.9016802718607833, -0.9424832250787475],
  type: ObjectiveType.ELIMINATION,
  faction: CrimsonShieldInternational
}


export const FirstHit: task = {
  name: "First Hit",
  briefing: "Based on all you managed to find out during your previous work, it looks like some of the rats in the town have formed a little gang and are trying to get themselves organized. It#s also moree than probable that their leader is one who struck a deal with the LAF to undermine our operations in the area, and we can't have that, can we? Apparently, this asshole thinks he's tough shit and even wears a red beret. You'll probably find him in and around the marketplace, so gear up and shoot that stupid shit off his head!",
  debriefing: "Another job well done! That bastard won't be causing us any more trouble, thanks to your swift and efficient action. Keep up the good work!",
  objectives: [
    FirstHit_Objective1_LRI,
    FirstHit_Objective1_MMS,
    FirstHit_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}