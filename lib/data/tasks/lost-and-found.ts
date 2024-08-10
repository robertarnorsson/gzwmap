import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { MedsWanted } from "@/lib/data/tasks/meds-wanted";
import { KiuVongsa, NamThaven, PhaLang } from "@/lib/data/locations";

const LostAndFound_Objective1_LRI: objective = {
  id: "O-DUPFE0",
  name: "Kanoa Sinarath",
  description: "Find Kanoa Sinarath and proof of identity",
  position: [22082.442332651884, 20900.351884405703],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.PHALANG],
  location: PhaLang
}

const LostAndFound_Objective1_MMS: objective = {
  id: "O-E8JMVU",
  name: "Kanoa Sinarath",
  description: "Find Kanoa Sinarath and proof of identity",
  position: [16642.13272505843, 12574.999145389951],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const LostAndFound_Objective1_CSI: objective = {
  id: "O-Q46TNQ",
  name: "Kanoa Sinarath",
  description: "Find Kanoa Sinarath and proof of identity",
  position: [10711.817965800094, 20682.161792965762],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.KIUVONGSA],
  location: KiuVongsa
}


export const LostAndFound: task = {
  id: "T-ZHX0BU",
  name: "Lost and Found",
  briefing: "We have a pressing matter at hand. Several individuals went missing amid the chaotic evacuation, and their families are desperate for answers. It's our duty to help bring them some semblance of closure. I've compiled a list of names and last know locations. Your task is to search for any leads, gather information, and track down these missing individuals. We'll start with the first one and take it from there. Kanoa Siharath. He is a clerk in the local construction shop and was last seen during the final stages of the evacuation. Remember, we're not just searching for answers. We're offering hope to those left behind, waiting for news. Our efforts can bring them solace in a time of uncertainty. Let's not disappoint them.",
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