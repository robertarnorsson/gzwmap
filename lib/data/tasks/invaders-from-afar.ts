import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Artisan} from "@/lib/data/vendors";
import { Sawmill } from "../locations";

const InvadersFromAfar_Objective1: objective = {
    id: "O-OF5FHG",
    name: "Search for Leads",
    description: "Search for leads about what happened to the hostiles in the Sawmill",
    position: [10424.322239278214, 17415.442215755753],
    type: ObjectiveType.LOCATE,
    image: "/objectives/invaders-from-afar-search-for-leads.webp",
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.SAWMILL],
    location: Sawmill
}

const InvadersFromAfar_Objective2: objective = {
    id: "O-G52BQ7",
    name: "Records",
    description: "Find records of the hostile group's orders",
    position: [10383.822239278214, 17300.442215755753],
    type: ObjectiveType.COLLECT,
    image: "/objectives/invaders-from-afar-medics-notes.webp",
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.SAWMILL],
    location: Sawmill
}

export const InvadersFromAfar: task = {
    id: "T-HTYMGQ",
    name: "Invaders From Afar",
    briefing: "Merc, I got some work for you. It seems that every asshole in a thousand-mile radius took the disaster that happened here as a fucking invitation and is now running around and causing havoc. You and your lot are bad enough, but at least you're easy to figure out since all you care about is money, but these idiots… I have no idea what they're doing here, and I refuse to be kept in the dark about what's happening in my own country! Here's the deal: get back there and find out exactly who they are and why they're there. I've heard about the explosives – word travels fast – but I can't believe they're taking over a damn Sawmill just to make fireworks! Look around for anything that seems out of place and bring back something that could shed some light on this nonsense. And don't worry, you won't be doing it for free. After all, I told you you're easy to figure out…",
    debriefing: "Hah, looks like somebody got their asses kicked and is now licking their wounds! Those idiots were ordered to come here and attack Fort Narith. They probably thought it would be empty after what the damn UNLRA did to this place, but they were in for a big surprise. With you and the other PMC bastards waltzing in here, I suspect they're scared shitless now, just looking for a way out. Good. This should happen to everyone who comes here uninvited. Everyone, you understand, merc?",
    objectives: [
        InvadersFromAfar_Objective1,
        InvadersFromAfar_Objective2,
    ],
    vendor: Artisan,
    level: 0,
}