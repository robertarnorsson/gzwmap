import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Artisan} from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";

const MissingColleaguePartTwo_Objective1: objective = {
    id: "O-18ELUI",
    name: "Transcript",
    description: "Find the interrogation transcript",
    position: [11007.80893368746, 14507.750694659095],
    type: ObjectiveType.COLLECT,
    image: "/objectives/missing-colleague-part-2-transcript.webp",
    note: "You can find the transcript on the third floor in the northern office on the desk",
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.FORTNARITH],
    location: FortNarith
}

export const MissingColleaguePartTwo: task = {
    id: "T-UT81V3",
    name: "Missing Colleague II",
    briefing: "Merc, I want you to go back to Fort Narith and get me information on the arrested mechanic. I don't know what happened that led to his imprisonment, but I need to know as much as possible. Look for an interrogation document or similar file that will shed light on why he was taken into custody. The reward is in place, don't worry. You don't have to remind me that you only work for the right price, mercenary. I know our relationship. Now, don't waste any more time and go.",
    debriefing: "So he sabotaged the vehicles at Fort Narith? God,   you old fool! He was always opposing the government, but to be so reckless... it's not like him at all. I must make some calls and find him quickly.",
    objectives: [
        MissingColleaguePartTwo_Objective1,
    ],
    vendor: Artisan,
    level: 0,
}