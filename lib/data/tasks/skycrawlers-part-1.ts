import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Banshee} from "@/lib/data/vendors";
import { PhaLangAirfield } from "@/lib/data/locations";

const SkycrawlersPartOne_Objective1: objective = {
    id: "O-198X7R",
    name: "Proof",
    description: "Investigate Pha Lang Airfield and find a proof of drug trade",
    position: [18557.853276242517, 19674.681709333672],
    type: ObjectiveType.COLLECT,
    image: "/objectives/skycrawlers-part-1.webp",
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield
}


export const SkycrawlersPartOne: task = {
    id: "T-XYEU7Y",
    name: "Skycrawlers",
    briefing: "I see you have already visited the country's central tourist transport hub, the Pha Lang Airfield. That place interests me quite a lot, and I'd like you to assist me in finding out some more information about the kinds of cargo they were transporting off the island. Everything points to the biggest export of this island being illegal narcotics, the kind that kills you after you accidentally take a milligram too much, to be more specific. I have strong reason to believe that this entire operation was government-sanctioned and that they used civilian planes to get the drugs to nearby countries. Could you investigate the airfield and find anything that would corroborate this? Your help would be very much appreciated. Report back to me once you find something.",
    debriefing: "Well done, now there is no question about it. With your help, I can finally start connecting all the dots. I'm sure there's much more to uncover, so I would appreciate your ongoing assistance.",
    objectives: [
        SkycrawlersPartOne_Objective1,
    ],
    vendor: Banshee,
    level: 0,
}