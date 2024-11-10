import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Turncoat } from "~/data/vendors";
import { FortNarith } from "~/data/locations";

const FamilyHeirloom_Objective1: objective = {
    id: "O-X37G0A",
    name: "Valuables",
    description: "Retrieve the valuables and report back to Turncoat",
    position: [10584.666303078553, 15588.819103574482],
    type: ObjectiveType.COLLECT,
    image: {
    large: "/assets/objectives/family-heirloom-valuables.webp",
    small: "/assets/objectives/thumbnail/family-heirloom-valuables.webp"
  },
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.FORTNARITH],
    location: FortNarith,
    note: "You can enter the house from the back and find the briefcase upstairs under the bed."
}

export const FamilyHeirloom: task = {
    id: "T-73QXOH",
    name: "Family Heirloom",
    briefing: "Friend, you got some spare time? I have a personal favor to ask of you. I had to abandon my home in a hurry and left some belongings behind. They are family heirlooms that I cherish very much. I left them in a briefcase, but I can't get there myself, so I'd like you to help me. Naturally, you're my first choice, because I know you've got a good heart, and a struggling man looking for a heartwarming patrimony won't leave you cold... I'll also give you a big bonus! For your irreducible work and your willingness to help without asking too many questions. You will find the briefcase in the largest house in Nakasa village, north of Fort Narith. It's likely to be locked, so I suggest searching the backyard for a spare key. I seem to have misplaced mine... So what do you say, friend? Are you interested in helping a local merchant in his time of need? You will not regret it, I can assure you.",
    debriefing: "Friend, you did it! You are a true treasure. I'm sure you've figured out that I wouldn't send you just for some shitty baubles. You just made the current commander of Fort Narith a lot poorer. Ha ha ha! He stashed his money in this briefcase, and you... Ha ha ha, the look on your face! I'm sorry I had to deceive you. You know how it is with money and friends - you just don't ask a friend for cash.",
    objectives: [
        FamilyHeirloom_Objective1,
    ],
    vendor: Turncoat,
    level: 0,
}