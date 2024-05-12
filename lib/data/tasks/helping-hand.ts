import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { RatsNest } from "@/lib/data/tasks/rats-nest";

const HelpingHand_Objective1_LRI: objective = {
  name: "Helping Hand - Intel Folder",
  description: "Find the Intel Folder from the resturant in Pha Lang",
  position: [0.913078943048676, -0.4350616565740784],
  type: ObjectiveType.DELIVER,
  faction: LamangRecoveryInitiative
}

const HelpingHand_Objective1_MMS: objective = {
  name: "Helping Hand - Intel Folder",
  description: "Find the Intel Folder from the resturant in Nam Thaven",
  position: [0.5227110808369654, -0.7061656640474491],
  type: ObjectiveType.DELIVER,
  faction: MithrasSecuritySystems
}

const HelpingHand_Objective1_CSI: objective = {
  name: "Helping Hand - Intel Folder",
  description: "Find the Intel Folder from the resturant in Kiu Vongsa",
  position: [0.9218800751974064, -0.9486952611587008],
  type: ObjectiveType.DELIVER,
  faction: CrimsonShieldInternational
}


export const HelpingHand: task = {
  name: "Helping Hand",
  briefing: "",
  debriefing: "Excellent work. I knew I could count on you to get the job done. You managed to discover a significant piece of evidence. It appears that those hicks struck some kind of deal with the local armed forces, the LAF. Now, we don't have all the answers just yet, but this discovery opens up new avenues for investigation. We'll analyze the folder and extract any actionable intelligence it contains.",
  objectives: [
    HelpingHand_Objective1_LRI,
    HelpingHand_Objective1_MMS,
    HelpingHand_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0,
  prerequisites: RatsNest
}