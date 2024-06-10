import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";

const CelebrityCrash_Objective1: objective = {
    id: "",
    name: "VHS",
    description: "Retrieve the VHS and report back to Handshake",
    position: [17057.259276553494, 21489.977637807326],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const CelebrityCrash: task = {
    id: "",
    name: "Celebrity Crash",
    briefing: "Man, it seems Midnight Sapphire was a pervert's paradise. Remember that fucked up video we secured last time? Well, I regretfully do, but this isn't about me. No, it's about our new client. I've been contacted by a very famous celebrity who would really appreciate it if we could retrieve a VHS from his villa. He was there partying like an animal in the heat and recording some fond memories with the locals—memories that could shatter his carefully crafted humanitarian image and possibly even land him in jail. Go to the resort and retrieve the tape.",
    debriefing: "Great job, buddy! Was that the only VHS tape in the villa? Good. Previous experience has taught me not to watch similar videos, so I'm glad I don't have to retraumatize myself. Here's your bonus, pal.",
    objectives: [
      CelebrityCrash_Objective1
    ],
    vendor: Handshake,
    level: 0,
}