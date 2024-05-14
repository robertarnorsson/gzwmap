import {ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";

const IWentISawIConqueredPartThree_Objective1: objective = {
    name: "Hostiles",
    description: "Neutralize 20 hostiles at sawmill",
    position: [0.752774871297847, -0.9632348755448474],
    type: ObjectiveType.ELIMINATION,
}

export const IWentISawIConqueredPartThree: task = {
    name: "I went, I saw, I conquered - Part 3",
    briefing: "So here’s the situation. The sawmill north of Fort Narith is occupied by a yet-unknown enemy force. Normally, I’d send a few more scouts to get a better idea about what exactly they’re doing there, but since you found out about the explosives, we don’t have the luxury of time. Maybe their target is Fort Narith itself, but maybe they plan to use them against us. We can’t take that chance. Your mission is plain and simple; just bust down the gate and start blasting. Get as many of them as you can, and we’ll ask questions later, okay? I’m sure you’re happy to see some action and not just crawl face-down in the mud, looking at things, right? So put on your war face, and let’s deal with this problem!",
    debriefing: "Stone cold killer! Great job as always, my man. Now we can catch our breath and assess the situation properly. I’m sure those assholes will be back, but we have the upper hand for now. Go and get some rest; you’ve earned it.",
    objectives: [
        IWentISawIConqueredPartThree_Objective1
    ],
    vendor: Handshake,
    level: 0,
}