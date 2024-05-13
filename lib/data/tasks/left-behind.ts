import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const LeftBehind_Objective1_LRI: objective = {
  name: "Body",
  description: "Locate the missing body to confirm its identity",
  position: [0.8544378292498375, -0.44340629498993656],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const LeftBehind_Objective1_MMS: objective = {
  name: "Body",
  description: "Locate the missing body to confirm its identity",
  position: [0.5731656157592651, -0.7360875132283897],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const LeftBehind_Objective1_CSI: objective = {
  name: "Body",
  description: "Locate the missing body to confirm its identity",
  position: [0.9032517355468691, -0.8930146026828379],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}


export const LeftBehind: task = {
  name: "Left Behind",
  briefing: "Listen, we've got ourselves a delicate situation on our hands, and I'm counting on your discretion to handle it smoothly. You know how it goes - sometimes we face losses in the field. It's a tough reality, but we need to make sure we handle it the right way to protect our reputation and keep things running smoothly. Now, I know what Sergeant Jackson tasked you to do, and while I agree with him, we need to take a step back and consider our entire situation here. I f we release info about every casualty, this could quickly become a PR nightmare, and we can kiss our bonuses goodby, got it? So, instead of marking the body for retrieval, you're just going to confirm it's really our guy, and that's it, okay? We dont want this information to get to the public or even spread in our ranks. It's all about maintaining our image and keeping morale up. I'm sure you understand, right?",
  debriefing: "What the fuck are you talking about!? If what you're saying about the body is true… This is EXACTLY why we don't mark them, see? Can you imagine the effect this would have on morale? Or if somebody here leaked this shit to the media? They would have a fucking field day with it, and our funding would go down the drain! You're doing great work, man. Just keep it to yourself, and I assure you that you and I will come out of this on top, okay?",
  objectives: [
    LeftBehind_Objective1_LRI,
    LeftBehind_Objective1_MMS,
    LeftBehind_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}