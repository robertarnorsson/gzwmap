import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";

const OneShotOneKill_Objective1: objective = {
    name: "Hostile Commander",
    description: "Eliminate the hostile commander at Hunter's Paradise",
    position: [0.9541714785570418, -0.7945346832275392],
    type: ObjectiveType.ELIMINATION,
}

export const OneShotOneKill: task = {
    name: "One Shot, One Kill",
    briefing: "Okay, it’s time to end this. The hostiles at Hunter’s Paradise are still at it and keep causing us trouble. We need to eliminate the head of their little operation, and hopefully, the rest will follow soon. If I were you, I’d look for any commander-type dude, and shoot him promptly in the face. Anybody with better gear would be a hot target, so observe them carefully and take the shot. I know you got this.",
    debriefing: "Nicely done. Now let’s hope this will show the rest of those asshole not to play with us anymore. I’d say we’re done here, good job.",
    objectives: [
        OneShotOneKill_Objective1,
    ],
    vendor: Handshake,
    level: 0,
}
