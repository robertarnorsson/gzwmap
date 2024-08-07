import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Turncoat } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";

const BuyerOfUntoldTruths_Objective1: objective = {
    id: "N/A",
    name: "Medical Records",
    description: "Retrieve medical records and report back to Turncoat",
    position: [22051.475971994005, 14636.447416439318],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.TIGERBAY],
    location: TigerBay
}

export const BuyerOfUntoldTruths: task = {
    id: "N/A",
    name: "Buyer of Untold Truths",
    briefing: "Friend, I've heard that you found some interesting things in the abandoned UN camp. As you know, I'm an information trader, always on the lookout for new secrets. Therefore, I would like to ask you to bring me the files you are looking for right now. There are always people who would pay good money to get documents that will reveal at least some of the mysteries that have befallen this beautiful country. And with your help, we can quench their thirst for answers. I look forward to seeing you soon.",
    debriefing: "Friend, this is marvelous! These documents are full of groundbreaking and shocking information. The UN did research and experimentation on the locals and discovered a lot about the Event and how it affected people. You have my thanks for these files. And as always, I will make good use of them.",
    objectives: [
        BuyerOfUntoldTruths_Objective1
    ],
    vendor: Turncoat,
    level: 0,
}