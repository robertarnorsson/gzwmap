import {ObjectiveType, objective, task} from "@/lib/types";
import {Artisan} from "@/lib/data/vendors";

const MissingColleaguePartOne_Objective1: objective = {
    name: "Note",
    description: "Locate any intel about the colleague's whereabouts",
    position: [0.6282650689997253, -0.9129726636371727],
    type: ObjectiveType.COLLECT,
}

export const MissingColleaguePartOne: task = {
    name: "Missing Colleague - Part 1",
    briefing: "Mercenary, rejoice, the terrible fate that has befallen the Lamang people has brought you another task to satisfy your money-hungry heart. I've lost contact with a colleague of mine and I need you to find out what happened to him. He worked as a mechanic at Fort Narith and lived in Savanpha village, east of the base. It shouldn't be hard to locate. I want you to look for him, or at least find out what happened to him. Time is money, as your kind of people like to say, right? So don't waste it anymore and do your damn job, merc.",
    debriefing: "So he was arrested? Ah, fuck! You stupid old idealist, what have you done?",
    objectives: [
        MissingColleaguePartOne_Objective1,
    ],
    vendor: Artisan,
    level: 0,
}