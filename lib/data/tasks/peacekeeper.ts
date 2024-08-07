import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";
import { TBQr } from "../keys/tiger-bay";

const Peacekeeper_Objective1: objective = {
    id: "N/A",
    name: "UNLRA Peacekeeper",
    description: "Collect a sample from the UNLRA peacekeeper in the left shack south of the refugee camp",
    position: [22084.53593289686, 14617.072463521974],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.TIGERBAY],
    location: TigerBay,
    key: TBQr
}

export const Peacekeeper: task = {
    id: "N/A",
    name: "Peacekeeper",
    briefing: "I was contacted by a distraught woman from the mainland. Her husband worked as a UN peacekeeper but did not return with the rest. She hasn't been able to get any information from official places, so she is trying to get answers through us. The man revealed to her that he was going to GZ, so it is possible that he was left behind on purpose. Something might have happened to him, just like to the rest of the people affected by that enigmatic place. Of course, I didn't say it out loud, it's still just a hypothesis, but be sure to take a sample kit with you. According to her, he spent most of his time near the refugee camp in Tiger Bay, so please look for him around that place. I hope we can bring her good news, but if we are to be bearers of bad news again, at least bring me back the sample. Additional data on GZ would be invaluable.",
    debriefing: "His body was burned, but his clothes were untouched? Interesting. We know so little about these kinds of phenomena. Thank you for the sample; it will help me a lot with my research. Oh, and I will inform the widow of the tragic outcome of our search.",
    objectives: [
        Peacekeeper_Objective1
    ],
    vendor: LabRat,
    level: 0,
    key: [
        TBQr
    ]
}