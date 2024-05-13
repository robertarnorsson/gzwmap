import { ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { MedicalDetective } from "@/lib/data/tasks/medical-detective";

const SecretCompassion_Objective1_LRI: objective = {
  name: "Farm South",
  description: "Place the Supplies in a box by the front door at a farm south of Pha Lang",
  position: [0.8712657678111906, -0.44314610499706536],
  type: ObjectiveType.STASH,
  faction: LamangRecoveryInitiative
}

const SecretCompassion_Objective2_LRI: objective = {
  name: "Farm West",
  description: "Place the Supplies in a box by the front door at a farm west of Pha Lang",
  position: [0.9144949402662516, -0.4720064915621825],
  type: ObjectiveType.STASH,
  faction: LamangRecoveryInitiative
}

const SecretCompassion_Objective3_LRI: objective = {
  name: "Logging Shed",
  description: "Place the Supplies in a box by the front door at a farm north of Pha Lang",
  position: [0.9210288702513367, -0.4533260384684135],
  type: ObjectiveType.STASH,
  faction: LamangRecoveryInitiative
}


const SecretCompassion_Objective1_MMS: objective = {
  name: "Farm West",
  description: "Place the Supplies in a box by the front door at a farm west of Nam Thaven",
  position: [0.5618384032046484, -0.7269009856792841],
  type: ObjectiveType.STASH,
  faction: MithrasSecuritySystems
}

const SecretCompassion_Objective2_MMS: objective = {
  name: "Farm East",
  description: "Place the Supplies in a box by the front door at a farm east of Nam Thaven",
  position: [0.545875887819414, -0.677249609977626],
  type: ObjectiveType.STASH,
  faction: MithrasSecuritySystems
}

const SecretCompassion_Objective3_MMS: objective = {
  name: "Logging Shed",
  description: "Place the Supplies in a box by the front door at a logging shed in the southeast part of Nam Thaven",
  position: [0.5284621857447294, -0.6870197193898854],
  type: ObjectiveType.STASH,
  faction: MithrasSecuritySystems
}


const SecretCompassion_Objective1_CSI: objective = {
  name: "Farm East",
  description: "Place the Supplies in a box by the front door at a farm east of Kiu Vongsa",
  position: [0.9068183278177685, -0.9093634948019782],
  type: ObjectiveType.STASH,
  faction: CrimsonShieldInternational
}

const SecretCompassion_Objective2_CSI: objective = {
  name: "Farm West",
  description: "Place the Supplies in a box by the front door at a farm west of Kiu Vongsa",
  position: [0.8849842640209445, -0.9564419247927481],
  type: ObjectiveType.STASH,
  faction: CrimsonShieldInternational
}

const SecretCompassion_Objective3_CSI: objective = {
  name: "Logging Shed",
  description: "Place the Supplies in a box by the front door at a logging shed in the northwest part of Kiu Vongsa",
  position: [0.9051807776224845, -0.9598434029805626],
  type: ObjectiveType.STASH,
  faction: CrimsonShieldInternational
}


export const SecretCompassion: task = {
  name: "Secret Compassion",
  briefing: "Listen, I need your help with something... something I'm not proud of, but I believe it's the right thing to do. You see, our medical supplies have been disappearing, and I have to come clean. It was me. I've been secretly providing medical aid to the local civilians. The people here are suffering, and I couldn't stand by and watch them endure without help. I know it goes against our mission protocols, but my heart couldn't bear the thought of leaving them in despair. Now I need your assistance more than ever. We must continue our efforts to bring aid to those in need, but we have to be even more discreet. I'll provide you with three sets of various supplies, and I need you to distribute them to the civilians covertly. I have to stress that this is a delicate operation. We'll make a difference in their lives, but we must do so while maintaining the integrity of our mission. Together, we can provide hope amidst the chaos.",
  debriefing: "You did it! Against all odds, we've managed to provide much-needed aid to the local civilians. From the bottom of my heart, thank you. I won't ask you to keep this secret forever, but for now, it's crucial that we exercise caution. Our focus must remain on the greater good, even if it means working in the shadows.",
  note: "You will need 3 supply boxes to complete this task",
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
  prerequisites: MedicalDetective
}