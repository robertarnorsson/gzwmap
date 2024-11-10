import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import { FortNarith } from "~/data/locations";

const ForthNarithStroll_Objective1: objective = {
  id: "O-QB4EGH",
    name: "Barracks Entrance",
    description: "Check the barracks/northern entrance",
    position: [11003.098489773767, 14962.570158955905],
    type: ObjectiveType.LOCATE,
    image: "/assets/objectives/hacker-camera-northern-entrance.webp",
    types: [MarkerType. TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

const ForthNarithStroll_Objective2: objective = {
  id: "O-XC63B1",
    name: "Main Entrance",
    description: "Check the main entrance",
    position: [11268.325557739168, 14646.721209283283],
    type: ObjectiveType.LOCATE,
    image: "/assets/objectives/hacker-camera-main-entrance.webp",
    types: [MarkerType. TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

const ForthNarithStroll_Objective3: objective = {
  id: "O-ZPHRWT",
    name: "Fuel Supply Entrance",
    description: "Check the fuel supply entrance",
    position: [11599.629534880178, 14147.645443710015],
    type: ObjectiveType.LOCATE,
    types: [MarkerType. TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

const ForthNarithStroll_Objective4: objective = {
  id: "O-NPBL44",
    name: "Back Entrance",
    description: "Check the airfield back entrance",
    position: [10655.823621295789, 14108.87167209199],
    type: ObjectiveType.LOCATE,
    types: [MarkerType. TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

export const ForthNarithStroll: task = {
    id: "T-LCJCXT",
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