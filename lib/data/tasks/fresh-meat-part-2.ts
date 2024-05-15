import { ObjectiveType, objective, task } from "@/lib/types";
import { Banshee } from "@/lib/data/vendors";

const FreshMeatPartTwo_Objective1_LRI: objective = {
  name: "Building",
  description: "Find a building being used for the human-trafficking operation",
  position: [0.5170220020654129, -0.42799472808837896],
  type: ObjectiveType.DISCOVER,
}


export const FreshMeatPartTwo: task = {
  name: "Fresh Meat - Part 2",
  briefing: "The intel you found is very troubling. If there was indeed a government-sanctioned human trafficking operation run from that place, we need to investigate further. It's likely that the tourists were lured by the gang members somewhere, drugged, and then transported around the island to their terrible fates. We need to locate where this was happening to confirm this hypothesis. Please conduct a thorough investigation of the Blue Lagoon area and search for any building that might have served this purpose. Once you locate such a structure, try to gain access to confirm our theory.",
  debriefing: "No matter how often I encounter places like this, it always makes me sick to my stomach. It never gets easier, that’s for sure. I think we’re starting to get the complete picture now, but there’s still one piece missing. I’ll talk to you soon.",
  objectives: [
    FreshMeatPartTwo_Objective1_LRI,
  ],
  vendor: Banshee,
  level: 0
}