import { ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { LeaveNoManBehind } from "@/lib/data/tasks/leave-no-man-behind";

const MedicalDetective_Objective1_LRI: objective = {
  name: "Medical Detective - Missing Supplies",
  description: "Search for the Missing Supplies in Pha Lang",
  position: [0.910734961284329, -0.42277983496990645],
  type: ObjectiveType.DELIVER,
  faction: LamangRecoveryInitiative
}

const MedicalDetective_Objective1_MMS: objective = {
  name: "Medical Detective - Missing Supplies",
  description: "Search for the Missing Supplies in Nam Thaven",
  position: [0.5166650742814851, -0.7170144347480178],
  type: ObjectiveType.DELIVER,
  faction: MithrasSecuritySystems
}

const MedicalDetective_Objective1_CSI: objective = {
  name: "Medical Detective - Missing Supplies",
  description: "Search for the Missing Supplies in Kiu Vongsa",
  position: [0.9335705682347442, -0.9445126594327947],
  type: ObjectiveType.DELIVER,
  faction: CrimsonShieldInternational
}


export const MedicalDetective: task = {
  name: "Medical Detective",
  description: "That stupid girl… I knew she was trouble from the moment I first met her. Look, I won't lie to you. I'm not happy about this. Those things are meant for our soldiers, for our mission. But I'm also not blind to the bigger picture. Some of these people that got left here, they're in dire need too. We can't just turn our backs on them. I'll sweep this incident under the rug, but this is the last time, got it? And you better keep your mouth shut about it. The last thing we need is the higher-ups breathing down our necks. We're in enough shit as is. ",
  objectives: [
    MedicalDetective_Objective1_LRI,
    MedicalDetective_Objective1_MMS,
    MedicalDetective_Objective1_CSI,
  ],
  vendor: Gunny,
  level: 0,
  prerequisites: LeaveNoManBehind
}