import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { LittleBirdDown } from "@/lib/data/tasks/little-bird-down";
import { KiuVongsa, NamThaven, PhaLang } from "../locations";

const RestoringOrder_Objective1_LRI: objective = {
  id: "",
  name: "Hostiles",
  description: "Neutralize 10 hostiles in Pha Lang",
  position: [22516.014082528287, 20788.25932499951],
  type: ObjectiveType.ELIMINATION,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.PHALANG],
  location: PhaLang
}

const RestoringOrder_Objective1_MMS: objective = {
  id: "",
  name: "Hostiles",
  description: "Neutralize 10 hostiles in Nam Thaven",
  position: [16234.009246100642, 12382.151635563228],
  type: ObjectiveType.ELIMINATION,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const RestoringOrder_Objective1_CSI: objective = {
  id: "",
  name: "Hostiles",
  description: "Neutralize 10 hostiles in Kiu Vongsa",
  position: [10899.592648772534, 21090.768487551803],
  type: ObjectiveType.ELIMINATION,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
  location: KiuVongsa
}


export const RestoringOrder: task = {
  id: "",
  name: "Restoring Order",
  briefing: "We've got a bit of a situation on our hands. It's time to put that local criminanl trash in their place. They think they can tango with us? Well, we're about to show them exactly what happens when they step out of line. Our objective is crystal clear: we're going to teach these bastards a lesson they won't soon forget. We're not here to make friends with lowlife scum. We need to remind them who's really in charge. It's time to bring the heat and eliminate them with surgical precision. When we kicked off this op, I recall one guy running solo like a madman all throughout the town, opening fire at anything that moved. He went by the name of Klean, and he sure as fuck cleaned the entire town up. Maybe you could pick up some pointers from him to ensure they regret ever crossing our path. Once you're finished mopping the floor with them, report back to me for debriefing.",
  debriefing: "Excellent! I knew you wouldn't have any problems handling those lowlifes. They'll think twice before crossing our path again. A little display of force goes a long way in maintaining control.",
  objectives: [
    RestoringOrder_Objective1_LRI,
    RestoringOrder_Objective1_MMS,
    RestoringOrder_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0,
  prerequisites: LittleBirdDown
}