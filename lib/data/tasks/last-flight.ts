import {ObjectiveType, objective, task} from "@/lib/types";
import {Artisan} from "@/lib/data/vendors";

const LastFlight_Objective1: objective = {
    name: "Last Flight",
    description: "Search the airfield and uncover what happened to Liko Savang",
    position: [0.8478899729655405, -0.5872263135531665],
    type: ObjectiveType.DISCOVER,
}

export const LastFlight: task = {
    name: "Last Flight",
    description: "",
    objectives: [
        LastFlight_Objective1,
    ],
    vendor: Artisan,
    level: 0,
}