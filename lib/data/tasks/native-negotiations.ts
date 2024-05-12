import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const NativeNegotiations_Objective1_LRI: objective = {
  name: "Native Negotiations - Briefcase",
  description: "Collect the briefcase at the command tent in Lamang Recovery Initiative's Base Camp",
  position: [0.982576992463779, -0.40044242241598527],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative
}

const NativeNegotiations_Objective2_LRI: objective = {
  name: "Native Negotiations - Stash Location",
  description: "Bring the briefcase to the car repair shop and leave it under the truck's cabin",
  position: [0.9086208979379335, -0.4387228751181361],
  type: ObjectiveType.STASH,
  faction: LamangRecoveryInitiative
}


const NativeNegotiations_Objective1_MMS: objective = {
  name: "Native Negotiations - Briefcase",
  description: "Collect the briefcase at the command tent in Mithras Security Systems's Base Camp",
  position: [0.44668473032998596, -0.6884727445317518],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems
}

const NativeNegotiations_Objective2_MMS: objective = {
  name: "Native Negotiations - Stash Location",
  description: "Bring the briefcase to the car repair shop and leave it under the truck's cabin",
  position: [0.5286700422306424, -0.7060680928001074],
  type: ObjectiveType.STASH,
  faction: MithrasSecuritySystems
}


const NativeNegotiations_Objective1_CSI: objective = {
  name: "Native Negotiations - Briefcase",
  description: "Collect the briefcase at the command tent in Crimson Shield International's Base Camp",
  position: [0.968696024391699, -1.0107180507109528],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational
}

const NativeNegotiations_Objective2_CSI: objective = {
  name: "Native Negotiations - Stash Location",
  description: "Bring the briefcase to the car repair shop and leave it under the truck's cabin",
  position: [0.917427616279107, -0.9449550300110833],
  type: ObjectiveType.STASH,
  faction: CrimsonShieldInternational
}


export const NativeNegotiations: task = {
  name: "Native Negotiations",
  briefing: "",
  debriefing: "Excellent work! The potential benefits of this alliance cannot be overstated. Our access to local knowledge and resources will greatly enhance our capabilities in this challenging environment. We have taken a significant step forward in securing a strong foothold in this region.",
  objectives: [
    NativeNegotiations_Objective1_LRI,
    NativeNegotiations_Objective2_LRI,
    NativeNegotiations_Objective1_MMS,
    NativeNegotiations_Objective2_MMS,
    NativeNegotiations_Objective1_CSI,
    NativeNegotiations_Objective2_CSI,
  ],
  vendor: Handshake,
  level: 0
}