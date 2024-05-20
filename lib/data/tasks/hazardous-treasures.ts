import {ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";

const HazardousTreasures_Objective1: objective = {
    name: "Eliminate (Sawmill)",
    description: "Eliminate 10 hostiles at Sawmill",
    position: [0.7525546864768021, -0.9618089454451508],
    type: ObjectiveType.ELIMINATION
}

const HazardousTreasures_Objective2: objective = {
    name: "Container (Sawmill)",
    description: "Retrieve the container from Sawmill",
    position: [0.7501356154582371, -0.9634404703453714],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-sawmill.webp",
    note: "You will need SM Office Storage key."
}

const HazardousTreasures_Objective3: objective = {
    name: "Eliminate (Blue Lagoon)",
    description: "Eliminate 10 hostiles at Blue Lagoon",
    position: [0.526306927744574, -0.43116168536865956],
    type: ObjectiveType.ELIMINATION,
}

const HazardousTreasures_Objective4: objective = {
    name: "Container (Blue Lagoon)",
    description: "Retrieve the container from Blue Lagoon",
    position: [0.5276032706670536, -0.4289291690255071],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-blue-lagoon.webp",
}

const HazardousTreasures_Objective5: objective = {
    name: "Eliminate (Hunters Paradise)",
    description: "Eliminate 10 hostiles at Hunters Paradise",
    position: [0.9529145063347765, -0.7940944024978048],
    type: ObjectiveType.ELIMINATION
}

const HazardousTreasures_Objective6: objective = {
    name: "Container (Hunters Paradise)",
    description: "Retrieve the container from Hunters Paradise",
    position: [0.9543491895615298, -0.7974472149318923],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-hunters-paradise.webp",
    note: "You will need a HP Wep key."
}

const HazardousTreasures_Objective7: objective = {
    name: "Eliminate (Ban Pa)",
    description: "Eliminate 10 hostiles at Ban Pa",
    position: [0.6951812100138812, -0.416576396872439],
    type: ObjectiveType.ELIMINATION
}

const HazardousTreasures_Objective8: objective = {
    name: "Container (Ban Pa)",
    description: "Retrieve the container from Ban Pa",
    position: [0.6921108241571373, -0.4174291093705907],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-ban-pa.webp",
    note: "You can find the container in the Elder's House upstairs under a pink table."
}

const HazardousTreasures_Objective9: objective = {
    name: "Eliminate (Pha Lang Airfield)",
    description: "Eliminate 10 hostiles at Pha Lang Airfield",
    position: [0.8668607328155087, -0.6058182169262194],
    type: ObjectiveType.ELIMINATION
}

const HazardousTreasures_Objective10: objective = {
    name: "Container (Pha Lang Airfield)",
    description: "Retrieve the container from Pha Lang Airfield",
    position: [0.8519970582394867, -0.6104979146455337],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-airfield.webp",
    note: "You will need a PLA STRG key."
}

const HazardousTreasures_Objective11: objective = {
    name: "Eliminate (YBL-1)",
    description: "Eliminate 10 hostiles at YBL-1",
    position: [0.567005873136639, -0.9307348273810013],
    type: ObjectiveType.ELIMINATION
}

const HazardousTreasures_Objective12: objective = {
    name: "Container (YBL-1)",
    description: "Retrieve the container from YBL-1",
    position: [0.5616476894552394, -0.9345987979749283],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-ybl-1.webp",
    note: "Back room in the office with wooden wall panels next to the communications room."
}

export const HazardousTreasures: task = {
    name: "Hazardous Treasures",
    briefing: "Listen up! I've got an important task for you, and I need your full commitment, okay? We got reports of materials being transported from Ground Zero, and they are popping all over the place. It is of utmost importance that we secure them all. The boss was very clear about that, so I suggest you stop whatever you're doing and focus strictly on this. The reports are still coming in, and I'm gonna keep updating you as you progress. What we know now is that those paramilitaries at the Sawmill got a hold of one of the containers used to transport whatever is in there, so pack your gear, head out there, neutralize any threats, and secure the cargo. By the time you're done, we'll hopefully have more info about other possible points of interest. Understood? Good. Don't waste any time, and get to it!",
    debriefing: "Fantastic! I know this shit wasn't easy, but you've exceeded all expectations. The boss is gonna be fucking ecstatic! I think you're starting to figure out that whatever is in these is very important to him and absolutely crucial for our mission here. I'd tell you more, but I'm afraid I know as much as you. But hey, why ask questions when the pay is so good, right?",
    objectives: [
        HazardousTreasures_Objective1,
        HazardousTreasures_Objective2,
        HazardousTreasures_Objective3,
        HazardousTreasures_Objective4,
        HazardousTreasures_Objective5,
        HazardousTreasures_Objective6,
        HazardousTreasures_Objective7,
        HazardousTreasures_Objective8,
        HazardousTreasures_Objective9,
        HazardousTreasures_Objective10,
        HazardousTreasures_Objective11,
        HazardousTreasures_Objective12,
    ],
    vendor: Handshake,
    level: 0,
}