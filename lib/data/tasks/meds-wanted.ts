import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { LabRat } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";
import { KiuVongsa, NamThaven, PhaLang } from "../locations";

const MedsWanted_Objective1_LRI: objective = {
  id: "O-5F3BTA",
  name: "Supplies",
  description: "Find the UNLRA Medical Supplies at the town's Water Tower",
  position: [22088.811041833964, 21076.77434785609],
  type: ObjectiveType.COLLECT,
  faction: LamangRecoveryInitiative,
  image: "/objectives/unlra-medical-supplies.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.PHALANG],
  location: PhaLang
}

const MedsWanted_Objective1_MMS: objective = {
  id: "O-N4HUF7",
  name: "Supplies",
  description: "Find the UNLRA Medical Supplies at the town's Water Tower",
  position: [16752.58250720719, 12435.176671501109],
  type: ObjectiveType.COLLECT,
  faction: MithrasSecuritySystems,
  image: "/objectives/unlra-medical-supplies.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.NAMTHAVEN],
  location: NamThaven
}

const MedsWanted_Objective1_CSI: objective = {
  id: "O-79QYMZ",
  name: "Supplies",
  description: "Find the UNLRA Medical Supplies at the town's Water Tower",
  position: [10539.690091174749, 20716.974915877196],
  type: ObjectiveType.COLLECT,
  faction: CrimsonShieldInternational,
  image: "/objectives/unlra-medical-supplies.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.KIUVONGSA],
  location: KiuVongsa
}


export const MedsWanted: task = {
  id: "T-FIOARM",
  name: "Meds Wanted",
  briefing: "Hi, you must be new here. My name is Jie, but you can call me Lab Rat. Everybody else here already does, but I don't mind. Actually, I think it's rather cute. Makes me feel like a real soldier, having a proper callsign like that. A-ten-hut, or whatever you guys say, right? Anyway, since you're here, I have a job for you. We're facing a critical shortage of medical supplies after the recent attack. Our people are in desperate need, and it's up to us to find a solution. The UNLRA has left quite a lot of their supplies here after their hasty evacuation, and I've gotten reports of one of their trucks parkes near the town's water tower. I think they used the office building nearby as an improvised distro center, so I'd look around there if I were you. Just keep in mind that areas outside our base might be hazardous, so please be careful! There's no room for mistakes when it comes to securing the well-being of our team, and I need you on your feet, not lying on a stretcher with a bullet hole in your gut. Once you've gathered the supplies, bring them back to the base camp for immediate distribution. Good luck out there! Dismissed! Am I saying that right?",
  debriefing: "I knew I could count on you! This will be a tremendous help to everyone. Each vial, each bandage, they represent a chance for healing and recovery. It's a small victory, but one that matters so much to our people.",
  note: "You can find inside the medical tent close to the water tower.",
  objectives: [
    MedsWanted_Objective1_LRI,
    MedsWanted_Objective1_MMS,
    MedsWanted_Objective1_CSI,
  ],
  vendor: LabRat,
  level: 0
}