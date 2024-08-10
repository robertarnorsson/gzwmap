import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
    CrimsonShieldInternational,
    LamangRecoveryInitiative,
    MithrasSecuritySystems
} from "@/lib/data/factions";
import { KiuVongsa, NamThaven, PhaLang } from "@/lib/data/locations";

const FirstHit_Objective1_LRI: objective = {
    id: "O-DZEW6U",
    name: "Criminal Leader",
    description: "Neutralize the criminal leader in Pha Lang",
    position: [22204.554131063393, 20834.651660464893],
    type: ObjectiveType.ELIMINATION,
    faction: LamangRecoveryInitiative,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.PHALANG],
    location: PhaLang
}

const FirstHit_Objective1_MMS: objective = {
    id: "O-5M205K",
    name: "Criminal Leader",
    description: "Neutralize the criminal leader in Nam Thaven",
    position: [16503.55573729751, 12548.414101521914],
    type: ObjectiveType.ELIMINATION,
    faction: MithrasSecuritySystems,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
    location: NamThaven
}

const FirstHit_Objective1_CSI: objective = {
    id: "O-0M3CWJ",
    name: "Criminal Leader",
    description: "Neutralize the criminal leader in Kiu Vongsa",
    position: [10798.964457916216, 20794.164001233108],
    type: ObjectiveType.ELIMINATION,
    faction: CrimsonShieldInternational,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
    location: KiuVongsa
}


export const FirstHit: task = {
    id: "T-4VOR7I",
    name: "First Hit",
    briefing: "Based on all you managed to find out during your previous work, it looks like some of the rats in the town have formed a little gang and are trying to get themselves organized. It#s also moree than probable that their leader is one who struck a deal with the LAF to undermine our operations in the area, and we can't have that, can we? Apparently, this asshole thinks he's tough shit and even wears a red beret. You'll probably find him in and around the marketplace, so gear up and shoot that stupid shit off his head!",
    debriefing: "Another job well done! That bastard won't be causing us any more trouble, thanks to your swift and efficient action. Keep up the good work!",
    objectives: [
        FirstHit_Objective1_LRI,
        FirstHit_Objective1_MMS,
        FirstHit_Objective1_CSI,
    ],
    vendor: Handshake,
    level: 0
}