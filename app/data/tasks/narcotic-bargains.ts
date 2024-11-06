import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Turncoat } from "~/data/vendors";
import { TigerBay } from "~/data/locations";
import { Difficulty4 } from "../difficulty";

const NarcoticBargains_Objective1: objective = {
    id: "O-S7RK8U",
    name: "Evidence",
    description: "Retrieve evidence of drug trade in Tiger Bay and report back to Turncoat",
    position: [21732.393692315905, 14478.77037410165],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.TIGERBAY, MarkerType.DIFFICULTY_4],
    location: TigerBay,
    difficulty: Difficulty4,
}

export const NarcoticBargains: task = {
    id: "T-OXEJCQ",
    name: "Narcotic Bargains",
    briefing: "Friend, is what I hear true? Are you looking for more information about the drug trade on the island? That's perfect! As you know, I am also very interested in this market... because of my curious personality, of course. Ha ha. Anyway, I don't know what you were offered for your discoveries, but if you bring me the information you find, I will be extremely generous. I hope you will return shortly.",
    debriefing: "Friend, you are a miracle! It's so educational to learn how drug distribution works. I feel like a drug archaeologist discovering long-lost treasures. I won't forget your friendliness.",
    objectives: [
        NarcoticBargains_Objective1
    ],
    vendor: Turncoat,
    level: 0,
    difficulty: Difficulty4,
    cancelTaskId: "T-TKUAJH"
}