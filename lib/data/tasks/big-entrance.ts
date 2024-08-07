import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";

const BigEntrance_Objective1: objective = {
    id: "N/A",
    name: "First Cache",
    description: "Find the LAF weapon cache in the south part of Tiger Bay Central",
    position: [21754.998927401128, 14358.171063071788],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.TIGERBAY],
    location: TigerBay
}

const BigEntrance_Objective2: objective = {
    id: "N/A",
    name: "Second Cache",
    description: "Find the LAF weapon caches in the north part of Tiger Bay Central",
    position: [21476.906023491963, 14637.54211503504],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.TIGERBAY],
    location: TigerBay
}

export const BigEntrance: task = {
    id: "N/A",
    name: "Big Entrance",
    briefing: "I won't waste any time and get right to the point. We need more information about the shopping center that the LAF is haunting. They have turned it into their base and it would be really advantageous to know the state of all their hardware. Check out the main two entrances to Tiger Bay Central and asess the situation there. We are going to smoke them out soon, so we need this info ASAP, understand? Once we know what they have, we can plan accordingly.",
    debriefing: "You did well. These exact locations of their weapon caches will be golden when we start our strike against them. Also, knowing they don't have as much as we expected is a nice bonus.",
    objectives: [
      BigEntrance_Objective1,
      BigEntrance_Objective2
    ],
    vendor: Gunny,
    level: 0,
}