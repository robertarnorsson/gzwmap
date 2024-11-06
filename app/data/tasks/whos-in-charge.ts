import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Turncoat } from "~/data/vendors";
import { FortNarith } from "~/data/locations";

const WhosInCharge_Objective1: objective = {
    id: "O-LYTAD8",
    name: "Transcript",
    description: "Retrieve the interrogation transcript and report back to Gunny",
    position: [11065.777832697877, 14482.22981800959],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.FORTNARITH],
    location: FortNarith
}

export const WhosInCharge: task = {
    id: "T-3BHNFP",
    name: "Who's In Charge",
    briefing: "Friend, your work ethic is admirable, which is why I'd like to ask you a favor. Fort Narith has a new commander, and I don't know who that man is. That's unacceptable. As an information trader, I have a reputation to uphold, and not knowing who the new base commander is is inconvenient. How would I look without knowing such information? Like a baboon, friend. Like a baboon. Look for details about the new commander at headquarters, and rest assured that I will reward you handsomely.",
    debriefing: "Ha! So Narith Sayavong himself appointed a stinking foreigner as base commander? My apologies; I wasn't trying to offend you, but it just feels funny that one of the most important positions in Lamang is held by someone who has no connection to this country. You have my gratitude, friend. I look forward to our next meeting.",
    objectives: [
        WhosInCharge_Objective1
    ],
    vendor: Turncoat,
    level: 0,
}