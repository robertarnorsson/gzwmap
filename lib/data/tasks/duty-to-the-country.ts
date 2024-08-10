import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import { YBL1 } from "@/lib/data/locations";

const DutyToTheCountry_Objective1: objective = {
    id: "O-H3ZE1S",
    name: "Long Vong's body",
    description: "Search the bunker and uncover what happened to Long Vong",
    position: [10870.122922001789, 13083.301860321935],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.LABRAT, MarkerType.YBL1],
    location: YBL1
}

export const DutyToTheCountry: task = {
    id: "T-C63HVA",
    name: "Duty to the Country",
    briefing: "Uhm, are you busy? We have another request for a missing person. This time, we are looking for a guardsman named Long Vong. He worked in the Soviet bunker and his family hasn't heard from him since the rebels took over. They fear the worst. Given the savagery of the rebels, I too feel that we will be the bearers of bad news. But even if the hope is practically nil, we should at least bring them the confirmation of his death. It's the least we can do. I'm well aware of the fact that the LAF are considered to be the bad guys, but the family has done nothing wrong. Will you please look for him? It would mean the world to them if he could come back.",
    debriefing: "I was worried that this would be the outcome. From the moment I heard what happened to our colleagues, I didn't have high expectations. Thank you for your help nonetheless, I'll pass on the sorrowful message.",
    objectives: [
        DutyToTheCountry_Objective1
    ],
    vendor: LabRat,
    level: 0,
}