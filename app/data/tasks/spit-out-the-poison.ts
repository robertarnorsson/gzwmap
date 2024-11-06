import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { LabRat } from "~/data/vendors";
import { FortNarith } from "~/data/locations";
import { PoisonVial } from "~/data/items/tools";

const SpitOutThePoison_Objective1: objective = {
    id: "O-5YT5MG",
    name: "Water Cistern",
    description: "Dump the poison under the cistern's faucet",
    position: [10664.669468184748, 15026.953492291681],
    type: ObjectiveType.STASH,
    types: [MarkerType.TASK, MarkerType.STASH, MarkerType.LABRAT, MarkerType.FORTNARITH],
    location: FortNarith,
    items: [ PoisonVial ]
}

export const SpitOutThePoison: task = {
    id: "T-B758JQ",
    name: "Spit Out The Poison",
    briefing: "It has come to my attention that you have recently been tasked with poisoning the water supply at Fort Narith. I implore you not to proceed with it. Such an action is not only extremely dangerous but also horribly inhumane. You must consider all possible consequences. While the primary targets may be enemy soldiers, the effects of the substance provided to you, whether short or long-lasting, remain unknown. I understand that I may not have much to offer to change your mind, but I urge you to reconsider.",
    debriefing: "Thank you. I am truly grateful for your decision. You have made it clear that mammon does not blind your humanity, and I won't forget that.",
    objectives: [
        SpitOutThePoison_Objective1
    ],
    vendor: LabRat,
    level: 0,
    items: [ PoisonVial ],
    cancelTaskId: "T-BTHUGK"
}