import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";
import { MSLusia } from "@/lib/data/keys/midnight-sapphire";

const SweetLittleLies_Objective1: objective = {
    id: "O-PLN1UP",
    name: "Intel",
    description: "Retrieve the intel and report back to Handshake",
    position: [16639.810571368576, 22130.261698085622],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire,
    key: MSLusia
}

export const SweetLittleLies: task = {
    id: "T-F6ZK04",
    name: "Sweet Little Lies",
    briefing: "Hey pal, do you know the game Where's Waldo? We're playing something similar on this shitty island; only the game is: Where's that motherfucker Narith? It's frustrating that the piece of shit successfully avoids being found. And we really tried, buddy. No lies. But fortune has smiled upon us. We got a lead - the numero duo of this country, Sayavong's right hand Jan Park. This asshole practically lived in the resort and enjoyed the luxuries of this place on a daily basis. What a conceited prick! Go to the resort, find that bastard's big-ass villa, and bring me any information that might lead us to the head honcho if this shithole.",
    debriefing: "Well, look at that. Mr. Park lied to the president. That sneaky bastard falsified the army's reports about Ground Zero, and kept the main man in the dark about what is going on in there. This is only a small piece of a bigger puzzle, but there are reports of casualties, various unexplainable phenomena, and some sort of contamination, while all that Narith gets is distorted information about ongoing research and successful control of GZ. Too bad we didn't get any information about where that bastard is hiding, but at least we now know he's still alive. Don't worry, we'll find that prick eventually, I'm sure of it. You did well, my man.",
    objectives: [
      SweetLittleLies_Objective1
    ],
    vendor: Handshake,
    level: 0,
    key: [
      MSLusia
    ]
}