import {ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";

const WingClipping_Objective1: objective = {
    name: "Wing Clipping",
    description: "Neutralize 20 hostiles at the airfield",
    position: [0.8693285941867842, -0.6031751632690431],
    type: ObjectiveType.DISCOVER,
}


export const WingClipping: task = {
    name: "Wing Clipping",
    briefing: "Now that we know what those assholes are doing here, it’s time to clip their wings so they don’t get too cocky. The last thing we need is for them to endanger our future ops in the Midnight Sapphire, so why don’t you show them who’s the boss around here? Maybe if you cause enough mayhem, they’ll leave us alone for good, but I wouldn’t count on it.",
    debriefing: "Fantastic work, champ! Their situation suddenly got way worse, and it’s all thanks to you. Hopefully, they’ll think twice before crossing our path in the future.",
    objectives: [
        WingClipping_Objective1,
    ],
    vendor: Handshake,
    level: 0,
}