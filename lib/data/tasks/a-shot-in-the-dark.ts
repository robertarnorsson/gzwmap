import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Banshee } from "@/lib/data/vendors";
import { HuntersParadise } from "@/lib/data/locations";
import { Difficulty3 } from "@/lib/data/difficulty";

const AShotInTheDark_Objective1: objective = {
    id: "O-IKLQZR",
    name: "Client List",
    description: "Locate the client list at Hunter's Paradise and hand it to Banshee",
    position: [14318.494068376996, 22033.120985804435],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.HUNTERSPARADISE, MarkerType.DIFFICULTY_3],
    location: HuntersParadise,
    difficulty: Difficulty3,
}

export const AShotInTheDark: task = {
    id: "T-FMVOJS",
    name: "A Shot In The Dark",
    briefing: "I see you've been tasked by your superiors to retrieve a list of clients from Hunter's Paradise. While I understand the importance of following orders, I urge you to hand over the list to me instead. If even half of the rumors about that place are true, this list could contain the names of individuals involved in truly despicable acts. It would be unfortunate if the list were to disappear or, worse yet, be used for blackmail. It's in our best interest to secure the list and deliver it to me promptly. And don't worry, your efforts won't go unrewarded.",
    debriefing: "Excellent work! Just glancing over the list, I can see some incredibly high-profile people. This is exactly what we need to bring them to justice. You have done very well, thank you.",
    objectives: [
      AShotInTheDark_Objective1
    ],
    vendor: Banshee,
    level: 0,
    difficulty: Difficulty3,
    note: 'Will cancel "Up To Snuff"'
}