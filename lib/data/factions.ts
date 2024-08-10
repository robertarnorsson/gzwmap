import { MarkerType, faction } from "@/lib/types";

export const LamangRecoveryInitiative: faction = {
  id: "F-8Z1VNX",
  name: "Lamang Recovery Initiative",
  shorthand: "LRI",
  description: "Founded and funded by a tech billionaire, LRI publicizes itself as a strictly philanthropic exercise to search for pockets of survivors in and around Ground Zero after even the UN abandoned the island. The armed section of the organization is composed of small, highly professional security details that accompany rescue and clean-up teams to protect them from some of the other, far less altruistic, factions operating in the area.",
  position: [23438.699866242172, 22772.96892897809],
  image: "lamang_logo.webp",
  types: [MarkerType.LRI]
}

export const MithrasSecuritySystems: faction = {
  id: "F-179G4C",
  name: "Mithras Security Systems",
  shorthand: "MSS",
  description: "Mithras bills itself as a PMC run by soldiers for soldiers, and it doesn't ask too many questions about an operator's motivations or past history. The only real bar to Mithras membership is a lack of field experience or military competence. It prides itself on only accepting the best and pays accordingly. The organization itself is inspired by the Roman Legion system, where the spoils of war were shared among the troops.",
  position: [16717.271929279475, 10505.344834746915],
  image: "mithras_logo.webp",
  types: [MarkerType.MSS]
}

export const CrimsonShieldInternational: faction = {
  id: "F-R6GZHD",
  name: "Crimson Shield International",
  shorthand: "CSI",
  description: "This Private Military Company rose to infamy during the early stages of the Syrian civil war. While they boast an impressive 95% success rate, some of their methods can be seen as somewhat questionable, often resulting in collateral damage. That said, no one can deny their effectiveness and cold-blooded approach to any job that needs to be done. This gung-ho nature attracts not just ex-military personnel but basically anyone with a lust for adventure and action.",
  position: [9290.459785669755, 22451.196689571196],
  image: "crimson_logo.webp",
  types: [MarkerType.CSI]
}

export const Factions: faction[] = [
  LamangRecoveryInitiative,
  MithrasSecuritySystems,
  CrimsonShieldInternational
]