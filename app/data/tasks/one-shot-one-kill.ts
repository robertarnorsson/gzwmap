import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import { HuntersParadise } from "~/data/locations";

const OneShotOneKill_Objective1: objective = {
    id: "O-3B55UR",
    name: "Hostile Commander",
    description: "Eliminate the hostile commander at Hunter's Paradise",
    position: [14240.92676770643, 22012.212590073224],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.ELIMINATION, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise
}

export const OneShotOneKill: task = {
    id: "T-F21JQ3",
    name: "One Shot, One Kill",
    briefing: "Okay, it's time to end this. The hostiles at Hunter's Paradise are still at it and keep causing us trouble. We need to eliminate the head of their little operation, and hopefully, the rest will follow soon. If I were you, I'd look for any commander-type dude, and shoot him promptly in the face. Anybody with better gear would be a hot target, so observe them carefully and take the shot. I know you got this.",
    debriefing: "Nicely done. Now let's hope this will show the rest of those asshole not to play with us anymore. I'd say we're done here, good job.",
    objectives: [
        OneShotOneKill_Objective1,
    ],
    vendor: Handshake,
    level: 0,
}
