import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";

const UnlraPartThree_Objective1: objective = {
    id: "N/A",
    name: "Intel",
    description: "Retrieve the intel from an UNLRA camp and report back to Handshake",
    position: [22123.451707691387, 15202.320449341649],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay
}

export const UnlraPartThree: task = {
    id: "N/A",
    name: "UNLRA III",
    briefing: "The UNLRA mystery still haunts me, buddy. Keeps me awake. We need to know what they were really doing here. That way we can unravel some of the strange events we have been facing. It seems that all this humanitarian nonsense was just a cover for their true intentions. But what are they? What was so important to investigate that they created a special UN group? Go to Tiger Bay and find me the answers. Try to find something in the UNLRA camp northeast of the mall.",
    debriefing: "I don't know how, but it looks like the UNLRA knew about the Event in advance, and when it happened, they sent a group to GZ. Interesting. So this was their plan all along. This is looking more and more like one big conspiracy, isn't it? I have to say, I am intrigued as fuck!",
    objectives: [
      UnlraPartThree_Objective1
    ],
    vendor: Handshake,
    level: 0,
}