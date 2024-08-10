import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Banshee } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";
import { AnnaJana } from "@/lib/data/keys/midnight-sapphire";

const WhatsInTheBox_Objective1: objective = {
    id: "O-DO2PF9",
    name: "Laptop with data",
    description: "Download data from the laptop in villa Anna Jana in Midnight Sapphire and report back to Banshee",
    position: [16617.526967795664, 21303.415544910604],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire,
    key: AnnaJana
}

export const WhatsInTheBox: task = {
    id: "T-00REMS",
    name: "What's In The Box",
    briefing: "I'm glad to see you. Once again, I need your assistance. According to my intel, there is a villa somewhere in the Midnight Sapphire resort that has been used for some shady army deals. I'm on the trail of a particular military official who was a central figure in these affairs, and I need more proof of his actions. You wouldn't believe what he's gotten away with. And you have to keep in mind that I only hit the tip of the iceberg, just a few of his activities. Truly a man in his place. Go to Villa Anna Jana and scour the place for evidence. As I said, the more info we get on him, the faster we can put him behind bars.",
    debriefing: `So you identified his "store" and found out about his gradual sale of military assets. Good. That is consistent with my other findings. Your evidence is helpful. He's avoiding me like the plague, but I'm sure he can sense I'm close. I must say, the level of corruption in this country is sky-high. It's like a mold that spreads and infects everything within its reach. But those responsible will not get away with it. The wheels of justice turn slowly but grind exceedingly fine.`,
    objectives: [
      WhatsInTheBox_Objective1
    ],
    vendor: Banshee,
    level: 0,
    key: [
      AnnaJana
    ]
}