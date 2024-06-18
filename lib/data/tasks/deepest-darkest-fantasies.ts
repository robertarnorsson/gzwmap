import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";

const DeepestDarkestFantasies_Objective1: objective = {
    id: "N/A",
    name: "Flash Drive",
    description: "Retrieve the flash drive and report back to Handshake",
    position: [16998.34910938341, 21767.54255215411],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const DeepestDarkestFantasies: task = {
    id: "N/A",
    name: "Deepest, Darkest Fantasies",
    briefing: "I've been contacted by a wealthy individual who needs a favor. According to his information, there is supposed to be a forgotten flash drive with recordings of a politician from a neighboring state doing NSFW stuff, and he wants it. The politician has been staying at Villa Lucia. Listen, I doubt he is thirsty for it because he has some weird fucking kink for creepy politicians; it's obviously for blackmail. Nevertheless, we want to help him because we stand to gain a lot from working with this man. So search the Midnight Sapphire villas for hardcore scat porn or whatever the official was doing there, and come back soon. We need a happy ending for this task.",
    debriefing: "Shit! This is fucked up as hell! The video is weirder than I imagined, buddy, I'm not gonna lie, but the more twisted the content, the happier our client will be.",
    objectives: [
      DeepestDarkestFantasies_Objective1
    ],
    vendor: Handshake,
    level: 0,
}