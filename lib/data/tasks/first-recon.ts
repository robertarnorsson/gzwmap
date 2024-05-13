import { ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import {
  CrimsonShieldInternational,
  LamangRecoveryInitiative,
  MithrasSecuritySystems
} from "@/lib/data/factions";

const FirstRecon_Objective1_LRI: objective = {
  name: "Gas Station",
  description: "Check the area around the gas station",
  position: [0.8850531906202619, -0.46048164367675787],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const FirstRecon_Objective2_LRI: objective = {
  name: "Convenience Store",
  description: "Check the convenience store",
  position: [0.9103887911042275, -0.450171234804766],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}

const FirstRecon_Objective3_LRI: objective = {
  name: "Demolished Building",
  description: "Check the demolished building",
  position: [0.914428628405645, -0.4313850402832032],
  type: ObjectiveType.DISCOVER,
  faction: LamangRecoveryInitiative
}


const FirstRecon_Objective1_MMS: objective = {
  name: "Gas Station",
  description: "Check the area around the gas station",
  position: [0.5611318903643601, -0.704326629638672],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const FirstRecon_Objective2_MMS: objective = {
  name: "Convenience Store",
  description: "Check the convenience store",
  position: [0.5348353745577434, -0.6961697419754388],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}

const FirstRecon_Objective3_MMS: objective = {
  name: "Demolished Building",
  description: "Check the demolished building",
  position: [0.5197869799764396, -0.7078027725219728],
  type: ObjectiveType.DISCOVER,
  faction: MithrasSecuritySystems
}


const FirstRecon_Objective1_CSI: objective = {
  name: "Gas Station",
  description: "Check the area around the gas station",
  position: [0.8911442936782111, -0.9258985519409181],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}

const FirstRecon_Objective2_CSI: objective = {
  name: "Convenience Store",
  description: "Check the convenience store",
  position: [0.9061982281012511, -0.9488904036533642],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}

const FirstRecon_Objective3_CSI: objective = {
  name: "Demolished Building",
  description: "Check the demolished building",
  position: [0.9257467472046368, -0.9496307373046876],
  type: ObjectiveType.DISCOVER,
  faction: CrimsonShieldInternational
}


export const FirstRecon: task = {
  name: "First Recon",
  briefing: "Hey there, man! Welcome to Lamang! Truly a paradise on earth, eh? Name's Lewis Pell, but we can ditch the formalities, right? Just call me Hanshake, I prefer it anyway. You might have heard that we recently had a little... setback regarding our operations here. Well, I can assure you it's been vastly exaggerated! Everyone's doing their best, and we're basically back on track with only a minor delay, I guess it will be even better since you're here now, right? So, here's the deal. I want you to go past a few spots around the nearby town and keep your peepers wide open on the way. Look for anything out of the ordinary, any signs of trouble, or even potential opportunities. We need to know what's going on in this joint. Your checkpoints will be the gas station in the southern part of the twon, the convinience store in the eastern part, and the area around a demolished building in the southern part. Don't worry, I'm gonna give you map coordinates, so you can't miss it. Once you're done, report back to me pronto, okay? Good luck, champ!",
  debriefing: "Merc, let's get this straight. I don't give a fuck how you see me, but remember this - I don't like you. That will never change; your kind disgusts me, but we can still work on a professional basis. You do something for me, and I'll reward you. Plain ans simple. Do we understand each other? Good. I need you to go back to the nearby town and bring me the tools that are stored in a small house next to the construuction site. And if you ask why i need the tools, when i can get new ones here at the base? Well, my answer is: What the fuck do you care? Shut up, do your job, and you will get what you deserve. Oh, and call me Artisan. I don't want any of you butchers getting my real name misspelled.",
  objectives: [
    FirstRecon_Objective1_LRI,
    FirstRecon_Objective2_LRI,
    FirstRecon_Objective3_LRI,
    FirstRecon_Objective1_MMS,
    FirstRecon_Objective2_MMS,
    FirstRecon_Objective3_MMS,
    FirstRecon_Objective1_CSI,
    FirstRecon_Objective2_CSI,
    FirstRecon_Objective3_CSI,
  ],
  vendor: Handshake,
  level: 0
}