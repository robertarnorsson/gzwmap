import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Gunny } from "~/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "~/data/factions";
import { KiuVongsa, NamThaven, PhaLang } from "~/data/locations";
import { GPSTracker } from "~/data/items/tools";

const LastFarewellPartOne_Objective1_LRI: objective = {
  id: "O-12TF5R",
  name: "Body",
  description: "Locate and mark the location of the body",
  position: [22434.271907727114, 19716.16022712469],
  type: ObjectiveType.MARK,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.PHALANG],
  location: PhaLang,
  items: [GPSTracker]
}

const LastFarewellPartOne_Objective1_MMS: objective = {
  id: "O-8K09RM",
  name: "Body",
  description: "Locate and mark the location of the body",
  position: [15609.016458728505, 13261.125004666106],
  type: ObjectiveType.MARK,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.NAMTHAVEN],
  location: NamThaven,
  items: [GPSTracker]
}

const LastFarewellPartOne_Objective1_CSI: objective = {
  id: "O-B3B47A",
  name: "Body",
  description: "Locate and mark the location of the body",
  position: [11944.519831278469, 20824.900989189373],
  type: ObjectiveType.MARK,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.KIUVONGSA],
  location: KiuVongsa,
  items: [GPSTracker]
}


export const LastFarewellPartOne: task = {
  id: "T-2C93QQ",
  name: "Last Farewell",
  briefing: "I've got another assignment for you: Steven Clarke. He got separated from his squad during the retreat while seeking cover in a farmhouse southeast of the town's gas station. The last thing they heard on the comms was him screaming in terror and then suddendly dead silence. I need you to investigate and mark the body like before. Be extra careful on this one. I remember the guy, and he was tough as nails. No idea what happened to him to make him scream like that, so make sure the same thing doesn't happen to you. I'll provide you with a tracker right away.",
  objectives: [
    LastFarewellPartOne_Objective1_LRI,
    LastFarewellPartOne_Objective1_MMS,
    LastFarewellPartOne_Objective1_CSI,
  ],
  vendor: Gunny,
  items: [GPSTracker],
  level: 0,
  cancelTaskId: "T-F226H9"
}