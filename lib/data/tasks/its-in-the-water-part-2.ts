import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {LabRat} from "@/lib/data/vendors";
import { BanPa } from "@/lib/data/locations";
import { BPElder } from "@/lib/data/keys/ban-pa";

const ItsInTheWaterPartTwo_Objective1: objective = {
    id: "O-8J5IKS",
    name: "Chemical production",
    description: "Search Ban Pa and find anything related to chemical production",
    position: [23060.911223938536, 15997.588061961671],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.LABRAT, MarkerType.BANPA],
    location: BanPa,
    key: BPElder
}

export const ItsInTheWaterPartTwo: task = {
    id: "T-V3C5GS",
    name: "It's in the water II",
    briefing: "I think we're onto something here. After some thorough testing, I'm almost positive I know what's been hiding in Ban Pa. I only need the last piece of the puzzle, and I would appreciate your help finding it. Please return to Ban Pa and investigate anything unusual. This includes anything seemingly out of place in a fishing village, even given its supposed haunted and cult-run reputation. Pay particular attention to anything related to chemistry. If my hunch is correct, all this time, we haven't been dealing with anything supernatural or out of this world but a classic case of human greed and stupidity.",
    debriefing: "I knew it! All leads pointed to C22H28N2O! They were making fentanyl! That's why all that charade with the cult and the demons. It was all just to keep people from snooping around. They went to great lengths to keep any eyes off their operation. I have to admire their creativity; it's just too bad it all went to service of… this. Thank you for helping me get to the bottom of this mess. It's just too bad we weren't able to discover anything more substantial about what exactly is happening on this island.",
    objectives: [
        ItsInTheWaterPartTwo_Objective1,
    ],
    vendor: LabRat,
    level: 0,
    key: [
        BPElder
    ]
}
