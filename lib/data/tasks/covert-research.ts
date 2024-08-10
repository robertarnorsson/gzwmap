import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import {
    CrimsonShieldInternational,
    LamangRecoveryInitiative,
    MithrasSecuritySystems
} from "@/lib/data/factions";
import { KiuVongsa, NamThaven, PhaLang } from "@/lib/data/locations";

const CovertResearch_Objective1_LRI: objective = {
    id: "O-7YIIBZ",
    name: "Cargo",
    description: "Retrieve the cargo from the fortified hideout in Pha Lang and report back to Lab Rat",
    position: [22873.152070104577, 20824.914092698127],
    type: ObjectiveType.COLLECT,
    faction: LamangRecoveryInitiative,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.PHALANG],
    location: PhaLang
}

const CovertResearch_Objective1_MMS: objective = {
    id: "O-LO79H9",
    name: "Cargo",
    description: "Retrieve the cargo from the fortified hideout in Nam Thaven and report back to Lab Rat",
    position: [15984.747526136589, 12126.518461181018],
    type: ObjectiveType.COLLECT,
    faction: MithrasSecuritySystems,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.NAMTHAVEN],
    location: NamThaven
}

const CovertResearch_Objective1_CSI: objective = {
    id: "O-H20VYY",
    name: "Cargo",
    description: "Retrieve the cargo from the fortified hideout in Kiu Vongsa and report back to Lab Rat",
    position: [10927.674680565638, 21449.43231942419],
    type: ObjectiveType.COLLECT,
    faction: CrimsonShieldInternational,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.KIUVONGSA],
    location: KiuVongsa
}


export const CovertResearch: task = {
    id: "T-83VTBS",
    name: "Covert Research",
    briefing: "Hey, so I don't really know how to say this, so I'll just be blunt. I need your help with something, and I beg you to keep it a secret. I hope i can trust you. You see, the container you've been tasked to retrieve holds something of immense significance, something that could reshape our understanding of this entire situation. I know that Mr. Pell wants the container for immediate assessment, but I implore you to bring it to me first. I can't reveal the specifics just yet, but trust me when I say that it's vital for me to conduct thorough research on its contents before any further actions are taken. He may not see the value in this approach, but I assure you that it is in the best interest of our mission. Don't worry, once my research is complete and I have gaines a comprehensive understanding of the container's contents, i will present my findings to Mr. Pell. It will be up to him to decide how to proceed from there. I know it's a lot to ask, but will you please help me?",
    debriefing: "Thank you! Thank you so much! I understand the trust you've placed in me, and I assure you it will not be in vain. The contents of this container hold incredible potential, and I believe it may be the key to truly understanding what's happening here. I know you must be curious about what's inside, but I must keep it a secret for now, sorry. Rest assured that once I know more, I'll share my findings with you. I'm sure that together, we'll get to the bottom of all of this!",
    note: "You will be overweight and can't sprint while carrying the cargo.",
    objectives: [
        CovertResearch_Objective1_LRI,
        CovertResearch_Objective1_MMS,
        CovertResearch_Objective1_CSI,
    ],
    vendor: LabRat,
    level: 0
}