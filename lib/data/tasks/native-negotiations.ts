import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const NativeNegotiations_Objective1_LRI: objective = {
  name: "Briefcase",
  description: "Collect the briefcase at the command tent in Lamang Recovery Initiative's Base Camp",
  position: [0.982576992463779, -0.40044242241598527],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative
}

const NativeNegotiations_Objective2_LRI: objective = {
  name: "Stash Location",
  description: "Bring the briefcase to the car repair shop and leave it under the truck's cabin",
  position: [0.9086208979379335, -0.4387228751181361],
  type: ObjectiveType.STASH,
  faction: LamangRecoveryInitiative
}


const NativeNegotiations_Objective1_MMS: objective = {
  name: "Briefcase",
  description: "Collect the briefcase at the command tent in Mithras Security Systems's Base Camp",
  position: [0.44668473032998596, -0.6884727445317518],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems
}

const NativeNegotiations_Objective2_MMS: objective = {
  name: "Stash Location",
  description: "Bring the briefcase to the car repair shop and leave it under the truck's cabin",
  position: [0.5286700422306424, -0.7060680928001074],
  type: ObjectiveType.STASH,
  faction: MithrasSecuritySystems
}


const NativeNegotiations_Objective1_CSI: objective = {
  name: "Briefcase",
  description: "Collect the briefcase at the command tent in Crimson Shield International's Base Camp",
  position: [0.968696024391699, -1.0107180507109528],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational
}

const NativeNegotiations_Objective2_CSI: objective = {
  name: "Stash Location",
  description: "Bring the briefcase to the car repair shop and leave it under the truck's cabin",
  position: [0.917427616279107, -0.9449550300110833],
  type: ObjectiveType.STASH,
  faction: CrimsonShieldInternational
}


export const NativeNegotiations: task = {
  name: "Native Negotiations",
  briefing: "Great news! We have a unique opportunity to enlist the support of a local native who wishes to join our cause. The thing is, they require payment upfront as a sign of trust, so I'll need you to deliver a case containing the agreed-upon amount to a designated drop-off point, which you'll find below a truck in the town's car repair shop. Once you reach the location, just leave the case with the money and return back. Please don't engage in unecessary interactions or reveal our intentions to anyone else. This transaction must remain discreet and confidential. I don't want to put anybody at risk more than we already have. The native's knowledge of the region and local dynamics could significantly benefit our operations, so deliver the payment and return safely!",
  debriefing: "Excellent work! The potential benefits of this alliance cannot be overstated. Our access to local knowledge and resources will greatly enhance our capabilities in this challenging environment. We have taken a significant step forward in securing a strong foothold in this region.",
  note: "You need a briefcase from the command tent in the base camp of the faction you are working for.",
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