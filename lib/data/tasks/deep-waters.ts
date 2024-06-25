import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Artisan } from "@/lib/data/vendors";
import { BlueLagoon } from "../locations";

const DeepWaters_Objective1_LRI: objective = {
    id: "N/A",
    name: "Gang Members",
    description: "Eliminate 20 gang members in the Blue Lagoon",
    position: [22703.69038944502, 12258.246442272266],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.ARTISAN, MarkerType.BLUELAGOON],
    location: BlueLagoon
}


export const DeepWaters: task = {
    id: "N/A",
    name: "Deep Waters",
    briefing: "Mercenary, those bastards at the Blue Lagoon might be sharing this country with me, but they are not my people; you get that? They are filth, plain and simple, who have long preyed on the weakest around here. That all ends now. I want you to pay them a little visit and introduce them to the consequences of their actions. Don't ask any questions, and just kill them, okay? Trust me, it is a blessing compared to some of the things they did to people here...",
    debriefing: "I knew this would be something you’d excel at, merc. I’m glad your appetite for killing was used for a good cause this time. I just hope it wasn’t the last.",
    objectives: [
        DeepWaters_Objective1_LRI,
    ],
    vendor: Artisan,
    level: 0
}