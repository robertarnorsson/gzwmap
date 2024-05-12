import {ObjectiveType, objective, task} from "@/lib/types";
import {Gunny} from "@/lib/data/vendors";

const ASingleDrop_Objective1: objective = {
    name: "A Single Drop - First Tanker Truck",
    description: "White truck with gas tank trailer. Interact with the panel that's open on the side of the tank.",
    position: [0.8560596795971459, -0.6101538486616099],
    type: ObjectiveType.MARK,
}

const ASingleDrop_Objective2: objective = {
    name: "A Single Drop - Second Tanker Truck",
    description: "White truck with gas tank trailer. Interact with the panel that's open on the side of the tank.",
    position: [0.8665863792221234, -0.6037748179723758],
    type: ObjectiveType.MARK,
}

const ASingleDrop_Objective3: objective = {
    name: "A Single Drop - Third Tanker Truck",
    description: "White truck with gas tank trailer. Interact with the panel that's open on the side of the tank.",
    position: [0.8705514284140237, -0.60143932586211],
    type: ObjectiveType.MARK,
}

export const ASingleDrop: task = {
    name: "A Single Drop",
    briefing: "",
    debriefing: "You gotta be shitting me! So you're telling me that they were all empty? On a ‘goddamn afield? That does it! Somebody's fucking with us, there’s no other way. Either they were quicker and" +
        " stockpiled all the fuel before we had our chance, or it has to do something with whatever happened over here. I have to say, I'm not too happy about either of those options. Looks like welll have to make do.",
    objectives: [
        ASingleDrop_Objective1,
        ASingleDrop_Objective2,
        ASingleDrop_Objective3
    ],
    vendor: Gunny,
    level: 0,
}