import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Gunny} from "@/lib/data/vendors";
import { FortNarith } from "../locations";

const NeighbourlyHelp_Objective1: objective = {
    id: "O-863PPJ",
    name: "Fuel Gauge 1",
    description: "Check the first fuel gauge",
    position: [11423.056770251693, 14015.867950540009],
    type: ObjectiveType.LOCATE,
    image:"/objectives/neighbourly-help-fuel-gauges.webp",
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.FORTNARITH],
    location: FortNarith
}

const NeighbourlyHelp_Objective2: objective = {
    id: "O-X7LZVD",
    name: "Fuel Gauge 2",
    description: "Check the second fuel gauge",
    position: [11440.056770251693, 14004.367950540009],
    type: ObjectiveType.LOCATE,
    image:"/objectives/neighbourly-help-fuel-gauges.webp",
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.FORTNARITH],
    location: FortNarith
}

export const NeighbourlyHelp: task = {
    id: "T-RYVRQS",
    name: "Neighbourly Help",
    briefing: "Our situation is not getting any better. We are still having problems getting almost everything we need from the mainland. Especially fuel would be super useful right now. Fortunately, the military base seems to be well supplied. We know they've got various vehicles and other machines that eat gas like Kentuckians eat fast food. I need you to go to the military base and see how their fuel supply is doing. Every drop that we can take from them is a big plus for us. We have to scavenge as much as possible. Out here, each day is an uphill struggle. It's like some goddamn post-apocalyptic movie.",
    debriefing: "No fuel at all? So they have all that stuff just sitting around? Damn it. On the one hand it's nice that they can't use the vehicles against us, but on the other hand it means that we have to look for the juice somewhere else. If it wasn't for that cursed blockade...",
    note: "Both fuel gauges are located in the same area.",
    objectives: [
        NeighbourlyHelp_Objective1,
        NeighbourlyHelp_Objective2,
    ],
    vendor: Gunny,
    level: 0,
}