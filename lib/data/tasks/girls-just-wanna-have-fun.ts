import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";

const GirlsJustWannaHaveFun_Objective1: objective = {
    id: "N/A",
    name: "Body",
    description: "Search the Midnight Sapphire and uncover what happened to Ying Vilaysack",
    position: [16879.427020321706, 21351.778631215322],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.LABRAT, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const GirlsJustWannaHaveFun: task = {
    id: "N/A",
    name: "Girls Just Wanna Have Fun",
    briefing: "We have been asked to search for another missing local. This time, it's an employee of the Midnight Sapphire who has mysteriously disappeared. Her name is Ying Vilaysack, and according to her friends, she was last seen in the company of a wealthy-looking man. They went to one of the villas at the day of the Event, and then all hell broke loose... Please look for her. She was known to like to party, but she always made sure someone knew she was okay. Her friends are distraught. I hope we find her safe.",
    debriefing: "She overdosed on drugs and was left behind? The rich man must have fled the moment something went wrong. I knew it was a long shot, but I still hoped we could bring some good news… at least this time. I will tell her friends what happened.",
    objectives: [
      GirlsJustWannaHaveFun_Objective1
    ],
    vendor: LabRat,
    level: 0,
}