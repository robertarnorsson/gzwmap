import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Artisan } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { KiuVongsa, NamThaven, PhaLang } from "../locations";

const ToolsOfTheTrade_Objective1_LRI: objective = {
  id: "N/A",
  name: "Tools",
  description: "Retrieve the tools from Pha Lang and hand them over to Artisan",
  position: [22474.10647014295, 20925.304519225738],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.PHALANG],
  location: PhaLang
}

const ToolsOfTheTrade_Objective1_MMS: objective = {
  id: "N/A",
  name: "Tools",
  description: "Retrieve the tools from Nam Thaven and hand them over to Artisan",
  position: [16359.021396627895, 12306.987713170607],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const ToolsOfTheTrade_Objective1_CSI: objective = {
  id: "N/A",
  name: "Tools",
  description: "Retrieve the tools from Kiu Vongsa and hand them over to Artisan",
  position: [10756.287264628463, 21073.39498708641],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.KIUVONGSA],
  location: KiuVongsa
}


export const ToolsOfTheTrade: task = {
  id: "N/A",
  name: "Tools of the Trade",
  briefing: "Merc, let's get this straight. i don't give a fuck how you see me, but remember this - I don't like you. That will never change; your kind disgusts me, but we can still work on professional basis. You do something for me, and I'll reward you. Plain and simple. Do we understand each other? Good. I need you to go back to the nearby town and bring me the tools that are stored in a small house next to the construction site. And if you ask why I need the tools, when I can get new ones here at the base? Well, my answer is: What the fuck do you care? Shut up, do your job, and you will get what you deserve. Oh, and call me Artisan. I don't want any of you butchers getting my real name misspelled.",
  debriefing: "I'm glad you're not dumber than you look, hireling. I was afraid you might lose the tools, and that would be bad. And I mean bad for your camp, because I would have left. Well, whatever. Give me the tools and get lost.",
  objectives: [
    ToolsOfTheTrade_Objective1_LRI,
    ToolsOfTheTrade_Objective1_MMS,
    ToolsOfTheTrade_Objective1_CSI,
  ],
  vendor: Artisan,
  level: 0
}