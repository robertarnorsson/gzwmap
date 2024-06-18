import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Banshee } from "@/lib/data/vendors";
import { YBL1 } from "../locations";

const DeepDepravity_Objective1: objective = {
    id: "N/A",
    name: "Intel Folder",
    description: "Bring the intel of atrocities to the Banshee",
    position: [11003.53902408218, 13040.448916078934],
    type: ObjectiveType.COLLECT,
    image: "/objectives/deep-depravity.webp",
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.YBL1],
    location: YBL1
}

export const DeepDepravity: task = {
    id: "N/A",
    name: "Deep Depravity",
    briefing: `Got a sec? I heard some really nasty rumors about the Soviet bunker the locals call "The Hole". According to the intel I got, it was used for torture long before the LLA took over. We know the Lamang government treated its own people like dirt, but we need more evidence to hold them accountable. That's why I need you to go there and find me some documents that prove the state-organized atrocities. I know it sounds horrible in this context, but the more the merrier. Find me anything I can use against these oppressors.`,
    debriefing: "This is precisely what we needed. The disk contains definite evidence that we can use in our case against the Democratic Republic of Lamang. People who criticized the government, be it opposition or dissent, or just someone who wasn't needed anymore, they all disappeared into The Hole. Thank you for your cooperation; your help is very much appreciated.",
    objectives: [
      DeepDepravity_Objective1
    ],
    vendor: Banshee,
    level: 0,
}