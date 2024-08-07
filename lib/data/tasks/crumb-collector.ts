import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";

const CrumbCollector_Objective1: objective = {
    id: "N/A",
    name: "Medical Records",
    description: "Retrieve medical records and report back to Lab Rat",
    position: [22046.975971994005, 14640.947416439318],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.TIGERBAY],
    location: TigerBay
}

export const CrumbCollector: task = {
    id: "N/A",
    name: "Crumb Collector",
    briefing: "All the evidence suggests that the UNLRA was heavily researching the effects of the Event. Many people were examined before being allowed to leave the island, and given the chaotic evacuation, there should be some medical records left behind that could help with my research. I want you to go to Tiger Bay and search the UNLRA refugee for the medical records. We are genuinely on the verge of discovering something immense, and the more data I can get my hands on, the better.",
    debriefing: "Yes, I knew it! They were really researching the changes the Event had on the affected population. Thank you for the records! These medical files are full of strange data, but given our own research, it's nothing I wouldn't believe. I'm eager to find more!",
    objectives: [
        CrumbCollector_Objective1
    ],
    vendor: LabRat,
    level: 0,
}