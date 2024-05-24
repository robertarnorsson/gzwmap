import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Artisan } from "@/lib/data/vendors";
import { BanPa } from "@/lib/data/locations";

const AtTheMoundsOfMadness_Objective1: objective = {
    id: "",
    name: "Ominous mural",
    description: "Find an ominous mural",
    position: [0.6796781713830262, -0.4192399978637696],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.BANPA],
    location: BanPa
}

const AtTheMoundsOfMadness_Objective2: objective = {
    id: "",
    name: "Eerie mural",
    description: "Find an eerie mural",
    position: [0.695965105589753, -0.42366027832031256],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.BANPA],
    location: BanPa
}

const AtTheMoundsOfMadness_Objective3: objective = {
    id: "",
    name: "Chilling mural",
    description: "Find a chilling mural",
    position: [0.6991188024854903, -0.40928363800048834],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.BANPA],
    location: BanPa
}

const AtTheMoundsOfMadness_Objective4: objective = {
    id: "",
    name: "Disturbing statue",
    description: "Find a disturbing statue",
    position: [0.6953170854147008, -0.40263175964355474],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.BANPA],
    location: BanPa
}

export const AtTheMoundsOfMadness: task = {
    id: "",
    name: "At the Mounds of Madness",
    briefing: "Hey, merc. I’ve noticed you’ve been taking little sightseeing trips to Ban Pa. This is all probably some big fucking joke to Mr big-dick stone-cold-killer like you, but people here were terrified just to go near that place, and when somebody did, they would find them later cut to pieces lying in a ditch somewhere with their faces torn to shreds. Cut off limbs, eyes gauged out, nose and ears missing… I know it’s giving you a hard-on just thinking about it, but for people that aren’t fucking evil, this is not okay. I want to know what was happening there and why. The most widespread rumors were about some kind of cult worshipping dark spirits, so I want you to go there and look around for anything like that. Murals, statues, weird symbols, anything, ok? I’d normally say be careful, but honestly, I couldn’t care less. If you get killed, I’ll just find somebody else to do it.",
    debriefing: "Really? This is what you found out? Honestly, it looks like a complete amateur hour. All this cult shit was most likely used only to scare people off. The question is why… Run along, merc. You did your job; now get out of my sight.",
    objectives: [
        AtTheMoundsOfMadness_Objective1,
        AtTheMoundsOfMadness_Objective2,
        AtTheMoundsOfMadness_Objective3,
        AtTheMoundsOfMadness_Objective4,
    ],
    vendor: Artisan,
    level: 0,
}
