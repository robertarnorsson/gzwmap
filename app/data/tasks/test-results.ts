import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { LabRat } from "~/data/vendors";
import { TigerBay } from "~/data/locations";

const TestResults_Objective1: objective = {
    id: "O-P5THSU",
    name: "Testing Kit",
    description: "Retrieve the testing kit and report back",
    position: [21717.22223763487, 14502.31419704556],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.TIGERBAY],
    location: TigerBay
}

export const TestResults: task = {
    id: "T-EGW8YU",
    name: "Test Results",
    briefing: "I need your assistance regarding those samples you've managed to collect in the refugee camp. The good news is that I'm fairly certain there is no active contagion or chemical hazard in this area, so that's a relief. The bad news is that I did find traces of “something,” but I can't be sure what it is until I get the proper equipment. And this is where you come in. I need a specific testing kit to confirm my suspicion. A thing like this should be in any well-stocked pharmacy, but those seem to be in short supply on this island. However, I'm pretty confident you will find one in Tiger Bay Central - the huge shopping center in Tiger bay. It was obviously built with tourists in mind, so the quality of supplies should be leagues above what we've seen so far. Please find the testing kit and bring it to me when you can. Good luck!",
    debriefing: "Outstanding! I hope it wasn't much of a hassle. Now we are one step closer to finding out the extent of what actually happened here. This should only take a moment...",
    objectives: [
        TestResults_Objective1
    ],
    vendor: LabRat,
    level: 0,
}