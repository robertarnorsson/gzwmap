import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Turncoat } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";

const InTheRightHands_Objective1: objective = {
    id: "O-B04GA1",
    name: "Orders",
    description: "Retrieve the orders from Fort Narith and report back to Turncoat",
    position: [10750.164258232178, 14906.33433856451],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.FORTNARITH],
    location: FortNarith
}

export const InTheRightHands: task = {
    id: "T-57K99U",
    name: "In The Right Hands",
    briefing: "Friend, I've heard that you're looking for some files about the civilian evacuation around Fort Narith. I don't know who asked you to do this, but I would be tremendously grateful if you could bring the files to me instead. This kind of information would be of interest to many people, and I know how to handle such demands. I can think of one particular person who would kill for these files. I would greatly appreciate your cooperation in this matter. Knowledge is power, and that is something I would like to have for myself.",
    debriefing: "Friend, you have my thanks. If it weren't for your help, who knows what shady person would have gotten their dirty hands on these documents. I get sick to my stomach just thinking about it.",
    objectives: [
      InTheRightHands_Objective1
    ],
    vendor: Turncoat,
    level: 0,
    cancelTaskId: "T-7Q7AS3"
}