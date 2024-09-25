import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Turncoat } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";
import { Difficulty4 } from "@/lib/data/difficulty";

const ASmallFavor_Objective1: objective = {
    id: "O-IO10TB",
    name: "Folder",
    description: "Retrieve the Folder from Fort Narith and report back to Turncoat",
    position: [11092.0695765838, 14481.788009202894],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.FORTNARITH, MarkerType.DIFFICULTY_4],
    location: FortNarith,
    difficulty: Difficulty4
}

export const ASmallFavor: task = {
    id: "T-AEKSXE",
    name: "A Small Favor",
    briefing: "Friend, I need you to do a favor for me, or to be more precise, for a friend of mine who needs to disappear from official records. At Fort Narith headquarters, there are folders of all the soldiers who have served or are still serving at the base. I need you to bring one of them back to me. I understand that it is not easy to infiltrate such a large military compound, but I think highly of your abilities. You have shown that you are not afraid of hardship, so I have prepared a reward that will surely satisfy you. Find the archive containing the documents and bring me folder number 00616.",
    debriefing: "Friend, you have done a great deed. By destroying this evidence, my friend can live more freely. You have my thanks.",
    objectives: [
      ASmallFavor_Objective1
    ],
    vendor: Turncoat,
    level: 0,
    difficulty: Difficulty4,
    cancelTask: () => require('./no-escape').NoEscape
}