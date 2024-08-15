import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Turncoat } from "@/lib/data/vendors";
import { BlueLagoon } from "@/lib/data/locations";
import { BLStrg } from "@/lib/data/keys/blue-lagoon";

const OneMansTrash_Objective1: objective = {
    id: "O-PYJTVA",
    name: "Box of Passports",
    description: "Retrieve the personal documents and hand it over to Turncoat",
    position: [22546.287816155935, 12112.93053841971],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.BLUELAGOON],
    location: BlueLagoon,
    key: BLStrg
}

export const OneMansTrash: task = {
    id: "T-SNU8VR",
    name: "One Man's Trash",
    briefing: "Friend, I recently found out that the folks at Blue Lagoon had a very immoral yet lucrative side business. What was happening there is sad, very sad, yes, but the past is the past. We can't change what happened. We have to look to the future. The unfortunate people who disappeared in the Blue Lagoon are gone, and therefore, they no longer need their IDs and passports. I'm a man who can use such documents bestowed by providence itself, so be kind and bring them to me. To do otherwise would be a waste. I will not forget such a favor and will reward it accordingly.",
    debriefing: "Friend, you have my thanks. Your money-hungry attitude is a blessing to a man like me. You deserve every penny for your favor. I can guarantee you that these documents will serve a new purpose and produce a lot of money.",
    objectives: [
      OneMansTrash_Objective1
    ],
    vendor: Turncoat,
    level: 0,
    key: [
      BLStrg
    ]
}