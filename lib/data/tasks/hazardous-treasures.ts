import {ObjectiveType, objective, task} from "@/lib/types";
import {Banshee} from "@/lib/data/vendors";

const HazardousTreasures_Objective1: objective = {
    name: "Container",
    description: "Retrieve the container from Sawmill",
    position: [0.7493571905947328, -0.9637498843600013],
    type: ObjectiveType.COLLECT
}

export const HazardousTreasures: task = {
    name: "Hazardous Treasures",
    briefing: "Listen up! I've got an important task for you, and I need your full commitment, okay? We got reports of materials being transported from Ground Zero, and they are popping all over the place. It is of utmost importance that we secure them all. The boss was very clear about that, so I suggest you stop whatever you're doing and focus strictly on this. The reports are still coming in, and I'm gonna keep updating you as you progress. What we know now is that those paramilitaries at the Sawmill got a hold of one of the containers used to transport whatever is in there, so pack your gear, head out there, neutralize any threats, and secure the cargo. By the time you're done, we'll hopefully have more info about other possible points of interest. Understood? Good. Don't waste any time, and get to it!",
    debriefing: "Fantastic! I know this shit wasn't easy, but you've exceeded all expectations. The boss is gonna be fucking ecstatic! I think you're starting to figure out that whatever is in these is very important to him and absolutely crucial for our mission here. I'd tell you more, but I'm afraid I know as much as you. But hey, why ask questions when the pay is so good, right?",
    objectives: [
        HazardousTreasures_Objective1
    ],
    vendor: Banshee,
    level: 0,
}