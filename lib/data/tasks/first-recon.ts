import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const FirstRecon_Objective1_LRI: objective = {
  name: "First Recon - Gas Station",
  description: "Check the area around the gas station",
  position: [0.8850531906202619, -0.46048164367675787],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const FirstRecon_Objective2_LRI: objective = {
  name: "First Recon - Convenience Store",
  description: "Check the convenience store",
  position: [0.9103887911042275, -0.450171234804766],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const FirstRecon_Objective3_LRI: objective = {
  name: "First Recon - Demolished Building",
  description: "Check the demolished building",
  position: [0.914428628405645, -0.4313850402832032],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}


const FirstRecon_Objective1_MMS: objective = {
  name: "First Recon - Gas Station",
  description: "Check the area around the gas station",
  position: [0.5611318903643601, -0.704326629638672],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const FirstRecon_Objective2_MMS: objective = {
  name: "First Recon - Convenience Store",
  description: "Check the convenience store",
  position: [0.5348353745577434, -0.6961697419754388],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const FirstRecon_Objective3_MMS: objective = {
  name: "First Recon - Demolished Building",
  description: "Check the demolished building",
  position: [0.5197869799764396, -0.7078027725219728],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}


const FirstRecon_Objective1_CSI: objective = {
  name: "First Recon - Gas Station",
  description: "Check the area around the gas station",
  position: [0.8911442936782111, -0.9258985519409181],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}

const FirstRecon_Objective2_CSI: objective = {
  name: "First Recon - Convenience Store",
  description: "Check the convenience store",
  position: [0.9061982281012511, -0.9488904036533642],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}

const FirstRecon_Objective3_CSI: objective = {
  name: "First Recon - Demolished Building",
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