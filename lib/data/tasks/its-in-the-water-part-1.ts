import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {LabRat} from "@/lib/data/vendors";

const ItsInTheWaterPartOne_Objective1: objective = {
    id: "",
    name: "Avian tissue samples",
    description: "Collect avian tissue samples",
    position: [0.6830046850581373, -0.41705131530761724],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.BANPA]
}

const ItsInTheWaterPartOne_Objective2: objective = {
    id: "",
    name: "Well",
    description: "Collect water samples from a well",
    position: [0.6946258637953076, -0.4208707809448243],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.BANPA]
}

const ItsInTheWaterPartOne_Objective3: objective = {
    id: "",
    name: "Ground samples",
    description: "Collect ground samples from a mound of soil",
    position: [0.6947122665033343, -0.4116868972778321],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.BANPA]
}

export const ItsInTheWaterPartOne: task = {
    id: "",
    name: "Its in the water - Part 1",
    briefing: "I have something important to ask of you. That fishing village you’ve been to, even though Handjo- Mr. Pell is laughing about it, from what you’ve described, something sinister really might be going on there, and it could be connected with what happened here in Lamang. We mustn’t rule out the possibility of chemical and biological hazards, so I’ll need you to go to the village and collect drinking water and ground samples. Look for a well and areas with soil disturbances, such as holes or mounds from deeper underground. Also, if a contagion agent is present, we need to know if it can spread through avian carriers. Please obtain tissue samples, ideally blood, for analysis. Oh, and by avian carriers, I mean birds that can fly long distances, not chickens, understood? If you agree, I'll provide you with special kits to take the samples properly. Please be very careful, and once you have the samples, return them to me as quickly as possible. The place might not be haunted, but it can still be dangerous.",
    debriefing: "Thank you so much! I’ll start the analysis right away. If you observe any unusual symptoms, please report them to me immediately. I’m 99% sure that if there’s something there, it isn’t airborne, but you never know…",
    objectives: [
        ItsInTheWaterPartOne_Objective1,
        ItsInTheWaterPartOne_Objective2,
        ItsInTheWaterPartOne_Objective3,
    ],
    vendor: LabRat,
    level: 0,
}
