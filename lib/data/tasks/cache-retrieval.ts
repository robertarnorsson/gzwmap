import { ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { GPSTracker } from "@/lib/data/items";

const CacheRetrival_Objective1_LRI: objective = {
  name: "Cache Retrival - Warehouse Cache",
  description: "Find and mark the cache in one of the town's warehouses",
  position: [0.9193533105215791, -0.44743537902832037],
  type: ObjectiveType.MARK,
  faction: LamangRecoveryInitiative
}

const CacheRetrival_Objective2_LRI: objective = {
  name: "Cache Retrival - Lumberyard Cache",
  description: "Find and mark the cache in a shed at the town's Lumberyard",
  position: [0.9031104734435303, -0.46073913574218756],
  type: ObjectiveType.MARK,
  faction: LamangRecoveryInitiative
}

const CacheRetrival_Objective1_MMS: objective = {
  name: "Cache Retrival - Warehouse Cache",
  description: "Find and mark the cache in one of the town's warehouses",
  position: [0.5257479683866338, -0.6925562329178027],
  type: ObjectiveType.MARK,
  faction: MithrasSecuritySystems
}

const CacheRetrival_Objective2_MMS: objective = {
  name: "Cache Retrival - Lumberyard Cache",
  description: "Find and mark the cache in a shed at the town's Lumberyard",
  position: [0.5473356330411291, -0.6924083425618212],
  type: ObjectiveType.MARK,
  faction: MithrasSecuritySystems
}

const CacheRetrival_Objective1_CSI: objective = {
  name: "Cache Retrival - Warehouse Cache",
  description: "Find and mark the cache in one of the town's warehouses",
  position: [0.9106271147195721, -0.9572267532348634],
  type: ObjectiveType.MARK,
  faction: CrimsonShieldInternational
}

const CacheRetrival_Objective2_CSI: objective = {
  name: "Cache Retrival - Lumberyard Cache",
  description: "Find and mark the cache in a shed at the town's Lumberyard",
  position: [0.8939522455555373, -0.9435796737670898],
  type: ObjectiveType.MARK,
  faction: CrimsonShieldInternational
}


export const CacheRetrival: task = {
  name: "Cache Retrival",
  description: "Great job! You managed to gather some valuable intel. I knew I could count on you. Don't forget our primary objective at all times is to ensure the smooth running of our operation while safeguarding the interests of our employers. We're in uncharted territory here, and it's up to us to make it work.",
  objectives: [
    CacheRetrival_Objective1_LRI,
    CacheRetrival_Objective2_LRI,
    CacheRetrival_Objective1_MMS,
    CacheRetrival_Objective2_MMS,
    CacheRetrival_Objective1_CSI,
    CacheRetrival_Objective2_CSI
  ],
  vendor: Gunny,
  level: 0,
  items: [
    GPSTracker,
    GPSTracker
  ]
}