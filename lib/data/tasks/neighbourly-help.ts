import {ObjectiveType, objective, task} from "@/lib/types";
import {Gunny} from "@/lib/data/vendors";

const NeighbourlyHelp_Objective1: objective = {
    name: "Fuel Gauge",
    description: "Check the first fuel gauge",
    position: [0.6061458180044782, -0.9156317437382812],
    type: ObjectiveType.LOCATE,
    image:"/objectives/neighbourly-help-fuel-gauges.webp"
}

const NeighbourlyHelp_Objective2: objective = {
    name: "Fuel Gauge",
    description: "Check the second fuel gauge",
    position: [0.6057117175351846, -0.9149393313471779],
    type: ObjectiveType.LOCATE,
    image:"/objectives/neighbourly-help-fuel-gauges.webp"
}

export const NeighbourlyHelp: task = {
    name: "Neighbourly Help",
    briefing: "Hey there, buddy. I've got a special task for you. You're gonna be a cameraman of sorts. I need you to infiltrate the military base and hack into their cameras. We need as much information on them as possible. I don't want to go a minute without being alerted when soldiers go to the HQ or leave the base. I want them on my screen 24-7. Like some Big Brother bullshit. Take these gadgets and place them in the cameras on the base. Soon, we'll know more about them than their mothers.",
    debriefing: "Wonderful! With these taped cameras, we now have the upper hand in monitoring the military base. I feel like I'm in a spy movie or something. No one will pick their nose without our knowledge. You did well, champ.",
    note: "Both fuel gauges are located in the same area.",
    objectives: [
        NeighbourlyHelp_Objective1,
        NeighbourlyHelp_Objective2,
    ],
    vendor: Gunny,
    level: 0,
}