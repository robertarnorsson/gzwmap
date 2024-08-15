import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";

const Shortcut_Objective1: objective = {
    id: "O-QS3LEK",
    name: "Passage",
    description: "Find a passage leading to Fort Narith",
    position: [10955.607736790018, 13051.810879263514],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

export const Shortcut: task = {
    id: "T-0YQQ92",
    name: "Shortcut",
    briefing: "Hey, man. You like narrow places, right? We managed to get some intel on the bunker where the fucking rebels are holed up. Apparently, there's a secret passageway somewhere in the compound that connects the bunker to the military base. Finding it would be a smash because we could enter Fort Narith undetected. Which, needless to say, is a huge tactical advantage. I want you to take a good look around the bunker and find the place that connects these two locations. Any advantage, even the slightest, is crucial to us now, and I trust you to complete this task with flying colors. When you've fulfilled your task, report back to me.",
    debriefing: "So there is a passage, but it's blocked by debris? Well, fuck! I hate it when I get good news and bad news. That passage is useless now, but maybe we can work on it in the future and make it passable somehow. Anyway, thanks for the intel from the dungeon. It will come in handy when we attack the military base. Get some rest, champ.",
    objectives: [
        Shortcut_Objective1,
    ],
    vendor: Handshake,
    level: 0,
}
