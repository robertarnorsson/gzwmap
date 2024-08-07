import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny} from "@/lib/data/vendors";
import { Sawmill } from "../locations";

const FuelShortage_Objective1: objective = {
    id: "N/A",
    name: "Fuel Truck",
    description: "Check the fuel truck",
    position: [10350.106155246936, 17334.2028172309],
    type: ObjectiveType.LOCATE,
    image: "/objectives/fuel-truck-sawmill.webp",
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.SAWMILL],
    location: Sawmill
}

export const FuelShortage: task = {
    id: "N/A",
    name: "Fuel Shortage",
    briefing: "Hey, I got some bad news. Thanks to that damn quarantine, we are slowly running out of fuel, and incoming shipments are getting more sparse every day we stay in this shithole. We need to look for alternatives, and one might just be standing in that sawmill you've been to a couple of times already. Apparently, there should be a tanker truck parked pretty much smack dab in the middle of it. I need you to check it out. If there is any fuel left, it could drastically improve our chances here. Report back to me once you find anything out, okay?",
    debriefing: "Shit, empty, eh? We've been getting similar reports all over the place. It seems like there's not a single drop of fuel left on this entire godforsaken island. Just what the hell happened to all of it? Maybe that girl should look into this…",
    objectives: [
        FuelShortage_Objective1
    ],
    vendor: Gunny,
    level: 0,
}