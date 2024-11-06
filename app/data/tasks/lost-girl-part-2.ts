import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Gunny } from "~/data/vendors";
import { BlueLagoon } from "~/data/locations";

const LostGirlPartTwo_Objective1: objective = {
    id: "O-T45BJB",
    name: "Diary",
    description: "Retrieve the diary in the bag by the pink tent at the Blue Lagoon",
    position: [22785.004897990144, 12050.195045198194],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.GUNNY, MarkerType.BLUELAGOON],
    location: BlueLagoon
}

export const LostGirlPartTwo: task = {
    id: "T-6Q82CA",
    name: "Lost Girl II",
    briefing: "Since the intel you found during your last mission is our only lead, it's time for you to return to the Blue Lagoon. The girl's parents provided me with a list of items she likely packed for her trip, and one of them was a pink tent. Search the palace from top to bottom and keep an eye out for something like that. It shouldn't be too difficult, right? Once you find the tent, explore the surrounding area for any clues that might help us determine her current whereabouts.",
    debriefing: "Damn, looking at the last entry in her diary does not look good. She met some “cool people” who like to party, and they were about to show her their “special place.” Goddammit! Why are kids so stupid!? I have a really bad feeling about this. Let's just hope I'm wrong.",
    objectives: [
      LostGirlPartTwo_Objective1
    ],
    vendor: Gunny,
    level: 0,
}