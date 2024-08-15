import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Artisan } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";
import { Difficulty4 } from "@/lib/data/difficulty";

const ArtisansListPartTwo_Objective1: objective = {
    id: "O-T9MR9K",
    name: "Documents",
    description: "Retrieve the documents from the UNLRA camp in Tiger Bay",
    position: [22174.353075717765, 15210.521486392414],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.TIGERBAY, MarkerType.DIFFICULTY_4],
    location: TigerBay,
    difficulty: Difficulty4
}

export const ArtisansListPartTwo: task = {
    id: "T-XNGVB4",
    name: "Artisan's List II",
    briefing: "Mercenary, make yourself useful and help me get to the bottom of this UNLRA mystery. Based on the list you brought me last time, it seems the UN had some instructions not to let certain people out of the country. I want to know who gave those orders. It's disgusting that someone would just decide who has the right to survive and who doesn't. I need proof of their misdeeds. Go to Tiger Bay, search their camp, and bring me anything that can point us in the right direction. These foreign cunts won't get away with this.",
    debriefing: `So it's true. My gut feeling was right. This document clearly states that the ultimate fucking "good guys," the UNLRA were working with the Lamangese government. The UN troops cooperated with the LAF and had a deal that ensured there would be no conflict if the UN guaranteed that certain individuals would not leave the country. Fuck foreign intervention and fuck this corrupt state.`,
    objectives: [
      ArtisansListPartTwo_Objective1
    ],
    vendor: Artisan,
    level: 0,
    difficulty: Difficulty4
}