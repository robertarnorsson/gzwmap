import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Artisan } from "~/data/vendors";
import { YBL1 } from "~/data/locations";

const Prisoner23_Objective1: objective = {
    id: "O-Z2XHRN",
    name: "Folder",
    description: "Retrieve the information folder about the prisoner and report back to Artisan",
    position: [10968.047336505448, 13064.802146271039],
    type: ObjectiveType.COLLECT,
    image: "/objectives/prisoner-23-folder.webp",
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.YBL1],
    location: YBL1
}

export const Prisoner23: task = {
    id: "T-IESYJB",
    name: "Prisoner 23",
    briefing: "Merc, I heard you roamed The Hole. I'm not surprised. Bad places attract similar people. You've probably figured out that the Lamang government is not fond of criticism, so the dissidents frequently disappear into that cursed bunker. Remember my colleague from Fort Narith? According to my sources, he was imprisoned there as prisoner number 23. I want you to look for any information on him. Unfortunately, that's all I know. Don't worry, you won't leave this deal empty-handed. I've prepared your reward, so don't waste time and do what you're paid for, merc.",
    debriefing: "Fuck! Those assholes tortured him. Sick bastards! I'm gonna kill every one last of them! Thank God he's still alive, but they transported him somewhere else, and I have no idea where! All this time, and I'm back to square one... just get lost, okay!? I need to be alone!",
    objectives: [
      Prisoner23_Objective1
    ],
    vendor: Artisan,
    level: 0,
}