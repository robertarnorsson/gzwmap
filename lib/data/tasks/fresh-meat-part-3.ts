import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Banshee } from "@/lib/data/vendors";
import { BlueLagoon } from "../locations";

const FreshMeatPartThree_Objective1_LRI: objective = {
  id: "N/A",
  name: "Intel",
  description: "Explore the roads leading from the Blue Lagoon and try to retrieve any pertinent intel and hand it over to Banshee",
  position: [22808.028211309447, 12792.557048747458],
  type: ObjectiveType.COLLECT,
  image: "/objectives/fresh-meat-part-3.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.BLUELAGOON],
  location: BlueLagoon
}


export const FreshMeatPartThree: task = {
  id: "N/A",
  name: "Fresh Meat III",
  briefing: "Okay, one last piece of the puzzle. We know what was happening in the Lagoon, but we can't be sure yet where the tourists were transported. We need to investigate any roads leading from the Blue Lagoon to see if we can't find anything that might lead us further. I'd mainly focus on roads connecting the Blue Lagoon to any major tourist hubs. Keep your eyes peeled, and try to bring back any intel that could give us more answers.",
  debriefing: "Just as I thought, it looks like the vast majority of the tourists were transported to the Midnight Sapphire Resort. As for the rest, we cannot be sure yet, but I'm confident we'll get to the bottom of it eventually. Thank you for your help. While there's only a slim chance that we may be able to help these people, we can at least bring those responsible to justice and ensure that this doesn't happen again.",
  objectives: [
    FreshMeatPartThree_Objective1_LRI,
  ],
  vendor: Banshee,
  level: 0
}