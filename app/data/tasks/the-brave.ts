import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { LabRat } from "~/data/vendors";
import { HuntersParadise } from "~/data/locations";

const TheBrave_Objective1: objective = {
    id: "O-FOQ7JT",
    name: "Aulii Syvongsa and Letter",
    description: "Find Aulii Syvongsa and pickup the goodbye letter",
    position: [14108.003734323835, 22003.067700425356],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.LABRAT, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise,
    note: "Body with bag over head. Grab note on the ground behind post."
}

export const TheBrave: task = {
    id: "T-1MCAHX",
    name: "The Brave",
    briefing: "Hey, do you have some time right now? I'd really appreciate your help with something. We got another missing person, and I need you to find him. You think you can do that for me, please? Aulii Syvongsa, he lives in nearby the northern resort, and from what his wife told me, he Can't work because of the injuries he sustained for his “anti-patriarchal behavior,” courtesy of the local police force. That poor family has been struggling ever since. The thing is, he disappeared a day before the evacuation even started. The last time somebody saw him, he was heading for the Hunter's Paradise shooting range west of the resort. Please, could you head out there and look for him? I'm sure it will mean the world to his wife… and to me.",
    debriefing: "Oh my God, those poor people. What kind of sick monsters would allow something like this to happen? The more I learn about this country, the more I think what happened here was well-deserved. At least the majority had a chance to finally escape this hell…",
    objectives: [
        TheBrave_Objective1,
    ],
    vendor: LabRat,
    level: 0,
}
