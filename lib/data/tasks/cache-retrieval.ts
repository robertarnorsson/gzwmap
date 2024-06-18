import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import {
    CrimsonShieldInternational,
    LamangRecoveryInitiative,
    MithrasSecuritySystems
} from "@/lib/data/factions";
import { GPSTracker } from "@/lib/data/items";
import { KiuVongsa, NamThaven, PhaLang } from "../locations";

const CacheRetrieval_Objective1_LRI: objective = {
    id: "N/A",
    name: "Warehouse Cache",
    description: "Find and mark the cache in one of Pha Lang's warehouses",
    position: [22351.614281876133, 21208.327357796472],
    type: ObjectiveType.MARK,
    faction: LamangRecoveryInitiative,
    image: "/objectives/warehouse-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.PHALANG],
    location: PhaLang
}

const CacheRetrieval_Objective2_LRI: objective = {
    id: "N/A",
    name: "Lumberyard Cache",
    description: "Find and mark the cache in a shed at Pha Lang's Lumberyard",
    position: [22032.5, 20837.5],
    type: ObjectiveType.MARK,
    faction: LamangRecoveryInitiative,
    image: "/objectives/lumberyard-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.PHALANG],
    location: PhaLang
}

const CacheRetrieval_Objective1_MMS: objective = {
    id: "N/A",
    name: "Warehouse Cache",
    description: "Find and mark the cache in one of Nam Thaven's warehouses",
    position: [16630.41218690416, 12167.812386418878],
    type: ObjectiveType.MARK,
    faction: MithrasSecuritySystems,
    image: "/objectives/warehouse-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.NAMTHAVEN],
    location: NamThaven
}

const CacheRetrieval_Objective2_MMS: objective = {
    id: "N/A",
    name: "Lumberyard Cache",
    description: "Find and mark the cache in a shed at Nam Thaven's Lumberyard",
    position: [16639.577605067865, 12656.98797938061],
    type: ObjectiveType.MARK,
    faction: MithrasSecuritySystems,
    image: "/objectives/lumberyard-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.NAMTHAVEN],
    location: NamThaven
}

const CacheRetrieval_Objective1_CSI: objective = {
    id: "N/A",
    name: "Warehouse Cache",
    description: "Find and mark the cache in one of Kiu Vongsa's warehouses",
    position: [10459.588012501905, 20998.130589535205],
    type: ObjectiveType.MARK,
    faction: CrimsonShieldInternational,
    image: "/objectives/warehouse-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.KIUVONGSA],
    location: KiuVongsa
}

const CacheRetrieval_Objective2_CSI: objective = {
    id: "N/A",
    name: "Lumberyard Cache",
    description: "Find and mark the cache in a shed at Kiu Vongsa's Lumberyard",
    position: [10771.66995589244, 20626.047345183382],
    type: ObjectiveType.MARK,
    faction: CrimsonShieldInternational,
    image: "/objectives/lumberyard-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.KIUVONGSA],
    location: KiuVongsa
}


export const CacheRetrieval: task = {
    id: "N/A",
    name: "Cache Retrieval",
    briefing: "",
    debriefing: "Great job! You managed to gather some valuable intel. I knew I could count on you. Don't forget our primary objective at all times is to ensure the smooth running of our operation while safeguarding the interests of our employers. We're in uncharted territory here, and it's up to us to make it work.",
    note: "You will need two GPS Markers to complete this task",
    objectives: [
        CacheRetrieval_Objective1_LRI,
        CacheRetrieval_Objective2_LRI,
        CacheRetrieval_Objective1_MMS,
        CacheRetrieval_Objective2_MMS,
        CacheRetrieval_Objective1_CSI,
        CacheRetrieval_Objective2_CSI
    ],
    vendor: Gunny,
    level: 0,
    items: [
        GPSTracker,
        GPSTracker
    ]
}