import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { LabRat } from "~/data/vendors";
import { FortNarith } from "~/data/locations";

const UncannyFiles_Objective1: objective = {
    id: "O-J3TBOI",
    name: "Medical Records",
    description: "Retrieve the medical records and report back to Lab Rat",
    position: [10791.932986486094, 14830.646003709397],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.FORTNARITH],
    location: FortNarith
}

export const UncannyFiles: task = {
    id: "T-EKTK9Q",
    name: "Uncanny Files",
    briefing: "The results of the blood sample you brought were really unusual. I've never seen anything similar before. Ever. It was really exciting... Oh, I mean... I mean, if you don't take into account the potentially horrible effects on the exposed human body... Ahem, anyway, because of the results, I need more data. Considering the circumstances, the army did a pretty good job concealing the soldiers involved. But maybe there would be more information about the civilians. They were kept separate from the military personnel, but it's possible that they were also affected, for example through indirect contact with their friends and family working in the LAF. Go to Fort Narith and bring me records from the medical tent where the civilians were examined. I have a hunch we might find something interesting there.",
    debriefing: "Yes! I knew it! According to these documents, the civilians living around the base were also exposed. Not as much, but the results still show strange values. Thank you for your help. I'm so excited that we found something significant. I hope we get more data soon.",
    objectives: [
        UncannyFiles_Objective1
    ],
    vendor: LabRat,
    level: 0,
}