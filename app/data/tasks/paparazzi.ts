import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import { MidnightSapphire } from "~/data/locations";

const Paparazzi_Objective1: objective = {
    id: "O-5H3XO0",
    name: "Intel",
    description: "Search the Midnight Sapphire Hotel and collect the intel uncovering what happened to Richard S. Parker",
    position: [16515.082404176963, 21722.766331293806],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire,
    note: "You will need the MS Supply key"
}

const Paparazzi_Objective2: objective = {
    id: "O-8B6Y19",
    name: "Interrogation Room",
    description: "Search the interrogation room near the Lakeside Villa",
    position: [16442.026428151854, 22278.155876924913],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const Paparazzi: task = {
    id: "T-AOVNCR",
    name: "Paparazzi",
    briefing: "I've been contacted by yet another client to find a missing relative. This time, we are looking for Richard S. Parker. According to his brother, this guy was a professional journalist and seasoned war correspondent. He came here to dig up dirt. You know these people, right? They can't help sticking their noses in other people's business. He was staying at the Midnight Sapphire, and apparently, he was onto something. That was the last message his brother got, then silence. Man, I got to be honest - I hate reporters and all the media hyenas. I have a history with these clowns; I wouldn't shed a tear if there were one less of them in the world. But the client had some excellent arguments to persuade me to look for Mr. Dick... a pile of money! Go to the hotel and search for him. There should be some clues somewhere that will point us in the right direction.",
    debriefing: "Ha! So the scribbler reaped what he sowed. Shouldn't have stirred up a hornet's nest, right? The Lamangese are not fucking around, they know how to deal with problems. I will inform the client that his brother was taken to a shack and beaten to death. Lucky for us, I made sure the reward is the same whether we bring Dick back dead or alive. Good job, buddy.",
    objectives: [
      Paparazzi_Objective1,
      Paparazzi_Objective2
    ],
    vendor: Handshake,
    level: 0,
}