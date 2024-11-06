import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import { FortNarith, MidnightSapphire } from "~/data/locations";
import { FakeIntel } from "../items/tasks";

const TheArtOfDeception_Objective1: objective = {
    id: "O-LWCO8C",
    name: "Documents",
    description: "Retrieve an official document from Fort Narith HQ and bring it back to Base Camp",
    position: [11036.605978731173, 14479.378782133064],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

const TheArtOfDeception_Objective2: objective = {
  id: "O-8UOP47",
  name: "Stash Location",
  description: "Plant the false document in the Midnight Sapphire Hotel office",
  position: [16492.87840902061, 21684.57968638158],
  type: ObjectiveType.STASH,
  types: [MarkerType.TASK, MarkerType.STASH, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire,
  items: [ FakeIntel ]
}

export const TheArtOfDeception: task = {
    id: "T-9N7HYX",
    name: "The Art Of Deception",
    briefing: "You know what I really fucking despise? Intel leaking. More specifically, OUR intel leaking. Now, this may sound unbelievable, but the LAF somehow knows more about us than they should. Our operations in the resort are being disrupted, and it fucking pisses me off! Because of their unexpected knowledge, we need to do something to obfuscate our activities. I want you to go to Fort Narith and bring us some official documents that we can use to falsify their report and lead them astray. We won't just lay and pray; we'll beat them at their own intelligence game. Go to the military base, bring back the document, and then plant the false report in their office. We're going to confuse them so badly that they won't even recognize their reflection in the mirror.",
    debriefing: "Excellent job, champ! It seems that our plan worked brilliantly. The stupid assholes really fell for it, hook, line and sinker. We can resume our operations at the resort without fear of being surprised by the soldiers.",
    objectives: [
        TheArtOfDeception_Objective1,
        TheArtOfDeception_Objective2
    ],
    vendor: Handshake,
    level: 0,
    items: [ FakeIntel ]
}