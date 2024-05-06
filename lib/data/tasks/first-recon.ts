import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const FirstRecon_Objective1_LRI: objective = {
  description: "Check the area around the gas station",
  position: [0.884621197109786, -0.4590654373168946],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const FirstRecon_Objective2_LRI: objective = {
  description: "Check the convenience store",
  position: [0.9100509435030489, -0.4507536402605883],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const FirstRecon_Objective3_LRI: objective = {
  description: "Check the demolished building",
  position: [0.914428628405645, -0.4313850402832032],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}


const FirstRecon_Objective1_MMS: objective = {
  description: "Check the area around the gas station",
  position: [0.5603110433327665, -0.7058286666870118],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const FirstRecon_Objective2_MMS: objective = {
  description: "Check the convenience store",
  position: [0.53542636300211, -0.6961297988891603],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const FirstRecon_Objective3_MMS: objective = {
  description: "Check the demolished building",
  position: [0.5197869799764396, -0.7078027725219728],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}


const FirstRecon_Objective1_CSI: objective = {
  description: "Check the area around the gas station",
  position: [0.8927858658087661, -0.9252977371215821],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}

const FirstRecon_Objective2_CSI: objective = {
  description: "Check the convenience store",
  position: [0.9056592213950195, -0.9486436843872071],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}

const FirstRecon_Objective3_CSI: objective = {
  description: "Check the demolished building",
  position: [0.9257467472046368, -0.9496307373046876],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}


export const FirstRecon: task = {
  name: "First Recon",
  description: "Great job! You managed to gather some valuable intel. I knew I could count on you. Don't forget our primary objective at all times is to ensure the smooth running of our operation while safeguarding the interests of our employers. We're in uncharted territory here, and it's up to us to make it work.",
  objectives: [
    FirstRecon_Objective1_LRI,
    FirstRecon_Objective2_LRI,
    FirstRecon_Objective3_LRI,
    FirstRecon_Objective1_MMS,
    FirstRecon_Objective2_MMS,
    FirstRecon_Objective3_MMS,
    FirstRecon_Objective1_CSI,
    FirstRecon_Objective2_CSI,
    FirstRecon_Objective3_CSI,
  ],
  vendor: Handshake,
  level: 0
}