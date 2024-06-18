import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Turncoat } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";

const AcademicIntrest_Objective1: objective = {
    id: "N/A",
    name: "Suspicious Box",
    description: "Retrieve evidence of drug trade in Midnight Sapphire and report back to Turncoat",
    position: [16546.15859099954, 21620.638883484327],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.TURNCOAT, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const AcademicIntrest: task = {
    id: "N/A",
    name: "Academic Intrest",
    briefing: "Friend, I've heard that you're looking for the place where drugs were sold to the upper crust in Midnight Sapphire. Regrettably, I can't divulge the location, as I was more interested in other forms of entertainment during my stay. Rest assured that I regret my decision now, as I wouldn't have to bother you to ask for the favor of discovering the place of sale for me. Of course, only for academic reasons. I'm very interested in the history of the Lamang drug trade. Be so kind as to help me with my research, friend. No need to inform other interested parties, nobody would appreciate information about the local drug market as much as I would.",
    debriefing: "Friend, you are a great detective. Nothing escapes you. It was very clever of them to use the reception as a transfer point and hide the goods in the garbage room. I'm eternally grateful for your insight, friend.",
    objectives: [
      AcademicIntrest_Objective1
    ],
    vendor: Turncoat,
    level: 0,
}