import { ObjectiveType, objective, task } from "@/lib/types";
import { Artisan } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const ToolsOfTheTrade_Objective1_LRI: objective = {
  name: "Tools of the Trade - Tools",
  description: "Retrieve the tools from Pha Lang and hand them over to Artisan",
  position: [0.9072131305302487, -0.4420728212764469],
  type: ObjectiveType.DELIVER,
  faction: LamangRecoveryInitiative
}

const ToolsOfTheTrade_Objective1_MMS: objective = {
  name: "Tools of the Trade - Tools",
  description: "Retrieve the tools from Nam Thaven and hand them over to Artisan",
  position: [0.5320096774049402, -0.7044744290937466],
  type: ObjectiveType.DELIVER,
  faction: MithrasSecuritySystems
}

const ToolsOfTheTrade_Objective1_CSI: objective = {
  name: "Tools of the Trade - Tools",
  description: "Retrieve the tools from Kiu Vongsa and hand them over to Artisan",
  position: [0.9135971875686003, -0.9444996975235489],
  type: ObjectiveType.DELIVER,
  faction: CrimsonShieldInternational
}


export const ToolsOfTheTrade: task = {
  name: "Tools of the Trade",
  description: "I'm glad you're not dumber than you look, hireling. I was afraid you might lose the tools, and that would be bad. And I mean bad for your camp, because I would have left. Well, whatever. Give me the tools and get lost.",
  objectives: [
    ToolsOfTheTrade_Objective1_LRI,
    ToolsOfTheTrade_Objective1_MMS,
    ToolsOfTheTrade_Objective1_CSI,
  ],
  vendor: Artisan,
  level: 0
}