import {ObjectiveType, objective, task} from "@/lib/types";
import {Banshee} from "@/lib/data/vendors";

const SkycrawlersPartOne_Objective1: objective = {
    name: "Proof",
    description: "Investigate Pha Lang Airfield and find a proof of drug trade",
    position: [0.852739937032516, -0.6099128723144532],
    type: ObjectiveType.DISCOVER,
}


export const SkycrawlersPartOne: task = {
    name: "Skycrawlers - Part 1",
    briefing: "I see you have already visited the country’s central tourist transport hub, the Pha Lang Airfield. That place interests me quite a lot, and I’d like you to assist me in finding out some more information about the kinds of cargo they were transporting off the island. Everything points to the biggest export of this island being illegal narcotics, the kind that kills you after you accidentally take a milligram too much, to be more specific. I have strong reason to believe that this entire operation was government-sanctioned and that they used civilian planes to get the drugs to nearby countries. Could you investigate the airfield and find anything that would corroborate this? Your help would be very much appreciated. Report back to me once you find something.",
    debriefing: "Well done, now there is no question about it. With your help, I can finally start connecting all the dots. I’m sure there’s much more to uncover, so I would appreciate your ongoing assistance.",
    objectives: [
        SkycrawlersPartOne_Objective1,
    ],
    vendor: Banshee,
    level: 0,
}