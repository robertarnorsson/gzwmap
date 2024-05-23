import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
    CrimsonShieldInternational,
    LamangRecoveryInitiative,
    MithrasSecuritySystems
} from "@/lib/data/factions";
import { RatsNest } from "@/lib/data/tasks/rats-nest";

const HelpingHand_Objective1_LRI: objective = {
    id: "",
    name: "Intel Folder",
    description: "Find the Intel Folder from the restaurant in Pha Lang",
    position: [0.913078943048676, -0.4350616565740784],
    type: ObjectiveType.COLLECT,
    faction: LamangRecoveryInitiative,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.PHALANG]
}

const HelpingHand_Objective1_MMS: objective = {
    id: "",
    name: "Intel Folder",
    description: "Find the Intel Folder from the restaurant in Nam Thaven",
    position: [0.5227110808369654, -0.7061656640474491],
    type: ObjectiveType.COLLECT,
    faction: MithrasSecuritySystems,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN]
}

const HelpingHand_Objective1_CSI: objective = {
    id: "",
    name: "Intel Folder",
    description: "Find the Intel Folder from the restaurant in Kiu Vongsa",
    position: [0.9218800751974064, -0.9486952611587008],
    type: ObjectiveType.COLLECT,
    faction: CrimsonShieldInternational,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA]
}


export const HelpingHand: task = {
    id: "",
    name: "Helping Hand",
    briefing: "We've got a problem. Seems our adversaries, those local rats, are way more well equipped than they ever should have been. Now, I know what you're thinking, \"How the fuck is that even possible?\" Well, it's clear as da that someone gave them a helping hand. And that is a problem we need to swiftly address. So here's the deal: we're gonna send you into one of their meeting spots, a place we suspect holds the answers we're looking for, to gather some concrete evidence, something that can expose who helped those bastards. Our scouts suggest that the best place to begin your search is an old restaurant on a street corner in the northern part of town. Once you've got what we need, make your way back here immediately. We don't want any loose ends that could come back to bite us in the ass.",
    debriefing: "Excellent work. I knew I could count on you to get the job done. You managed to discover a significant piece of evidence. It appears that those hicks struck some kind of deal with the local armed forces, the LAF. Now, we don't have all the answers just yet, but this discovery opens up new avenues for investigation. We'll analyze the folder and extract any actionable intelligence it contains.",
    objectives: [
        HelpingHand_Objective1_LRI,
        HelpingHand_Objective1_MMS,
        HelpingHand_Objective1_CSI,
    ],
    vendor: Handshake,
    level: 0,
    prerequisites: RatsNest
}