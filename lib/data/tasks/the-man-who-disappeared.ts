import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";

const TheManWhoDisappeared_Objective1_LRI: objective = {
  id: "",
  name: "Passport",
  description: "Collect the passport at the command tent in the Lamang Recovery Initiative's Base Camp",
  position: [23443.70496157549, 22667.825856197487],
  type: ObjectiveType.COLLECT,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire,
  note: "If you die and loose the passport you will have to pick it up from the tent."
}

const TheManWhoDisappeared_Objective1_MSS: objective = {
  id: "",
  name: "Passport",
  description: "Collect the passport at the command tent in the Mithras Security Systems's Base Camp",
  position: [16732.37816122813, 10347.757074372661],
  type: ObjectiveType.COLLECT,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire,
  note: "If you die and loose the passport you will have to pick it up from the tent."
}

const TheManWhoDisappeared_Objective1_CSI: objective = {
  id: "",
  name: "Passport",
  description: "Collect the passport at the command tent in the Crimson Shield International's Base Camp",
  position: [9210.434758612446, 22330.913960359343],
  type: ObjectiveType.COLLECT,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire,
  note: "If you die and loose the passport you will have to pick it up from the tent."
}

const TheManWhoDisappeared_Objective2: objective = {
  id: "",
  name: "Drop Off",
  description: "Collect the passport at the command tent in the Crimson Shield International's Base Camp",
  position: [16500.830712148832, 21683.578161877747],
  type: ObjectiveType.STASH,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire
}

export const TheManWhoDisappeared: task = {
    id: "",
    name: "The Man Who Disappeared",
    briefing: "You'll never guess what one of the rich guys wants from us, man. And no, it's not to retrieve some fancy stuff, quite the opposite. My client wants us to plant his passport at the resort, so it looks like he disappeared or was killed. Ha! It seems to me like someone wants to start a new life. We will, of course, help this man in need, as he is a pleasant and, above all, very generous fellow. So find a file cabinet at the reception of Midnight Sapphire hotel and drop the passport there. That should be enough for the authorities to assume he is gone.",
    debriefing: "Brilliant! I'll inform the client he can start celebrating. Although the more I think about it, the more it seems that someone might have wanted that passport planted there to tarnish somebody else's reputation. Letting anybody know that you visited a place like that would deal a massive blow to your credibility. Even more so after all that shit that was going on there gets unearthed. Oh well, whatever the case may be, we make a great team, buddy. I see our prosperous future as clear as day!",
    objectives: [
      TheManWhoDisappeared_Objective1_LRI,
      TheManWhoDisappeared_Objective1_MSS,
      TheManWhoDisappeared_Objective1_CSI,
      TheManWhoDisappeared_Objective2
    ],
    vendor: Handshake,
    level: 0,
}