import { ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { MedsWanted } from "@/lib/data/tasks/meds-wanted";

const LostAndFound_Objective1_LRI: objective = {
  name: "Lost and Found - Kanoa Sinarath",
  description: "Find Kanoa Sinarath and proof of identity",
  position: [0.9059363177502301, -0.45895264706439687],
  type: ObjectiveType.DELIVER,
  faction: LamangRecoveryInitiative
}

const LostAndFound_Objective1_MMS: objective = {
  name: "Lost and Found - Kanoa Sinarath",
  description: "Find Kanoa Sinarath and proof of identity",
  position: [0.5438293518085245, -0.6919527856864982],
  type: ObjectiveType.DELIVER,
  faction: MithrasSecuritySystems
}

const LostAndFound_Objective1_CSI: objective = {
  name: "Lost and Found - Kanoa Sinarath",
  description: "Find Kanoa Sinarath and proof of identity",
  position: [0.8970313544357956, -0.9461584087281374],
  type: ObjectiveType.DELIVER,
  faction: CrimsonShieldInternational
}


export const LostAndFound: task = {
  name: "Lost and Found",
  briefing: "",
  debriefing: "I see... that is very unfortunate, but rest assured that your efforts were not in vain. By finding Kanoa, we've unveiled the truth, and sometimes that's all one can hope for. Knowing what happened is better than living in uncertainty. At least, I think so. Hopefully, his family will feel the same way.",
  objectives: [
    LostAndFound_Objective1_LRI,
    LostAndFound_Objective1_MMS,
    LostAndFound_Objective1_CSI,
  ],
  vendor: LabRat,
  level: 0,
  prerequisites: MedsWanted
}