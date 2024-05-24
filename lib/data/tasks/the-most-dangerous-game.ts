import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Artisan } from "@/lib/data/vendors";
import { HuntersParadise } from "../locations";

const TheMostDangerousGame_Objective1: objective = {
    id: "",
    name: "The True Nature",
    description: "Ascertain the true nature of the VIP section",
    position: [0.9560722120601184, -0.801529884338379],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise
}

const TheMostDangerousGame_Objective2: objective = {
    id: "",
    name: "Intel",
    description: "Retrieve intel about Hunter's Paradise VIP program",
    position: [0.9543874710542167, -0.7971525192260743],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise
}

export const TheMostDangerousGame: task = {
    id: "",
    name: "The Most Dangerous Game",
    briefing: "Merc, I see you and science girl over there are looking into Hunter’s Paradise. Let me tell you, that place was surrounded by gruesome rumors from the moment it was opened. I want to know if all that shit was true once and for all, and you’re gonna help me with it. Just get in there and keep your eyes open for any intel that could help us understand what exactly was going on there. I’m sure there has to be at least one piece of paper with some info over there. Probably somewhere around the “VIP” section, I’d say. ",
    debriefing: "Those bastards… those damn bastards! That entire range was one sick joke. Animals from all over the world, endangered species… even people! You could pick whatever, kill it, and, oh God… and eat it. See what foreigners brought to my country, merc? Only death and misery. Like always, same as you. Just leave me alone, I think I’m gonna be sick…",
    objectives: [
        TheMostDangerousGame_Objective1,
        TheMostDangerousGame_Objective2,
    ],
    vendor: Artisan,
    level: 0,
}
