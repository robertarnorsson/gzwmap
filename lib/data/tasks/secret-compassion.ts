import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { MedicalDetective } from "@/lib/data/tasks/medical-detective";
import { KiuVongsa, NamThaven, PhaLang } from "@/lib/data/locations";
import { BoxOfSupplies } from "@/lib/data/items";

const SecretCompassion_Objective1_LRI: objective = {
  id: "O-SP8PXL",
  name: "Farm South",
  description: "Place the Supplies in a box by the front door at a farm south of Pha Lang",
  position: [22432.20490818161, 20063.288871003875],
  type: ObjectiveType.STASH,
  faction: LamangRecoveryInitiative,
  image: "/objectives/secret-compassion-farm-1.webp",
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.LABRAT, MarkerType.PHALANG],
  location: PhaLang,
  items: [BoxOfSupplies]
}

const SecretCompassion_Objective2_LRI: objective = {
  id: "O-842210",
  name: "Farm West",
  description: "Place the Supplies in a box by the front door at a farm west of Pha Lang",
  position: [21781.620310295577, 21086.216380201255],
  type: ObjectiveType.STASH,
  faction: LamangRecoveryInitiative,
  image: "/objectives/secret-compassion-farm-2.webp",
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.LABRAT, MarkerType.PHALANG],
  location: PhaLang,
  items: [BoxOfSupplies]
}

const SecretCompassion_Objective3_LRI: objective = {
  id: "O-XRHI6K",
  name: "Logging Shed",
  description: "Place the Supplies in a box by the front door at a farm north of Pha Lang",
  position: [22214.420868114288, 21245.607947426426],
  type: ObjectiveType.STASH,
  faction: LamangRecoveryInitiative,
  image: "/objectives/secret-compassion-logging-shed.webp",
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.LABRAT, MarkerType.PHALANG],
  location: PhaLang,
  items: [BoxOfSupplies]
}


const SecretCompassion_Objective1_MMS: objective = {
  id: "O-8OTWRT",
  name: "Farm West",
  description: "Place the Supplies in a box by the front door at a farm west of Nam Thaven",
  position: [15837.505738174745, 12990.525627908482],
  type: ObjectiveType.STASH,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.LABRAT, MarkerType.NAMTHAVEN],
  location: NamThaven,
  items: [BoxOfSupplies]
}

const SecretCompassion_Objective2_MMS: objective = {
  id: "O-P88UZD",
  name: "Farm East",
  description: "Place the Supplies in a box by the front door at a farm east of Nam Thaven",
  position: [16992.002088144804, 12625.438282469631],
  type: ObjectiveType.STASH,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.LABRAT, MarkerType.NAMTHAVEN],
  location: NamThaven,
  items: [BoxOfSupplies]
}

const SecretCompassion_Objective3_MMS: objective = {
  id: "O-9UO605",
  name: "Logging Shed",
  description: "Place the Supplies in a box by the front door at a logging shed in the southeast part of Nam Thaven",
  position: [16763.960374789767, 12227.383649614789],
  type: ObjectiveType.STASH,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.LABRAT, MarkerType.NAMTHAVEN],
  location: NamThaven,
  items: [BoxOfSupplies]
}


const SecretCompassion_Objective1_CSI: objective = {
  id: "O-5HIO9D",
  name: "Farm East",
  description: "Place the Supplies in a box by the front door at a farm east of Kiu Vongsa",
  position: [11595.81212836082, 20883.248130679298],
  type: ObjectiveType.STASH,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.LABRAT, MarkerType.KIUVONGSA],
  location: KiuVongsa,
  items: [BoxOfSupplies]
}

const SecretCompassion_Objective2_CSI: objective = {
  id: "O-8XR8K1",
  name: "Farm West",
  description: "Place the Supplies in a box by the front door at a farm west of Kiu Vongsa",
  position: [10479.76577492203, 20415.978552770164],
  type: ObjectiveType.STASH,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.LABRAT, MarkerType.KIUVONGSA],
  location: KiuVongsa,
  items: [BoxOfSupplies]
}

const SecretCompassion_Objective3_CSI: objective = {
  id: "O-VNHFNG",
  name: "Logging Shed",
  description: "Place the Supplies in a box by the front door at a logging shed in the northwest part of Kiu Vongsa",
  position: [10396.538526657367, 20870.59117726746],
  type: ObjectiveType.STASH,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.LABRAT, MarkerType.KIUVONGSA],
  location: KiuVongsa,
  items: [BoxOfSupplies]
}


export const SecretCompassion: task = {
  id: "T-2JU1CP",
  name: "Secret Compassion",
  briefing: "Listen, I need your help with something... something I'm not proud of, but I believe it's the right thing to do. You see, our medical supplies have been disappearing, and I have to come clean. It was me. I've been secretly providing medical aid to the local civilians. The people here are suffering, and I couldn't stand by and watch them endure without help. I know it goes against our mission protocols, but my heart couldn't bear the thought of leaving them in despair. Now I need your assistance more than ever. We must continue our efforts to bring aid to those in need, but we have to be even more discreet. I'll provide you with three sets of various supplies, and I need you to distribute them to the civilians covertly. I have to stress that this is a delicate operation. We'll make a difference in their lives, but we must do so while maintaining the integrity of our mission. Together, we can provide hope amidst the chaos.",
  debriefing: "You did it! Against all odds, we've managed to provide much-needed aid to the local civilians. From the bottom of my heart, thank you. I won't ask you to keep this secret forever, but for now, it's crucial that we exercise caution. Our focus must remain on the greater good, even if it means working in the shadows.",
  objectives: [
    SecretCompassion_Objective1_LRI,
    SecretCompassion_Objective2_LRI,
    SecretCompassion_Objective3_LRI,
    SecretCompassion_Objective1_MMS,
    SecretCompassion_Objective2_MMS,
    SecretCompassion_Objective3_MMS,
    SecretCompassion_Objective1_CSI,
    SecretCompassion_Objective2_CSI,
    SecretCompassion_Objective3_CSI,
  ],
  vendor: LabRat,
  level: 0,
  items: [
    BoxOfSupplies,
    BoxOfSupplies,
    BoxOfSupplies
  ],
  prerequisites: MedicalDetective
}