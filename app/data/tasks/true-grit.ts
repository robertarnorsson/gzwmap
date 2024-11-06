import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import { HuntersParadise } from "~/data/locations";
import { HP102 } from "~/data/keys/hunters-paradise";

const TrueGrit_Objective1: objective = {
    id: "O-BFSQDN",
    name: "Antique Revolver",
    description: "Retrieve the antique revolver and hand it over to Handshake",
    position: [14457.222337997006, 21848.283781303744],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise,
    key: HP102
}

export const TrueGrit: task = {
    id: "T-JKL4R1",
    name: "True Grit",
    briefing: "Hey there, champ. Listen, I've got a little side gig going on, and I'm wondering if you'd like a piece of the action. I've got a client on the line who was here when shit hit the fan and managed to escape. However, he seems to have misplaced his prized possession - a Colt Single Action Army revolver that John Wayne himself used in True Grit. Now, I've never seen that movie; not really a Western fan, you know? But this guy is willing to pay big bucks if we get that little piece of movie memorabilia back to him. Frankly, I doubt it was even his in the first place. He's probably just using the situation to nab somebody else's property, but I really don't care about that. What matters is that if you help me with this, I might have some more work lined up your way. Off the books, of course. According to him, the revolver is in a wooden case, and it should be somewhere in the shooting range west of the resort, so you'll have your eyes peeled when you're over there, right?",
    debriefing: "Magnificent! So much money for a little shitty antique like this. Not that I'm complaining, of course. Keep silent about this, and I'll have more work coming up. You and me… we'll be rich men before you know it, don't you worry.",
    objectives: [
        TrueGrit_Objective1,
    ],
    vendor: Handshake,
    level: 0,
    key: [
        HP102
    ],
}
