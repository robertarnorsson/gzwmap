import { ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const MedsWanted_Objective1_LRI: objective = {
  name: "Meds Wanted - Supplies",
  description: "Find the UNLRA Medical Supplies at the town's Water Tower",
  position: [0.9140398374202118, -0.4583787918090821],
  type: ObjectiveType.DELIVER,
  faction: LamangRecoveryInitiative
}

const MedsWanted_Objective1_MMS: objective = {
  name: "Meds Wanted - Supplies",
  description: "Find the UNLRA Medical Supplies at the town's Water Tower",
  position: [0.5377593062048597, -0.6875038146972657],
  type: ObjectiveType.DELIVER,
  faction: MithrasSecuritySystems
}

const MedsWanted_Objective1_CSI: objective = {
  name: "Meds Wanted - Supplies",
  description: "Find the UNLRA Medical Supplies at the town's Water Tower",
  position: [0.8982289680777165, -0.9536218643188478],
  type: ObjectiveType.DELIVER,
  faction: CrimsonShieldInternational
}


export const MedsWanted: task = {
  name: "Meds Wanted",
  description: "I knew I could count on you! This will be a tremendous help to everyone. Each vial, each bandage, they represent a chance for healing and recovery. It's a small victory, but one that matters so much to our people.",
  objectives: [
    MedsWanted_Objective1_LRI,
    MedsWanted_Objective1_MMS,
    MedsWanted_Objective1_CSI,
  ],
  vendor: LabRat,
  level: 0
}