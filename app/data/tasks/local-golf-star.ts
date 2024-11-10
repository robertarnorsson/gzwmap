import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Turncoat } from "~/data/vendors";
import { MidnightSapphire } from "~/data/locations";

const LocalGolfStar_Objective1: objective = {
    id: "O-1F71A3",
    name: "Golden Golf Club",
    description: "Retrieve the priceless golf club at the golf course in Midnight Sapphire and report back to Turncoat",
    position: [16011.869230751492, 22083.272798794795],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire,
    image: "/assets/objectives/local-golf-star.webp"
}

export const LocalGolfStar: task = {
    id: "T-9C1JC2",
    name: "Local Golf Star",
    briefing: "Friend, I have the utmost respect for Mr. Handshake, and I don't want to go against him, but I am very interested in the golf club you were asked to retrieve. You see, I used to play golf in better times, and it would be encouraging to own such a beauty. I would display the golf club in a place where I could see it every day and look forward to the time when I could play this fantastic sport again. I would appreciate it very much if you could do me this little favor. I'm sure Mr. Handshake wouldn't mind not receiving this lovely golf club.",
    debriefing: "Friend, you have brightened my day. The gaiety I feel is stupendous. I will cherish this beauty like a treasure. Never shall I forget your wise choice.",
    objectives: [
      LocalGolfStar_Objective1
    ],
    vendor: Turncoat,
    level: 0,
}