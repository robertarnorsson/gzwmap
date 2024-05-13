import {ObjectiveType, objective, task} from "@/lib/types";
import {LabRat} from "@/lib/data/vendors";

const ItsInTheWaterPartTwo_Objective1: objective = {
    name: "Chemical production",
    description: "Search Ban Pa and find anything related to chemical production",
    position: [0.6921201845668441, -0.41679382324218756],
    type: ObjectiveType.COLLECT,
}

export const ItsInTheWaterPartTwo: task = {
    name: "Its in the water - Part 2",
    briefing: "I think we’re onto something here. After some thorough testing, I’m almost positive I know what’s been hiding in Ban Pa. I only need the last piece of the puzzle, and I would appreciate your help finding it. Please return to Ban Pa and investigate anything unusual. This includes anything seemingly out of place in a fishing village, even given its supposed haunted and cult-run reputation. Pay particular attention to anything related to chemistry. If my hunch is correct, all this time, we haven't been dealing with anything supernatural or out of this world but a classic case of human greed and stupidity.",
    debriefing: "I knew it! All leads pointed to C22H28N2O! They were making fentanyl! That’s why all that charade with the cult and the demons. It was all just to keep people from snooping around. They went to great lengths to keep any eyes off their operation. I have to admire their creativity; it's just too bad it all went to service of… this. Thank you for helping me get to the bottom of this mess. It’s just too bad we weren’t able to discover anything more substantial about what exactly is happening on this island.",
    note: "You can use the boxes and fishing net to get into window back of the house.",
    objectives: [
        ItsInTheWaterPartTwo_Objective1,
    ],
    vendor: LabRat,
    level: 0,
}
