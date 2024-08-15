import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";

const TheCongressman_Objective1: objective = {
    id: "O-I5EW5P",
    name: "Smartphone",
    description: "Retrieve the smartphone and report back to Handshake",
    position: [16899.99035723491, 21558.017553103404],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const TheCongressman: task = {
    id: "T-DM8PG5",
    name: "The Congressman",
    briefing: "Hey, champ, wanna help find a missing person? A gentleman from the mainland asked for our help. He's looking for a man named Donald J. Dortmunder, who apparently stayed at the Midnight Sapphire Resort. Our client knows little about Mr. Dortmunder, but he does know that he is an avid golfer. Why is the gentleman looking for this man? I didn't ask, and I don't really need to know. Too many questions are bad for business. The most important thing is that we will get a really nice reward if we find him. Go to the resort and try to find out anything about the missing man.",
    debriefing: "So Mr. Dortmunder had a considerable debt, and someone came to his villa to collect it? Well, well, well. And according to some of the text messages on this phone, he was a busy con artist, running up debts at every turn. At least now we have an idea why our client was probably looking for him without needing to ask directly. Anyway, I'll inform him of our findings and collect our reward.",
    objectives: [
      TheCongressman_Objective1
    ],
    vendor: Handshake,
    level: 0,
}