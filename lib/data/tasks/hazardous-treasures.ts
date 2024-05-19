import {ObjectiveType, objective, task} from "@/lib/types";
import {Banshee} from "@/lib/data/vendors";

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
    image: "/objectives/hazardous-treasures-sawmill.webp"
}

const HazardousTreasures_Objective3: objective = {
    name: "Eliminate (Blue Lagoon)",
    description: "Eliminate 10 hostiles at Blue Lagoon",
    position: [0.526306927744574, -0.43116168536865956],
    type: ObjectiveType.ELIMINATION
}

const HazardousTreasures_Objective4: objective = {
    name: "Container (Blue Lagoon)",
    description: "Retrieve the container from Blue Lagoon",
    position: [0.5276032706670536, -0.4289291690255071],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-blue-lagoon.webp"
}

const HazardousTreasures_Objective5: objective = {
    name: "Eliminate (Hunters Paradise)",
    description: "Eliminate 10 hostiles at Hunters Paradise",
    position: [0.526306927744574, -0.43116168536865956],
    type: ObjectiveType.ELIMINATION
}

const HazardousTreasures_Objective6: objective = {
    name: "Container (Hunters Paradise)",
    description: "Retrieve the container from Hunters Paradise",
    position: [0.9543491895615298, -0.7974472149318923],
    type: ObjectiveType.COLLECT,
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
    ],
    vendor: Banshee,
    level: 0,
}