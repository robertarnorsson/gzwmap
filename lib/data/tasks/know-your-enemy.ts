import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Turncoat } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";
import { Kate } from "@/lib/data/keys/midnight-sapphire";

const KnowYourEnemy_Objective1: objective = {
    id: "N/A",
    name: "Intel",
    description: "Retrieve intel on the former Fort Narith commander and report back to Turncoat",
    position: [16911.92862791081, 21472.78506157174],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.TURNCOAT, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire,
    key: Kate
}

export const KnowYourEnemy: task = {
    id: "N/A",
    name: "Know Your Enemy",
    briefing: "Friend, how do you like Midnight Sapphire? A magnificent sight, am I right? I have fond memories of this beautiful place. In better times, you could find anything your heart desired there. I said in better times, but even today, a diligent man can find useful things. I need a favor from you. It seems that the former commander of Fort Narith, may him and his foreign parents burn in hell, was a visitor who stayed in one of the villas at the resort. Find it and bring me some documents that will tell me more about him. Go and be sure that a pleasant reward awaits you.",
    debriefing: "Ha! So, the mongrel was a double agent, feeding information to some of the other actors who have taken unwelcomed refuge in the heart of our beautiful country. Interesting, interesting. I'm not surprised he was a mole, but I suspected he was aiming a bit higher. Honestly, it's a bit of a disappointment.",
    objectives: [
      KnowYourEnemy_Objective1
    ],
    vendor: Turncoat,
    level: 0,
    key: [
      Kate
    ]
}