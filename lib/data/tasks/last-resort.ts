import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";

const LastResort_Objective1: objective = {
    id: "O-RY5OXA",
    name: "LAF Commander",
    description: "Eliminate the LAF commander in Midnight Sapphire",
    position: [16527.937796955, 21681.25249710426],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const LastResort: task = {
    id: "T-4C6SBC",
    name: "Last Resort",
    briefing: "The time has come to eliminate the warmonger of Midnight Sapphire, buddy. Your objective is to find the ugly bastard and put a hole through his head. Plain and simple. We have our own agenda in this part of the island and the LAF is making it difficult. Terminating this fucker as early as possible will give us a huge advantage. Plus, the effect on the morale of the soldiers would be quite significant. I suspect they will shit their pants at the sound of every falling leaf. So gear up and be on your way. The sooner this asshole disappears, the better.",
    debriefing: "Man, I feel like you were born for this shit. The Lamang army is losing commanders with the cadence of a machine gun. You know, like: Tatatatata! Excellent work!",
    objectives: [
      LastResort_Objective1
    ],
    vendor: Handshake,
    level: 0,
}