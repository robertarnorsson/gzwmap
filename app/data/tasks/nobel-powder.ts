import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Banshee } from "~/data/vendors";
import { MidnightSapphire } from "~/data/locations";
import { Difficulty4 } from "../difficulty";

const NobelPowder_Objective1: objective = {
    id: "O-M2KK98",
    name: "Suspicious Box",
    description: "Retrieve evidence of drug trade in Midnight Sapphire and report back to Banshee",
    position: [16538.73054286704, 21616.076155810195],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.MIDNIGHTSAPPHIRE, MarkerType.DIFFICULTY_4],
    location: MidnightSapphire,
    difficulty: Difficulty4
}

export const NobelPowder: task = {
    id: "T-4O3FOB",
    name: "Nobel Powder",
    briefing: "Do you have a moment? I am sure you have noticed that the island is a paradise for drugs; they are on every corner. We suspect that the government has been controlling the drug trade from the shadows. That's why we need as much proof as possible. The Midnight Sapphire was a resort for the wealthiest people, so I'm 100% sure there would be a specific place where they would keep it close enough to the guests. The rich are drawn to drugs like moths to a flame. Search the Midnight Sapphire Hotel and bring me some hard evidence.",
    debriefing: "So, the reception took care of the sales, and the garbage room was redecorated to suit a drug stash, a fitting place. I appreciate your help. Thanks to these findings, we are closer to our goal. I can't wait to put the handcuffs on the gangsters running this country.",
    objectives: [
      NobelPowder_Objective1
    ],
    vendor: Banshee,
    level: 0,
    difficulty: Difficulty4,
    cancelTaskId: "T-8IA9NP"
}