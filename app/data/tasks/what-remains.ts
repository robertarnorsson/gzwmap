import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { LabRat } from "~/data/vendors";
import { TigerBay } from "~/data/locations";
import { TBUNLab } from "~/data/keys/tiger-bay";

const WhatRemains_Objective1: objective = {
    id: "O-BPND9U",
    name: "Samples",
    description: "Retrieve samples from the UNLRA camp and report back to Lab Rat",
    position: [22202.702495724425, 15062.092143997586],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.TIGERBAY],
    location: TigerBay,
    key: TBUNLab
}

export const WhatRemains: task = {
    id: "T-A64NB0",
    name: "What Remains",
    briefing: "The UNLRA operating in Tiger Bay left behind some of their lab equipment. It is highly likely that they were conducting some sort of research on the refugees. I would like you to go to the camp and find any samples left behind if there are any. What is happening on this island is truly fascinating... I mean, terrifying, but fascinating. The UNLRA had some top-notch scientists, so they must have made some interesting discoveries. And if they left them behind? Gosh! It could answer some of our most important questions about the Event. Please look around the UNLRA camp for some left-behind samples. They would most likely be stored somewhere safe, out of reach of unauthorized people, so I'd look for a place like that.",
    debriefing: "The samples you brought. They are truly engrossing... and quite bizzare. Unfortunately, I feel they have only deepened our ignorance. Nevertheless, you have my thanks. I will work tirelessly to find out what has been occurring here.",
    objectives: [
        WhatRemains_Objective1
    ],
    vendor: LabRat,
    level: 0,
    key: [
        TBUNLab
    ]
}