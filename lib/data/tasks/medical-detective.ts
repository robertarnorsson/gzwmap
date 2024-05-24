import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { LeaveNoManBehind } from "@/lib/data/tasks/leave-no-man-behind";
import { KiuVongsa, NamThaven, PhaLang } from "../locations";

const MedicalDetective_Objective1_LRI: objective = {
  id: "",
  name: "Missing Supplies",
  description: "Search for the Missing Supplies in Pha Lang",
  position: [0.910734961284329, -0.42277983496990645],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.GUNNY, MarkerType.PHALANG],
  location: PhaLang
}

const MedicalDetective_Objective1_MMS: objective = {
  id: "",
  name: "Missing Supplies",
  description: "Search for the Missing Supplies in Nam Thaven",
  position: [0.5166650742814851, -0.7170144347480178],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.GUNNY, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const MedicalDetective_Objective1_CSI: objective = {
  id: "",
  name: "Missing Supplies",
  description: "Search for the Missing Supplies in Kiu Vongsa",
  position: [0.9335705682347442, -0.9445126594327947],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.GUNNY, MarkerType.KIUVONGSA],
  location: KiuVongsa
}


export const MedicalDetective: task = {
  id: "",
  name: "Medical Detective",
  briefing: "We've got a problem. Some lowlife has stolen our damn medical supplies right from under our noses. It's a betrayal, plain and simple, and we need to get to the bottom of it. That's where you come in. I want you to investigate. Look for any suspicious activity or leads that might help us uncover the truth. If I were you, I'd focus on any medical facilities in the nearby town. If somebody*s stealing the supplies and selling them to the locals, chances are the culprits will have left a trail there. The place will probably be locked, so try searching for the key in the pockets of the local welcome commitee. At least one of them is bound to have it.",
  debriefing: "That stupid girl… I knew she was trouble from the moment I first met her. Look, I won't lie to you. I'm not happy about this. Those things are meant for our soldiers, for our mission. But I'm also not blind to the bigger picture. Some of these people that got left here, they're in dire need too. We can't just turn our backs on them. I'll sweep this incident under the rug, but this is the last time, got it? And you better keep your mouth shut about it. The last thing we need is the higher-ups breathing down our necks. We're in enough shit as is. ",
  note: "The following keys are required: KV/NT/PL Doc",
  objectives: [
    MedicalDetective_Objective1_LRI,
    MedicalDetective_Objective1_MMS,
    MedicalDetective_Objective1_CSI,
  ],
  vendor: Gunny,
  level: 0,
  prerequisites: LeaveNoManBehind
}