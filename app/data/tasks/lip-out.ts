import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import { MidnightSapphire } from "~/data/locations";

const LipOut_Objective1: objective = {
    id: "O-SECA1T",
    name: "Guest List",
    description: "Find the guest list to uncover what happened to Donald J. Dortmunder and report back to Handshake",
    position: [16184.858360462878, 21707.596471671495],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

const LipOut_Objective2: objective = {
  id: "O-7IRHML",
  name: "Smartphone",
  description: "Find the guest list to uncover what happened to Donald J. Dortmunder and report back to Handshake",
  position: [17085.284561239205, 21606.00987046684],
  type: ObjectiveType.COLLECT,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire
}

export const LipOut: task = {
    id: "T-OMQDJB",
    name: "Lip Out",
    briefing: "Hey, champ, wanna help find a missing person? A gentleman from the mainland asked for our help. He's looking for a man named Donald J. Dortmunder, who apparently stayed at the Midnight Sapphire Resort. Our client knows little about Mr. Dortmunder, but he does know that he is an avid golfer. Why is the gentleman looking for this man? I didn't ask, and I don't really need to know. Too many questions are bad for business. The most important thing is that we will get a really nice reward if we find him. Go to the resort and try to find out anything about the missing man.",
    debriefing: "So Mr. Dortmunder had a considerable debt, and someone came to his villa to collect it? Well, well, well. And according to some of the text messages on this phone, he was a busy con artist, running up debts at every turn. At least now we have an idea why our client was probably looking for him without needing to ask directly. Anyway, I'll inform him of our findings and collect our reward.",
    objectives: [
      LipOut_Objective1,
      LipOut_Objective2,
    ],
    vendor: Handshake,
    level: 0,
}