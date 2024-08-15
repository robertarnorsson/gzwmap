import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";

const TheMoreTheMerrier_Objective1: objective = {
    id: "O-K6JIKL",
    name: "Intel",
    description: "Retrieve intel from the barracks and report back to Handshake",
    position: [10729.475745700594, 14945.575095047654],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

export const TheMoreTheMerrier: task = {
    id: "T-7SJ0O9",
    name: "The More The Merrier",
    briefing: "Hey, champ, how are you adjusting to being a spy? I hope you got accustomed to it, because I have another one of these missions for you. Although the hacked cameras are a great help, we still have some blind spots that need to be filled. That's why I want you to infiltrate the base again and get me some secret intel. Now I'm sure it's not lying around every corner, so you're going to have to hunt for it. Search their buildings and look for something that could help us defeat these Lamangese amateurs.",
    debriefing: "You brought me a patrol document? Well, that's wonderful. With information like this, we are a giant step closer to seizing Fort Narith. And not only that, thanks to this document, we found out why the Lamang army is still operating here. They were ordered by el presidente to protect high-value targets. It's not just Fort Narith, but Midnight Sapphire and Tiger Bay as well. I like this intel. Way to go, champ.",
    objectives: [
        TheMoreTheMerrier_Objective1
    ],
    vendor: Handshake,
    level: 0
}