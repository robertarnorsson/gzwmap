import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import { YBL1 } from "@/lib/data/locations";

const CheckOutComputers_Objective1: objective = {
    id: "N/A",
    name: "Floppy Disks",
    description: "Retrive the intel and report back to Lab Rat",
    position: [10970.725235797077, 13010.85246696004],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.YBL1],
    location: YBL1
}

export const CheckOutComputers: task = {
    id: "N/A",
    name: "Check Out Computers",
    briefing: "I need you to do something for me. The intel you brought back about the Soviet bunker indicates that there is some technology there that is unsuitable for its military purpose. You know, old computers and stuff. That is highly suspicious. The Soviets wouldn't need that many machines just to run a hole in the ground. Mr. Pell doesn't think we should allocate our resources to investigate this matter, but I'm of a different opinion. Therefore, I would like you to go down to the bunker and try to find out what the Soviets have been doing there. Of course, it's possible you won't get anything from the old computers, but I'm still hoping there's at least something left that can help us get to the bottom of this. Would you be so kind as to do this for me, please?",
    debriefing: "So you are saying that the bunker is connected to another location by computer cables? Interesting. And you brought me a disk? Perfect! I will do my best to quickly decipher what is stored on it. Thank you very much. Together we will uncover the secrets of this mysterious island.",
    objectives: [
      CheckOutComputers_Objective1
    ],
    vendor: LabRat,
    level: 0,
}