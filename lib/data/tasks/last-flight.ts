import {ObjectiveType, objective, task} from "@/lib/types";
import {Artisan} from "@/lib/data/vendors";

const LastFlight_Objective1: objective = {
    name: "Last Flight - Downed Plane/Liko Savang",
    description: "Search the airfield and uncover what happened to Liko Savang.",
    position: [0.8478899729655405, -0.5872263135531665],
    type: ObjectiveType.LOCATE,
}

export const LastFlight: task = {
    name: "Last Flight",
    description: "That fucking idiot... I kept telling him he'd wind up dead, one way or another. He probably packed up shop at the first sign of trouble, filled the plane to the brim with stolen drugs, and tried to run away. That's all he ever did his whole miserable life. Maybe if I were a better cousin to him, none of this would have happened... You're still here? You did your job, so get lost.",
    objectives: [
        LastFlight_Objective1,
    ],
    vendor: Artisan,
    level: 0,
}
