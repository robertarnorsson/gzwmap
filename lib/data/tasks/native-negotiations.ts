import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { KiuVongsa, NamThaven, PhaLang } from "@/lib/data/locations";

const NativeNegotiations_Objective1_LRI: objective = {
  id: "O-H3Z8XA",
  name: "Briefcase",
  description: "Collect the briefcase at the command tent in Lamang Recovery Initiative's Base Camp",
  position: [23453.066971878725, 22665.682017453368],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.PHALANG],
  location: PhaLang
}

const NativeNegotiations_Objective2_LRI: objective = {
  id: "O-DL6ZO3",
  name: "Stash Location",
  description: "Bring the briefcase to the car repair shop and leave it under the truck's cabin",
  position: [22545.768003999507, 20964.360732446403],
  type: ObjectiveType.STASH,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.HANDSHAKE, MarkerType.PHALANG],
  location: PhaLang
}


const NativeNegotiations_Objective1_MMS: objective = {
  id: "O-NV3WJA",
  name: "Briefcase",
  description: "Collect the briefcase at the command tent in Mithras Security Systems's Base Camp",
  position: [16725.106141123215, 10345.504346546013],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const NativeNegotiations_Objective2_MMS: objective = {
  id: "O-2FID4E",
  name: "Stash Location",
  description: "Bring the briefcase to the car repair shop and leave it under the truck's cabin",
  position: [16320.133303158234, 12228.41520729624],
  type: ObjectiveType.STASH,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
  location: NamThaven
}


const NativeNegotiations_Objective1_CSI: objective = {
  id: "O-U9ZGXI",
  name: "Briefcase",
  description: "Collect the briefcase at the command tent in Crimson Shield International's Base Camp",
  position: [9216.44857955246, 22338.25267513902],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
  location: KiuVongsa
}

const NativeNegotiations_Objective2_CSI: objective = {
  id: "O-SFEI8W",
  name: "Stash Location",
  description: "Bring the briefcase to the car repair shop and leave it under the truck's cabin",
  position: [10737.243803554842, 21156.64142256671],
  type: ObjectiveType.STASH,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
  location: KiuVongsa
}


export const NativeNegotiations: task = {
  id: "T-C97IZI",
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