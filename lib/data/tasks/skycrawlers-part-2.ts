import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Banshee} from "@/lib/data/vendors";
import { PhaLangAirfield } from "../locations";

const SkycrawlersPartTwo_Objective1: objective = {
    id: "",
    name: "Logbook",
    description: "Retrieve and locate the logbook and report back",
    position: [18666.839793599123, 20081.996386885352],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield
}


export const SkycrawlersPartTwo: task = {
    id: "",
    name: "Skycrawlers - Part 2",
    briefing: "Hey, interested in digging a little bit deeper? Now that we know that the airfield was used for drug trafficking, I need to find out how exactly they did it and where the planes were going. I’m certain there has to be a logbook somewhere in that place that could uncover more info. With an op of that size, they probably weren’t keeping it all just in their heads. Once you have the opportunity, return to Pha Lang Airfield and try to find that logbook. I know this all may seem quite minuscule in the grand scheme of things, especially considering what’s happening here right now, but this doesn’t end here. Thanks to your work here, we may be able to track other leads and save countless lives. Sounds good?",
    debriefing: "Okay, judging by this logbook, the narcotics were transported here from a yet unknown location, probably the production plant, and then processed, packed, and shipped off by planes with oblivious tourists inside. Laos, Cambodia, Vietnam, Thailand… they were quite busy, I see. With tourists on board the planes, the volume of the shipments wasn’t great, but they made for it with the frequency of flights. Also, it only takes a small fraction of this stuff to make some serious money, compared to heroin or cocaine. You did well. Now we need to find the source.",
    objectives: [
        SkycrawlersPartTwo_Objective1,
    ],
    vendor: Banshee,
    level: 0,
}