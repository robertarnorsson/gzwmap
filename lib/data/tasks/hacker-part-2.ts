import {ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";

const HackerPartTwo_Objective1: objective = {
    name: "Codebook",
    description: "Locate the codebook from the radio room",
    position: [0.628950000322223, -0.9330815517000103],
    type: ObjectiveType.COLLECT,
    note: "In the communication room, second floor of the HQ.",
    image: "/objectives/hacker-part-2-codebook.webp",
}

const HackerPartTwo_Objective2: objective = {
    name: "Radio Tower",
    description: "Hack the radio tower at Fort Narith airfield",
    position: [0.6019090406927083, -0.91392516882042],
    type: ObjectiveType.HACK,
    image: "/objectives/hacker-2-airfield-radio-tower.webp"
}

const HackerPartTwo_Objective3: objective = {
    name: "Radio Tower",
    description: "Hack the radio tower in the base",
    position: [0.6331936154627917, -0.9298038472654225],
    type: ObjectiveType.HACK,
    image: "/objectives/hacker-part-2-radio-tower-base.webp",
}

const HackerPartTwo_Objective4: objective = {
    name: "Satellite",
    description: "Hack the satellite at Fort Narith HQ",
    position: [0.6255885427037918, -0.9299325933068704],
    type: ObjectiveType.HACK,
    note: "On the roof of the HQ.",
    image: "/objectives/hacker-2-satellite.webp"
}

export const HackerPartTwo: task = {
    name: "Hacker - Part 2",
    briefing: "Guess what I have for you, champ. That's right, another clandestine hacking mission. Go to Fort Narith and seize the means of communication. It's not that I dislike utter gibberish, but if that's the only thing we manage to get out of their transmissions, that's just blatantly miserable. Take these apparatuses and hack their transmitters. There should not be the slightest interchange that we do not know about. Also, we need to know what they are saying, so bring back some document that can help us translate the fucking balderdash we are receiving.",
    debriefing: "Sensational! Thanks to your hard work, we now know more about the plans of the Lamang army. Not a single word goes undetected.",
    note: "Make sure you have the 3 listening devices with you.",
    objectives: [
        HackerPartTwo_Objective1,
        HackerPartTwo_Objective2,
        HackerPartTwo_Objective3,
        HackerPartTwo_Objective4,
    ],
    vendor: Handshake,
    level: 0,
}