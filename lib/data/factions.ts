import { faction } from "@/lib/types";

export const LamangRecoveryInitiative: faction = {
  name: "Lamang Recovery Initiative",
  shorthand: "LRI",
  description: "Founded and funded by a tech billionaire, LRI publicizes itself as a strictly philanthropic exercise to search for pockets of survivors in and around Ground Zero after even the UN abandoned the island. The armed section of the organization is composed of small, highly professional security details that accompany rescue and clean-up teams to protect them from some of the other, far less altruistic, factions operating in the area.",
  position: [0.9855766417824277, -0.40044307708740234]
}

export const MithrasSecuritySystems: faction = {
  name: "Mithras Security Systems",
  shorthand: "MSS",
  description: "Mithras bills itself as a PMC run by soldiers for soldiers, and it doesn't ask too many questions about an operator's motivations or past history. The only real bar to Mithras membership is a lack of field experience or military competence. It prides itself on only accepting the best and pays accordingly. The organization itself is inspired by the Roman Legion system, where the spoils of war were shared among the troops.",
  position: [0.45446406328786265, -0.6891775131225587]
}

export const CrimsonShieldInternational: faction = {
  name: "Crimson Shield International",
  shorthand: "CSI",
  description: "This Private Military Company rose to infamy during the early stages of the Syrian civil war. While they boast an impressive 95% success rate, some of their methods can be seen as somewhat questionable, often resulting in collateral damage. That said, no one can deny their effectiveness and cold-blooded approach to any job that needs to be done. This gung-ho nature attracts not just ex-military personnel but basically anyone with a lust for adventure and action.",
  position: [0.9759434526158224, -1.00825309753418]
}

export const Factions: faction[] = [
  LamangRecoveryInitiative,
  MithrasSecuritySystems,
  CrimsonShieldInternational
]