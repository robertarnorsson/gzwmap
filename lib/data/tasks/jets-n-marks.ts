import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Banshee} from "@/lib/data/vendors";
import { FortNarith } from "../locations";

const JetsNMark_Objective1: objective = {
    id: "",
    name: "Jet 1",
    description: "Confirm the existence and position of military jet",
    position: [11317.979827236257, 14093.88597064779],
    type: ObjectiveType.MARK,
    image: "/objectives/jets-n-marks-jet-1.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.BANSHEE, MarkerType.FORTNARITH],
    location: FortNarith
}

const JetsNMark_Objective2: objective = {
    id: "",
    name: "Jet 2",
    description: "Confirm the existence and position of military jet",
    position: [11300.368998988524, 14189.238626171518],
    type: ObjectiveType.MARK,
    image: "/objectives/jets-n-marks-jet-2.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.BANSHEE, MarkerType.FORTNARITH],
    location: FortNarith
}

const JetsNMark_Objective3: objective = {
    id: "",
    name: "Jet 3",
    description: "Confirm the existence and position of military jet",
    position: [11124.46658493078, 14186.320131061748],
    type: ObjectiveType.MARK,
    image: "/objectives/jets-n-marks-jet-3.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.BANSHEE, MarkerType.FORTNARITH],
    location: FortNarith
}

export const JetNMark: task = {
    id: "",
    name: "Jets 'n' Marks",
    briefing: "I'm so glad to see you again. Listen, I've got a really easy job I'd like you to do for me. According to my information, there are some fighter jets at Fort Narith. I want you to find them and mark them. Nothing difficult, ain't it? Since I know you're a frequent visitor to the military base, it shouldn't be anything complicated to locate all those jets. What do you say? Nothing too hardcore, right?",
    debriefing: "Based on your description, it appears that the Lamangese received some top-notch junk. Anyways, thanks for your work. Meet me again if you want to make some more coins.",
    note: "You need to bring 3 GPS Trackers with you (collect them from the messages tab when you start the task). If you die with them, you'll need to purchase more from Gunny.",
    objectives: [
        JetsNMark_Objective1,
        JetsNMark_Objective2,
        JetsNMark_Objective3,
    ],
    vendor: Banshee,
    level: 0,
}