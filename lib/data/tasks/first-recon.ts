import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
    CrimsonShieldInternational,
    LamangRecoveryInitiative,
    MithrasSecuritySystems
} from "@/lib/data/factions";
import { KiuVongsa, NamThaven, PhaLang } from "../locations";

export const FirstRecon_Objective1_LRI: objective = {
    id: "",
    name: "Gas Station",
    description: "Check the area around the gas station",
    position: [22075.84432866189, 20422.99499176002],
    type: ObjectiveType.LOCATE,
    faction: LamangRecoveryInitiative,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.PHALANG],
    location: PhaLang
}

export const FirstRecon_Objective2_LRI: objective = {
    id: "",
    name: "Convenience Store",
    description: "Check the convenience store",
    position: [22289.40524522441, 21006.90451003156],
    type: ObjectiveType.LOCATE,
    faction: LamangRecoveryInitiative,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.PHALANG],
    location: PhaLang
}

export const FirstRecon_Objective3_LRI: objective = {
    id: "",
    name: "Demolished Building",
    description: "Check the demolished building",
    position: [22722.64472028925, 21091.559573592087],
    type: ObjectiveType.LOCATE,
    faction: LamangRecoveryInitiative,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.PHALANG],
    location: PhaLang
}


export const FirstRecon_Objective1_MMS: objective = {
    id: "",
    name: "Gas Station",
    description: "Check the area around the gas station",
    position: [16338.961491854141, 12947.36975247615],
    type: ObjectiveType.LOCATE,
    faction: MithrasSecuritySystems,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
    location: NamThaven
}

export const FirstRecon_Objective2_MMS: objective = {
    id: "",
    name: "Convenience Store",
    description: "Check the convenience store",
    position: [16546.782554411337, 12362.026819719438],
    type: ObjectiveType.LOCATE,
    faction: MithrasSecuritySystems,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
    location: NamThaven
}

export const FirstRecon_Objective3_MMS: objective = {
    id: "",
    name: "Demolished Building",
    description: "Check the demolished building",
    position: [16274.375483255433, 12019.522610698068],
    type: ObjectiveType.LOCATE,
    faction: MithrasSecuritySystems,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
    location: NamThaven
}


export const FirstRecon_Objective1_CSI: objective = {
    id: "",
    name: "Gas Station",
    description: "Check the area around the gas station",
    position: [11180.569842049776, 20593.872251165554],
    type: ObjectiveType.LOCATE,
    faction: CrimsonShieldInternational,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
    location: KiuVongsa
}

export const FirstRecon_Objective2_CSI: objective = {
    id: "",
    name: "Convenience Store",
    description: "Check the convenience store",
    position: [10647.30182356712, 20910.74990842797],
    type: ObjectiveType.LOCATE,
    faction: CrimsonShieldInternational,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
    location: KiuVongsa
}

export const FirstRecon_Objective3_CSI: objective = {
    id: "",
    name: "Demolished Building",
    description: "Check the demolished building",
    position: [10638.418686730296, 21345.96401653563],
    type: ObjectiveType.LOCATE,
    faction: CrimsonShieldInternational,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
    location: KiuVongsa
}


export const FirstRecon: task = {
    id: "",
    name: "First Recon",
    briefing: "Hey there, man! Welcome to Lamang! Truly a paradise on earth, eh? Name's Lewis Pell, but we can ditch the formalities, right? Just call me Hanshake, I prefer it anyway. You might have heard that we recently had a little... setback regarding our operations here. Well, I can assure you it's been vastly exaggerated! Everyone's doing their best, and we're basically back on track with only a minor delay, I guess it will be even better since you're here now, right? So, here's the deal. I want you to go past a few spots around the nearby town and keep your peepers wide open on the way. Look for anything out of the ordinary, any signs of trouble, or even potential opportunities. We need to know what's going on in this joint. Your checkpoints will be the gas station in the southern part of the twon, the convinience store in the eastern part, and the area around a demolished building in the southern part. Don't worry, I'm gonna give you map coordinates, so you can't miss it. Once you're done, report back to me pronto, okay? Good luck, champ!",
    debriefing: "Merc, let's get this straight. I don't give a fuck how you see me, but remember this - I don't like you. That will never change; your kind disgusts me, but we can still work on a professional basis. You do something for me, and I'll reward you. Plain ans simple. Do we understand each other? Good. I need you to go back to the nearby town and bring me the tools that are stored in a small house next to the construuction site. And if you ask why i need the tools, when i can get new ones here at the base? Well, my answer is: What the fuck do you care? Shut up, do your job, and you will get what you deserve. Oh, and call me Artisan. I don't want any of you butchers getting my real name misspelled.",
    objectives: [
        FirstRecon_Objective1_LRI,
        FirstRecon_Objective2_LRI,
        FirstRecon_Objective3_LRI,
        FirstRecon_Objective1_MMS,
        FirstRecon_Objective2_MMS,
        FirstRecon_Objective3_MMS,
        FirstRecon_Objective1_CSI,
        FirstRecon_Objective2_CSI,
        FirstRecon_Objective3_CSI,
    ],
    vendor: Handshake,
    level: 0
}