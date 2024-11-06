import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "~/data/factions";
import { KiuVongsa, NamThaven, PhaLang } from "~/data/locations";

const LeftBehindPartOne_Objective1_LRI: objective = {
  id: "O-IY6OX3",
  name: "Body",
  description: "Locate the missing body to confirm its identity",
  position: [22435.23714176152, 19727.978407172533],
  type: ObjectiveType.LOCATE,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.PHALANG],
  location: PhaLang
}

const LeftBehindPartOne_Objective1_MMS: objective = {
  id: "O-HV1ICP",
  name: "Body",
  description: "Locate the missing body to confirm its identity",
  position: [15612.207592857932, 13247.075320901084],
  type: ObjectiveType.LOCATE,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const LeftBehindPartOne_Objective1_CSI: objective = {
  id: "O-ZQWU5Z",
  name: "Body",
  description: "Locate the missing body to confirm its identity",
  position: [11933.52890014618, 20829.122568581934],
  type: ObjectiveType.LOCATE,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
  location: KiuVongsa
}


export const LeftBehindPartOne: task = {
  id: "T-F226H9",
  name: "Left Behind",
  briefing: "Listen, we've got ourselves a delicate situation on our hands, and I'm counting on your discretion to handle it smoothly. You know how it goes - sometimes we face losses in the field. It's a tough reality, but we need to make sure we handle it the right way to protect our reputation and keep things running smoothly. Now, I know what Sergeant Jackson tasked you to do, and while I agree with him, we need to take a step back and consider our entire situation here. I f we release info about every casualty, this could quickly become a PR nightmare, and we can kiss our bonuses goodby, got it? So, instead of marking the body for retrieval, you're just going to confirm it's really our guy, and that's it, okay? We dont want this information to get to the public or even spread in our ranks. It's all about maintaining our image and keeping morale up. I'm sure you understand, right?",
  debriefing: "What the fuck are you talking about!? If what you're saying about the body is true… This is EXACTLY why we don't mark them, see? Can you imagine the effect this would have on morale? Or if somebody here leaked this shit to the media? They would have a fucking field day with it, and our funding would go down the drain! You're doing great work, man. Just keep it to yourself, and I assure you that you and I will come out of this on top, okay?",
  objectives: [
    LeftBehindPartOne_Objective1_LRI,
    LeftBehindPartOne_Objective1_MMS,
    LeftBehindPartOne_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0,
  cancelTaskId: "T-2C93QQ"
}