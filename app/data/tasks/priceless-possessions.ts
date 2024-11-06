import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import { MidnightSapphire } from "~/data/locations";

const PricelessPossessions_Objective1: objective = {
    id: "O-E5SC7H",
    name: "Golden Golf Club",
    description: "Retrieve the priceless golf club at the golf course in Midnight Sapphire and report back to Handshake",
    position: [16011.869230751492, 22096.213723589804],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire,
    image: "/objectives/priceless-possessions.webp"
}

export const PricelessPossessions: task = {
    id: "T-AEK87J",
    name: "Priceless Possessions",
    briefing: "Hey there, champ. Are you still interested in making some sweet money on the side? That was just a rhetorical question, of course you are! Who wouldn't, right? Another dejected gentleman contacted me with a request to retrieve his priceless possessions. This time we are rescuing some fancy golf club. I'm more of a tennis guy, so I don't personally know how expensive these things are, but judging by the fact that the client is willing to pay top dollar, it must be something special. You know, made of solid gold or sanctified with the blood of Tiger Woods himself. Go to the resort and check out the golf course. The client practically lived there, so the club should be somewhere around that place.",
    debriefing: "Well, look at that beauty! I'm starting to ponder if it wouldn't be better to appropriate them. Ha! Just kidding. The money the client is offering is much more appealing. Excellent work, I'll get back to you if anything else pops up.",
    objectives: [
      PricelessPossessions_Objective1
    ],
    vendor: Handshake,
    level: 0,
}