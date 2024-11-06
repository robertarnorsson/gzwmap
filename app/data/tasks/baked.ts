import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Banshee } from "~/data/vendors";
import { TigerBay } from "~/data/locations";
import { Difficulty4 } from "../difficulty";

const Baked_Objective1: objective = {
    id: "O-KUH65F",
    name: "Evidence",
    description: "Retrieve evidence of drug trade in Tiger Bay and report back to Banshee",
    position: [21727.17601269473, 14484.070829775519],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.TIGERBAY, MarkerType.DIFFICULTY_4],
    location: TigerBay,
    difficulty: Difficulty4
}

export const Baked: task = {
    id: "T-TKUAJH",
    name: "Baked",
    briefing: "Once again, I would greatly appreciate your cooperation. I'm still gathering evidence on the drug trade in Lamang, and based on what I've learned so far, there appears to be a significant trading post in the Tiger Bay area. The Ban Pa drug producers were active and frequently supplied their connections in this area. Therefore, I suspect you may find the drugs at an easily accessible location within the Tiger Bay Central shopping center. Look for anything that wouldn't raise suspicion but could potentially contain bags of white powder.",
    debriefing: "So they used the bakery to sell the drugs. I guess the bakers didn't care what kind of powder they were selling. This will help me a lot with my case, thank you.",
    objectives: [
      Baked_Objective1
    ],
    vendor: Banshee,
    level: 0,
    difficulty: Difficulty4,
    cancelTaskId: "T-OXEJCQ"
}