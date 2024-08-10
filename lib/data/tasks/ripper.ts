import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";
import { TBDorm } from "../keys/tiger-bay";

const Ripper_Objective1: objective = {
    id: "O-644T0Z",
    name: "Medical Waste",
    description: "Find and search a house with large amount of medical waste",
    position: [22187.372126303824, 13994.549218864202],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.LABRAT, MarkerType.TIGERBAY],
    location: TigerBay,
    key: TBDorm
}

export const Ripper: task = {
    id: "T-ECYT5Q",
    name: "Ripper",
    briefing: "I'm afraid I have bad news. Judging from all that you've managed to uncover at the Blue Lagoon, I am fairly certain it wasn't just slavery or sex work that the kidnapped tourists were subjected to. I feel queasy just thinking about it, but we have to explore all plausible avenues to find out the truth. We know that some of the poor people were transported to Tiger Bay, so I'll need you to search the place and look for any large amounts of medical waste or other signs of unauthorized surgery. If you find something like this, gain access to the house, search it, and report back to me. God, I really hope I am wrong on this one...",
    debriefing: "Just what kind of place was this? These monsters must have been operating here for a long time right under everyone's noses, and while, professionally, I appreciate the surgical craftsmanship on display, I cannot condone acts like this. Were they that clever, or, even worse, did some higher-up give them their blessing and cover up for them?",
    objectives: [
      Ripper_Objective1
    ],
    vendor: LabRat,
    level: 0,
    key: [
        TBDorm
    ]
}