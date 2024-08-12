import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";
import { SampleCollectionKit } from "../items/tools";

const SeekerOfChange_Objective1: objective = {
    id: "O-07YEFI",
    name: "Samples",
    description: "Retrieve usable samples from the barracks and report back to Lab Rat",
    position: [10728.671654652322, 15000.553389293644],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.FORTNARITH],
    location: FortNarith,
    items: [ SampleCollectionKit ]
}

export const SeekerOfChange: task = {
    id: "T-QTPMZF",
    name: "Seeker Of Change",
    briefing: "I have a critical assignment for you. Based on my sources, it seems that some soldiers from Fort Narith were dispatched to Ground Zero and were impacted in some way. Although I lack precise details about their condition, reports suggest that those who encountered them found it deeply unsettling. That's why I require you to visit Fort Narith and collect samples from these affected soldiers. Given our limited knowledge of the situation, this information is vital. The lack of clarity surrounding the Event makes every piece of information valuable. Retrieving these samples would greatly assist us in our quest for the truth.",
    debriefing: "Fascinating. It appears that the soldiers underwent some... changes due to their presence inside of Ground Zero. While it's regrettable that we only managed to secure blood samples, it's still a significant development, especially considering the LAF's efforts to conceal the truth about these individuals. I can only speculate about the extent of the soldiers' physical alterations, as the laboratory findings reveal some very strange anomalies...",
    objectives: [
        SeekerOfChange_Objective1
    ],
    vendor: LabRat,
    level: 0,
    items: [ SampleCollectionKit ]
}