import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";
import { PhaLangAirfield } from "@/lib/data/locations";

const WingClipping_Objective1: objective = {
    id: "O-V9CQ86",
    name: "Hostiles",
    description: "Neutralize 20 hostiles at the Pha Lang Airfield",
    position: [18644.48716626207, 19970.125378423963],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield
}


export const WingClipping: task = {
    id: "T-1F1A6T",
    name: "Wing Clipping",
    briefing: "Now that we know what those assholes are doing here, it's time to clip their wings so they don't get too cocky. The last thing we need is for them to endanger our future ops in the Midnight Sapphire, so why don't you show them who's the boss around here? Maybe if you cause enough mayhem, they'll leave us alone for good, but I wouldn't count on it.",
    debriefing: "Fantastic work, champ! Their situation suddenly got way worse, and it's all thanks to you. Hopefully, they'll think twice before crossing our path in the future.",
    objectives: [
        WingClipping_Objective1,
    ],
    vendor: Handshake,
    level: 0,
}