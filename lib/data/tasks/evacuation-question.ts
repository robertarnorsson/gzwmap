import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Artisan } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";

const EvacuationQuestion_Objective1: objective = {
    id: "O-SOQ63M",
    name: "Orders",
    description: "Retrieve the orders from Fort Narith and report back to Turncoat",
    position: [10751.664258232178, 14918.33433856451],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.FORTNARITH],
    location: FortNarith
}

export const EvacuationQuestion: task = {
    id: "T-7Q7AS3",
    name: "Evacuation Question",
    briefing: `Mercenary, I have another one of your favorite assignments stemming from human misfortune. While most of the people on the island were part of the UNLRA "evacuation," the civilians living around Fort Narith were left behind. Yet, now they are nowhere to be found. I want to know what happened, and you're gonna help me. I want you to investigate Fort Narith and look for any orders related to UNLRA activities in this area. I suggest looking in the barracks, since the involved officers staying there probably each received a copy. The money is prepared. Get moving.`,
    debriefing: "So the army prevented people from evacuating? Fucking monsters! Using civilians as shields. But why? And... where is everybody? I need to think. This doesn't make any fucking sense...",
    objectives: [
      EvacuationQuestion_Objective1
    ],
    vendor: Artisan,
    level: 0,
    note: 'Will cancel "In the Right Hands"'
}