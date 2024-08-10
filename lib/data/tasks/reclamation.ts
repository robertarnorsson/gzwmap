import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { KiuVongsa, NamThaven, PhaLang } from "@/lib/data/locations";

const Reclamation_Objective1_LRI: objective = {
  id: "O-RQ4L65",
  name: "Cargo",
  description: "Retrieve the cargo from the fortified hideout in Pha Lang and hand it to Handshake",
  position: [22862.641139271276, 20844.334008332935],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.PHALANG],
  location: PhaLang
}

const Reclamation_Objective1_MMS: objective = {
  id: "O-PS9EIM",
  name: "Cargo",
  description: "Retrieve the cargo from the fortified hideout in Nam Thaven and hand it to Handshake",
  position: [16007.356253306134, 12116.577628373137],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const Reclamation_Objective1_CSI: objective = {
  id: "O-VWZ0TN",
  name: "Cargo",
  description: "Retrieve the cargo from the fortified hideout in Kiu Vongsa and hand it to Handshake",
  position: [10908.974181058677, 21443.049637976947],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.KIUVONGSA],
  location: KiuVongsa
  
}


export const Reclamation: task = {
  id: "T-DVLO2Q",
  name: "Reclamation",
  briefing: "After all we've seen, it is now more than clear that the cargo from the crashed helicopter has been taken by the rats in the town. I don't know how, and i don't know why, but I want it back, okay? Your mission is to locate their main base of operations and recover the stolen container. It's highly probable that they would stow the thing in the most fortified place around, so keep your eyes open for a building like that, especially if it has any familiar markings on it. Once you know where it is, find a way in, secure the area, and recover the container at all costs. I'm sure you'll do a great job. Don't let me down now.",
  debriefing: "Thank fuck! I was a bit worried there for a while, but now everything is back on track, thanks to you. I see that the seal on the container is still intact and has not been tampered with, so we should be golden. Great fucking job, man. You sure deserve that bonus! Now that we've taken care of this little problem, we can focus again on reclaiming our territory and figuring out what exactly we are dealing with here. Take some rest, and I'll contact you soon with your next assignment. You know what? I think this is the beginning of a beautiful friendship…",
  note: "You will be overweight and can't sprint while carrying the cargo.",
  objectives: [
    Reclamation_Objective1_LRI,
    Reclamation_Objective1_MMS,
    Reclamation_Objective1_CSI,
  ],
  vendor: Handshake,
  level: 0
}