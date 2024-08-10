import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";

const Weeding_Objective1: objective = {
    id: "O-FE2S5K",
    name: "Hostiles",
    description: "Neutralize 30 LAF forces at Midnight Sapphire",
    position: [16595.637734391563, 21726.825582014582],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const Weeding: task = {
    id: "T-D1YEWB",
    name: "Weeding",
    briefing: "Hey there, buddy. I feel like you haven't had a proper action in a while, so I came to the conclusion that the best way to hone your specific skills would be to let you go on a rampage. We need the Midnight Sapphire to be less cramped by the LAF cunts. Even though we already casued them quite a lot of trouble, the soldiers there remain strong and unyielding… or fucking stupid. Well, either way, that's too bad for them. Infiltrate the resort and kill as many as you can. Good hunting, champ.",
    debriefing: "Bravo! This is exactly what I wanted and what we needed. The locations protected by the LAF are falling like dominoes. A beautiful sight.",
    objectives: [
      Weeding_Objective1
    ],
    vendor: Handshake,
    level: 0,
}