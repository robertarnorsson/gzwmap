import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Banshee } from "@/lib/data/vendors";
import { BlueLagoon } from "@/lib/data/locations";

const FreshMeatPartTwo_Objective1_LRI: objective = {
  id: "O-PRCIRW",
  name: "Building",
  description: "Find a building being used for the human-trafficking operation",
  position: [22801.804278948886, 11963.20241777538],
  type: ObjectiveType.LOCATE,
  image: "/objectives/fresh-meat-part-2.webp",
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.BANSHEE, MarkerType.BLUELAGOON],
  location: BlueLagoon
}


export const FreshMeatPartTwo: task = {
  id: "T-83YV48",
  name: "Fresh Meat II",
  briefing: "The intel you found is very troubling. If there was indeed a government-sanctioned human trafficking operation run from that place, we need to investigate further. It's likely that the tourists were lured by the gang members somewhere, drugged, and then transported around the island to their terrible fates. We need to locate where this was happening to confirm this hypothesis. Please conduct a thorough investigation of the Blue Lagoon area and search for any building that might have served this purpose. Once you locate such a structure, try to gain access to confirm our theory.",
  debriefing: "No matter how often I encounter places like this, it always makes me sick to my stomach. It never gets easier, that's for sure. I think we're starting to get the complete picture now, but there's still one piece missing. I'll talk to you soon.",
  objectives: [
    FreshMeatPartTwo_Objective1_LRI,
  ],
  vendor: Banshee,
  level: 0
}