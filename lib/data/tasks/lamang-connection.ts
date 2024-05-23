import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Banshee} from "@/lib/data/vendors";

const LamangConnection_Objective1: objective = {
    id: "",
    name: "Evidence",
    description: "Retrieve the evidence from Ban Pa and report back",
    position: [0.6930706147771847, -0.41615009307861334],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.BANPA]
}

export const LamangConnection: task = {
    id: "",
    name: "Lamang Connection",
    briefing: "You got a minute? I want to talk to you about that fishing village - Ban Pa, it’s called. I stumbled on that name multiple times during my investigation, and it was never good. I see you have already looked into it and found out what was happening there. I have to say I’m impressed, but it’s not over yet. Everything points to this being just a small part of a larger operation. We can assume that the bulk of the merchandise was smuggled abroad by ships, but there was probably also a domestic distribution method. Tourists flocking in, itching for a taste of excitement, and ending up OD’d in a ditch somewhere - you get the picture. I’d like you to explore this possibility. If you are interested, head to Ban Pa and try to find anything that could give us a lead. They must have been keeping records of their operation, so look for a logbook, ledger, or anything of the sort they might’ve left lying around, especially in places connected to their business.",
    debriefing: "I see. So, our suspicions were spot on. The merch was intended for both foreign and domestic markets. That logbook you brought paints a much clearer picture, but we don’t have all the information yet. I’ll work on it and let you know once I discover more. Great work, by the way.",
    objectives: [
        LamangConnection_Objective1,
    ],
    vendor: Banshee,
    level: 0,
}
