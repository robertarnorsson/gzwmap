import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";
import { Sawmill } from "@/lib/data/locations";

const IWentISawIConqueredPartThree_Objective1: objective = {
    id: "O-YVAVUV",
    name: "Neutralize Hostiles",
    description: "Neutralize 20 hostiles at sawmill",
    position: [10310.322239278214, 17363.442215755753],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.SAWMILL],
    location: Sawmill
}

export const IWentISawIConqueredPartThree: task = {
    id: "T-HQD3S6",
    name: "I went, I saw, I conquered III",
    briefing: "So here's the situation. The sawmill north of Fort Narith is occupied by a yet-unknown enemy force. Normally, I'd send a few more scouts to get a better idea about what exactly they're doing there, but since you found out about the explosives, we don't have the luxury of time. Maybe their target is Fort Narith itself, but maybe they plan to use them against us. We can't take that chance. Your mission is plain and simple; just bust down the gate and start blasting. Get as many of them as you can, and we'll ask questions later, okay? I'm sure you're happy to see some action and not just crawl face-down in the mud, looking at things, right? So put on your war face, and let's deal with this problem!",
    debriefing: "Stone cold killer! Great job as always, my man. Now we can catch our breath and assess the situation properly. I'm sure those assholes will be back, but we have the upper hand for now. Go and get some rest; you've earned it.",
    objectives: [
        IWentISawIConqueredPartThree_Objective1
    ],
    vendor: Handshake,
    level: 0,
}