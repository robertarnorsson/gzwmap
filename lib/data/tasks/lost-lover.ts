import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Artisan} from "@/lib/data/vendors";
import { FortNarith } from "../locations";

const LostLover_Objective1: objective = {
    id: "N/A",
    name: "Document",
    description: "Search in and around Fort Narith and uncover what happened to Atsawin Xiong.",
    position: [11594.24540498363, 14720.197344102531],
    type: ObjectiveType.LOCATE,
    image: "/objectives/lost-lover-document.webp",
    note: "Read the document on the shelf inside the house",
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.FORTNARITH],
    location: FortNarith
}

const LostLover_Objective2: objective = {
    id: "N/A",
    name: "Diary",
    description: "Find out what happened after Atsawin Xiong was conscripted and taken to Fort Narith barracks.",
    position: [10688.70419634185, 15021.047052969103],
    type: ObjectiveType.COLLECT,
    image: "/objectives/lost-lover-diary.webp",
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.FORTNARITH],
    location: FortNarith
}

export const LostLover: task = {
    id: "N/A",
    name: "Lost Lover",
    briefing: "We have another missing local to find. I have been contacted by a young woman looking for her beloved boyfriend. He hasn't responded to her in a while, so she's worried that something bad might have happened to him. According to the information she gave me, the boy is supposed to be living on a farm near Savanpha village, east of the military base. His name is Atsawin Xiong. I really hope we can bring her some good news. The sad stories we are uncovering here weigh heavily on me. What is and has been happening here is truly horrible, and it is largely ignored by the world. Please find him or at least find out what happened to him. Good news would please not only her but also me.",
    debriefing: "He was drafted into the army and sent to GZ? That is worrisome, but not completely desperate. There's still a chance that he could return fine... a slim chance, yet still a chance. I'll inform the young woman of your findings.",
    objectives: [
        LostLover_Objective1,
        LostLover_Objective2,
    ],
    vendor: Artisan,
    level: 0,
}