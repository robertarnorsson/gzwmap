import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Banshee } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";

const NoEscape_Objective1: objective = {
    id: "O-L1XDLT",
    name: "Folder",
    description: "Bring folder from the archive to Banshee",
    position: [11096.706409100598, 14477.233762798798],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.FORTNARITH],
    location: FortNarith
}

export const NoEscape: task = {
    id: "T-FXMEM3",
    name: "No Escape",
    briefing: "It has come to my attention that you have accepted an assignment to retrieve a certain folder from the Fort Narith archives. All indications are that the soldier who wants to disappear from the records is an army chief with blood on his hands. Now, I know you came here primarily to make money, but this could be a significant breakthrough in my investigation, so I would like you to think about the bigger picture and help me catch the bad guys. I probably can't give you as big a reward as you were promised, but your cooperation would greatly benefit my case. Please bring me the folder.",
    debriefing: "Well, this is something. This folder contains a lot of very interesting and useful information about a suspect I'm after. Thank you very much. Your cooperation is highly appreciated.",
    objectives: [
      NoEscape_Objective1
    ],
    vendor: Banshee,
    level: 0,
    note: 'Will cancel "A Small Favor"'
}