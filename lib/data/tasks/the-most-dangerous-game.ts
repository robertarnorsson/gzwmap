import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Artisan } from "@/lib/data/vendors";
import { HuntersParadise } from "@/lib/data/locations";

const TheMostDangerousGame_Objective1: objective = {
    id: "O-R6U68K",
    name: "The True Nature",
    description: "Ascertain the true nature of the VIP section",
    position: [14089.503734323835, 22052.567700425356],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise
}

const TheMostDangerousGame_Objective2: objective = {
    id: "O-IWJCPX",
    name: "Intel",
    description: "Retrieve intel about Hunter's Paradise VIP program",
    position: [14178.003734323835, 22005.067700425356],
    type: ObjectiveType.COLLECT,
    image: "/objectives/the-most-dangerous-game.webp",
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise
}

export const TheMostDangerousGame: task = {
    id: "T-2RVX19",
    name: "The Most Dangerous Game",
    briefing: "Merc, I see you and science girl over there are looking into Hunter's Paradise. Let me tell you, that place was surrounded by gruesome rumors from the moment it was opened. I want to know if all that shit was true once and for all, and you're gonna help me with it. Just get in there and keep your eyes open for any intel that could help us understand what exactly was going on there. I'm sure there has to be at least one piece of paper with some info over there. Probably somewhere around the “VIP” section, I'd say. ",
    debriefing: "Those bastards… those damn bastards! That entire range was one sick joke. Animals from all over the world, endangered species… even people! You could pick whatever, kill it, and, oh God… and eat it. See what foreigners brought to my country, merc? Only death and misery. Like always, same as you. Just leave me alone, I think I'm gonna be sick…",
    objectives: [
        TheMostDangerousGame_Objective1,
        TheMostDangerousGame_Objective2,
    ],
    vendor: Artisan,
    level: 0,
}
