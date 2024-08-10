import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { YBL1 } from "../locations";

const RebelScum_Objective1: objective = {
    id: "O-HHJUFR",
    name: "Hostiles",
    description: "Neutralize 20 hostiles in the YBL-1 bunker",
    position: [11024.372922001789, 13083.801860321935],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.YBL1],
    location: YBL1
}

export const RebelScum: task = {
    id: "T-Q8KR6X",
    name: "Rebel Scum",
    briefing: "Time to wipe some terrorists off the face of the earth, amigo. The bunker south of the military base has been occupied by these LLA fuckers long enough. We tried to talk to them and make some kind of deal, but they just spit in our eyes! Fucking rebel scum! Consequently, we must tell them in the universal language of violence that they should never have left the jungle. Go out there and give them hell. Demonstrate the real difference between a professional and a bunch of idealistic, gun-wielding punks.",
    debriefing: "Spectacular! You truly showed these fuckers that we do not negotiate with terrorists. They'll certainly come back, but for now we've got a break from these wannabe revolutionaries. What's important now is that we've made it loud and clear that if you fuck with us, you'll get it back tenfold.",
    objectives: [
        RebelScum_Objective1
    ],
    vendor: Handshake,
    level: 0,
}