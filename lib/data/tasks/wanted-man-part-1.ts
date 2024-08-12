import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";

const WantedManPartOne_Objective1: objective = {
    id: "O-EARXUH",
    name: "Intel",
    description: "Retrieve intel about the prisoner and report back to Gunny",
    position: [11009.36193181626, 14544.352417119784],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.GUNNY, MarkerType.FORTNARITH],
    location: FortNarith
}

export const WantedManPartOne: task = {
    id: "T-ZFD82V",
    name: "Wanted Man",
    briefing: "We may finally have a potential trail to follow on those bastards that have pushed us back. Seems like the Lamang army isn't as incompetent as we thought, because they managed to capture one very suspicious looking fella. Allegedly, he's not on the base anymore, but we can still get some information about him. There should be something that can point us in the right direction. I'm still angry about how easily they managed to surprise us. A goddamn shadow organization full of professionals right under our noses. But the time of their full exposure is near. I want you to quickly head to Fort Narith HQ and search the offices for any worthwhile intel. We have a lead and we're going to follow it like frigging hounds.",
    debriefing: "Oh yeah, this is some good intel. Looks like our enigmatic prisoner managed to escape. Doesn't matter. What matters is that we got some info on those bastards. They won't be playing in the shadows for long.",
    objectives: [
        WantedManPartOne_Objective1
    ],
    vendor: Gunny,
    level: 0,
}