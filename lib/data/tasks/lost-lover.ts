import {ObjectiveType, objective, task} from "@/lib/types";
import {Artisan} from "@/lib/data/vendors";

const LostLover_Objective1: objective = {
    name: "Document",
    description: "Search in and around Fort Narith and uncover what happened to Atsawin Xiong",
    position: [0.6367718112100171, -0.908416781880861],
    type: ObjectiveType.LOCATE
}

export const LostLover: task = {
    name: "Lost Lover",
    briefing: "We have another missing local to find. I have been contacted by a young woman looking for her beloved boyfriend. He hasn't responded to her in a while, so she's worried that something bad might have happened to him. According to the information she gave me, the boy is supposed to be living on a farm near Savanpha village, east of the military base. His name is Atsawin Xiong. I really hope we can bring her some good news. The sad stories we are uncovering here weigh heavily on me. What is and has been happening here is truly horrible, and it is largely ignored by the world. Please find him or at least find out what happened to him. Good news would please not only her but also me.",
    debriefing: "He was drafted into the army and sent to GZ? That is worrisome, but not completely desperate. There's still a chance that he could return fine... a slim chance, yet still a chance. I'll inform the young woman of your findings.",
    note: "Read the document on the shelf inside the house",
    objectives: [
        LostLover_Objective1,
    ],
    vendor: Artisan,
    level: 0,
}