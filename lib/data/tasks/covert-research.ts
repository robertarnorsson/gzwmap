import { ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const CovertResearch_Objective1_LRI: objective = {
  name: "Covert Research - Cargo",
  description: "Retrieve the cargo from the fortified hideout in Pha Lang and report back to Lab Rat",
  position: [0.9027279143946259, -0.42496532924471975],
  type: ObjectiveType.DELIVER,
  faction: LamangRecoveryInitiative
}

const CovertResearch_Objective1_MMS: objective = {
  name: "Covert Research - Cargo",
  description: "Retrieve the cargo from the fortified hideout in Nam Thaven and report back to Lab Rat",
  position: [0.5240534847301731, -0.7203785424083998],
  type: ObjectiveType.DELIVER,
  faction: MithrasSecuritySystems
}

const CovertResearch_Objective1_CSI: objective = {
  name: "Covert Research - Cargo",
  description: "Retrieve the cargo from the fortified hideout in Kiu Vongsa and report back to Lab Rat",
  position: [0.9300319890170154, -0.9370192352283137],
  type: ObjectiveType.DELIVER,
  faction: CrimsonShieldInternational
}


export const CovertResearch: task = {
  name: "Covert Research",
  briefing: "Hey, so I don't really know how to say this, so I'll just be blunt. I need your help with something, and I beg you to keep it a secret. I hope i can trust you. You see, the container you've been tasked to retrieve holds something of immense significance, something that could reshape our understanding of this entire situation. I know that Mr. Pell wants the container for immediate assessment, but I implore you to bring it to me first. I can't reveal the specifics just yet, but trust me when I say that it's vital for me to conduct thorough research on its contents before any further actions are taken. He may not see the value in this approach, but I assure you that it is in the best interest of our mission. Don't worry, once my research is complete and I have gaines a comprehensive understanding of the container's contents, i will present my findings to Mr. Pell. It will be up to him to decide how to proceed from there. I know it's a lot to ask, but will you please help me?",
  debriefing: "Thank you! Thank you so much! I understand the trust you've placed in me, and I assure you it will not be in vain. The contents of this container hold incredible potential, and I believe it may be the key to truly understanding what's happening here. I know you must be curious about what's inside, but I must keep it a secret for now, sorry. Rest assured that once I know more, I'll share my findings with you. I'm sure that together, we'll get to the bottom of all of this!",
  note: "You will be overweight and can't sprint while carrying the cargo",
  objectives: [
    CovertResearch_Objective1_LRI,
    CovertResearch_Objective1_MMS,
    CovertResearch_Objective1_CSI,
  ],
  vendor: LabRat,
  level: 0
}