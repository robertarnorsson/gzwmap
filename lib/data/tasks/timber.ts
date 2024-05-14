import {ObjectiveType, objective, task} from "@/lib/types";
import {Banshee} from "@/lib/data/vendors";

const Timber_Objective1: objective = {
    name: "Eliminate Leader",
    description: "Eliminate the leader of the hostile group occupying the Sawmill",
    position: [0.7515189734461651, -0.9627628314396232],
    type: ObjectiveType.ELIMINATION,
    image: "/objectives/leader-sawmill.webp"
}

export const Timber: task = {
    name: "Timber",
    briefing: "Allow me to make your acquaintance. The name’s Banshee, and that’s all the personal stuff you need to know about me right now. Maybe when we trust each other a bit more, right? Well, why not start working on that mutual trust right now? My business is providing people with the means to defend themselves because I believe everyone should have access to certain goods that allow them to level the playing field. When I first learned about the “unfortunate” situation here, I didn’t waste a single second and called upon some of my associates to liberate the equipment that I assumed would be left behind to rust. However, I did not anticipate the entire Lamang Armed Forces would stay here and keep a watchful eye. Sadly, my associates learned that the hard way and are now in a rather sour mood. Letting a bad mood like that fester might lead to regrettable decisions on their behalf. Like, let’s say, seeking revenge against the fine man who got them in this situation. I’d prefer it not to go as far, so I have a business proposition for you - find the man in charge of their merry little group and make it so he never has to be angry again. Sang Samlain is his name, and he shouldn’t be hard to find. Just look for a guy with the most expensive gear - old Sang always loved his toys…",
    debriefing: "Very good! Thank you for solving that little problem for me. If you’re interested, I might have some other jobs lying around. I am sure most of them would be a walk in the park for a man of your talents.",
    objectives: [
        Timber_Objective1
    ],
    vendor: Banshee,
    level: 0,
}