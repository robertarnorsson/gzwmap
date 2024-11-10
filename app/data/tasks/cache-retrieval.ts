import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Gunny } from "~/data/vendors";
import {
    CrimsonShieldInternational,
    LamangRecoveryInitiative,
    MithrasSecuritySystems
} from "~/data/factions";
import { GPSTracker } from "~/data/items/tools";
import { KiuVongsa, NamThaven, PhaLang } from "~/data/locations";

const CacheRetrieval_Objective1_LRI: objective = {
    id: "O-6LR8FI",
    name: "Warehouse Cache",
    description: "Find and mark the cache in one of Pha Lang's warehouses",
    position: [22351.614281876133, 21208.327357796472],
    type: ObjectiveType.MARK,
    faction: LamangRecoveryInitiative,
    image: "/assets/objectives/warehouse-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.PHALANG],
    location: PhaLang,
    items: [GPSTracker]
}

const CacheRetrieval_Objective2_LRI: objective = {
    id: "O-B89Q3J",
    name: "Lumberyard Cache",
    description: "Find and mark the cache in a shed at Pha Lang's Lumberyard",
    position: [22032.5, 20837.5],
    type: ObjectiveType.MARK,
    faction: LamangRecoveryInitiative,
    image: "/assets/objectives/lumberyard-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.PHALANG],
    location: PhaLang,
    items: [GPSTracker]
}

const CacheRetrieval_Objective1_MMS: objective = {
    id: "O-RZGP2D",
    name: "Warehouse Cache",
    description: "Find and mark the cache in one of Nam Thaven's warehouses",
    position: [16630.41218690416, 12167.812386418878],
    type: ObjectiveType.MARK,
    faction: MithrasSecuritySystems,
    image: "/assets/objectives/warehouse-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.NAMTHAVEN],
    location: NamThaven,
    items: [GPSTracker]
}

const CacheRetrieval_Objective2_MMS: objective = {
    id: "O-ZGXSH8",
    name: "Lumberyard Cache",
    description: "Find and mark the cache in a shed at Nam Thaven's Lumberyard",
    position: [16639.577605067865, 12656.98797938061],
    type: ObjectiveType.MARK,
    faction: MithrasSecuritySystems,
    image: "/assets/objectives/lumberyard-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.NAMTHAVEN],
    location: NamThaven,
    items: [GPSTracker]
}

const CacheRetrieval_Objective1_CSI: objective = {
    id: "O-SQUGAQ",
    name: "Warehouse Cache",
    description: "Find and mark the cache in one of Kiu Vongsa's warehouses",
    position: [10459.588012501905, 20998.130589535205],
    type: ObjectiveType.MARK,
    faction: CrimsonShieldInternational,
    image: "/assets/objectives/warehouse-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.KIUVONGSA],
    location: KiuVongsa,
    items: [GPSTracker]
}

const CacheRetrieval_Objective2_CSI: objective = {
    id: "O-JQ85FC",
    name: "Lumberyard Cache",
    description: "Find and mark the cache in a shed at Kiu Vongsa's Lumberyard",
    position: [10771.66995589244, 20626.047345183382],
    type: ObjectiveType.MARK,
    faction: CrimsonShieldInternational,
    image: "/assets/objectives/lumberyard-cache.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.KIUVONGSA],
    location: KiuVongsa,
    items: [GPSTracker]
}


export const CacheRetrieval: task = {
    id: "T-04U5H7",
    name: "Cache Retrieval",
    briefing: "So, you're one of the new recruits, huh? Answering the call for action and adventure, or just in it for the paycheck? Makes no damn difference to me. Just do your job well, don't get killed, and you and I won't have any problems, got it? The name's Jackson. Anton Jackson. But everyone here just calls me Gunny. Now that we have the pleasantries out of the way, I have a job for you. Some people here don't want to admit it, but we took a beating, plain and simple. Whoever was behind the attack was no ordinary local force. They were trained, well-equipped, and put some serious hurt on us. We had to abandon our positions, leaving behind a lot of gear. Now it's your turn to help us clean up this mess. We've got weapons caches unaccounted for out there, and your job is to find them and mark their exact locations. I can give you their last known whereabouts, but we need to be sure they're still there. We can't let those weapons fall into the wrong hands, so once you're done, we'll dispatch a team to recover or destroy them if needed. You got all that? Good, now go make yourself useful!",
    debriefing: "Great job! You managed to gather some valuable intel. I knew I could count on you. Don't forget our primary objective at all times is to ensure the smooth running of our operation while safeguarding the interests of our employers. We're in uncharted territory here, and it's up to us to make it work.",
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