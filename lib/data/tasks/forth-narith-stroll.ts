import {ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";

const ForthNarithStroll_Objective1: objective = {
    name: "Barracks Entrance",
    description: "Check the barracks/northern entrance",
    position: [0.6474051996779876, -0.933788291726352],
    type: ObjectiveType.DISCOVER,
}

const ForthNarithStroll_Objective2: objective = {
    name: "Main Entrance",
    description: "Check the main entrance",
    position: [0.6334006457514472, -0.9221844175856476],
    type: ObjectiveType.DISCOVER,
}

const ForthNarithStroll_Objective3: objective = {
    name: "Fuel Supply Entrance",
    description: "Check the fuel supply entrance",
    position: [0.6124957273291104, -0.908842367526346],
    type: ObjectiveType.DISCOVER,
}

const ForthNarithStroll_Objective4: objective = {
    name: "Back Entrance",
    description: "Check the airfield back entrance",
    position: [0.6123181631880324, -0.9474409878248858],
    type: ObjectiveType.DISCOVER,
}

export const ForthNarithStroll: task = {
    name: "Forth Narith Stroll",
    briefing: "This is it, champ. We are going big! Fort Narith, a large military base south of the Sawmill. It is gloriously named after the bastard who controls this fucking dump. Potentially, there might be some equipment inside that could really help us out, and we don't want it just rusting away in the open, would we? Your task is to search around the military base and look for some entrances and weak points that we can capitalize on in the future. Don't engage the enemy, we don't want to unnecessarily alert them to our plans. So, if possible, move stealthily. But of course, if you can't avoid a confrontation, do what you have to do. See you soon.",
    debriefing: "Magnificent! Thanks to your hard work, we have a better understanding of the military base and its surroundings. Everything you did today will pay off in the near future, my man. Get some rest.",
    objectives: [
        ForthNarithStroll_Objective1,
        ForthNarithStroll_Objective2,
        ForthNarithStroll_Objective3,
        ForthNarithStroll_Objective4,
    ],
    vendor: Handshake,
    level: 0,
}