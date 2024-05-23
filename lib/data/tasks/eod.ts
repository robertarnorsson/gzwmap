import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Banshee } from "@/lib/data/vendors";

const EOD_Objective1: objective = {
    id: "",
    name: "Detonators",
    description: "Retrieve the detonators and bring them back",
    position: [0.7500917526701437, -0.9633636462356578],
    type: ObjectiveType.COLLECT,
    image: "/objectives/detonators-sawmill.webp",
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.SAWMILL]
}

export const EOD: task = {
    id: "",
    name: "EOD",
    briefing: "Good to see you again! Your help made my life a lot easier, and I am thankful for that, but it’s not over yet. You managed to cut off the head, but the body is still more than able to light the fuse, both figuratively and literally. I’d definitely sleep a lot calmer if their ability to cause a massive fucking explosion would be taken away from them. I need you to look for a set of detonators and bring them back to me. Without them, they might as well use all that fertilizer just to grow flowers for their graves. I’d say Sang used to keep them somewhere close to where he was holed in, so try to find his hooch, and I’m sure you’ll find them as well. You do this for me, and we can talk more business.",
    debriefing: "Excellent! I’m delighted I wasn’t wrong about you. Truly a man of many talents. I’m certain you and I can do business together! I’ll stay in touch, don’t you worry…",
    objectives: [
        EOD_Objective1
    ],
    vendor: Banshee,
    level: 0,
}