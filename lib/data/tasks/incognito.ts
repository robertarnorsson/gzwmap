import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";

const Incognito_Objective1: objective = {
    id: "O-QX7HA9",
    name: "Intel on the tourist",
    description: "Find the house of the mysterious individual in Tiger Bay, retrieve intel about the tourist and report back to Gunny",
    position: [21395.916148591703, 14333.918448911847],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.GUNNY, MarkerType.TIGERBAY],
    location: TigerBay
}

export const Incognito: task = {
    id: "T-SZ42FR",
    name: "Incognito",
    briefing: "We've received a tip about a tourist who was behaving strangely and didn't evacuate with the others. This individual is described as an athletic-looking white male who vanished just before the chaos erupted. While it's possible he's just a random person acting oddly, I have my doubts. It seems unlikely that someone would vanish right before shit hit the fan. I need you to investigate this mysterious individual. Our source claims he was staying at a house somewhere west of the Tiger Bay Central shopping center, so focus your search there. I have a feeling we will find something interesting.",
    debriefing: "I knew my hunch was correct! So this guy was a trained contractor who disappeared into the jungle just before the Event. He's probably working for the bastards who attacked us. Thanks to the discovery of his house and diary, we know they have been preparing for something like this for a long time.",
    objectives: [
      Incognito_Objective1
    ],
    vendor: Gunny,
    level: 0,
}