import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { LabRat } from "~/data/vendors";
import { YBL1 } from "~/data/locations";

const FinalLiberation_Objective1: objective = {
    id: "O-H0IPDO",
    name: "Rebel Leader",
    description: "Eliminate the rebel leader",
    position: [11000.622922001789, 13008.801860321935],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.TURNCOAT, MarkerType.YBL1],
    location: YBL1
}

export const FinalLiberation: task = {
    id: "T-6MYKEJ",
    name: "Final Liberation",
    briefing: "Friend, the moment I heard that you had clashed with the Lamang Liberation Army, I rushed to your aid as fast as I could. I'm pretty sure you've already met some foolish individuals who worship these so-called freedom fighters and tried to convince you not to kill them. Know that I have a history with them, and I can guarantee you that these terrorists only understand violence. Let me give you some advice. Kill their leader, that damned old dog Lani Sayavong and the rest of his thugs will piss themselves and flee in fear. He wouldn't leave a place like The Hole to someone else; he'd be there in person. And don't worry, I won't charge you for my help; in fact, I'll reward you if you decide to give the bastard what he deserves. Eliminating the LLA leader would be a great favor not only to me but also to all of Lamang.",
    debriefing: "Ha ha ha! Friend, you are a wise and merciless man. I love it! The death of old Lani will strike fear into the hearts of the LLA assholes. Long have I waited for this moment. Sweet, sweet revenge. You have my gratitude.",
    objectives: [
        FinalLiberation_Objective1
    ],
    vendor: LabRat,
    level: 0,
}