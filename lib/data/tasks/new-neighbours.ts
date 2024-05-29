import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { YBL1 } from "../locations";

const NewNeighbours_Objective1: objective = {
    id: "",
    name: "Intel",
    description: "Find the intel about the inhabitants in the military complex south of Fort Narith",
    position: [11024.75976126235, 12985.646964991078],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.YBL1],
    location: YBL1
}

export const NewNeighbours: task = {
    id: "",
    name: "New Neighbours",
    briefing: "So here's the deal. There's a military complex south of Fort Narith that seems to have been taken over by some squatters. They swarmed the place like locusts and drove the LAF out. We don't know anything about them right now, except that they're not fucking around. Thus, it would be really beneficial if you could go there, look around, and find out who these assholes are. It seems that the natives are wary of this location and affectionately call it The Hole. They avoid it like the plague. But we have to do the exact opposite! It's a perfect stepping stone for our operations around the military base. To ignore a strategic point like this would be highly irresponsible on our part. Go over there and look for some clues, and try not to make too much of a mess. We need to find out first who's meddling with our plans.",
    debriefing: "An old Soviet bunker? Well, look at that, those commies really were everywhere. And it seems the rebellious natives aren't so afraid of The Hole after all. Just our luck. Lamang Liberation Army. Some fucking freedom fighters starting a new revolution. Shit! I'm beginning to think this island is some kind of party where everyone's invited. We really don't have time for this crap. Hmm, but now that I think about it, there might be a way to negotiate some kind of alliance with them, or at least a non-aggression treaty. I'll think of something. In the meantime, get some rest, you did well.",
    objectives: [
        NewNeighbours_Objective1
    ],
    vendor: Handshake,
    level: 0,
}