import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { FortNarith } from "../locations";
import { CameraWiretap } from "../items";

const HackerPartOne_Objective1: objective = {
    id: "N/A",
    name: "Camera 1",
    description: "Hack the camera at the air traffic control building",
    position: [10853.763538411224, 14387.533767426123],
    type: ObjectiveType.HACK,
    image:"/objectives/hacker-1-camera-1.webp",
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith,
    items: [CameraWiretap]
}

const HackerPartOne_Objective2: objective = {
    id: "N/A",
    name: "Camera 2",
    description: "Hack the camera at the main entrance",
    position: [11269.041876753225, 14666.354082435442],
    type: ObjectiveType.HACK,
    image:"/objectives/hacker-1-camera-2.webp",
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith,
    items: [CameraWiretap]

}

const HackerPartOne_Objective3: objective = {
    id: "N/A",
    name: "Camera 3",
    description: "Hack the camera at the northern entrance",
    position: [10985.343601402163, 14975.76206507615],
    type: ObjectiveType.HACK,
    image:"/objectives/hacker-1-camera-3.webp",
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith,
    items: [CameraWiretap]
}

const HackerPartOne_Objective4: objective = {
    id: "N/A",
    name: "Camera 4",
    description: "Hack the camera in the army HQ",
    position: [11061.847616030645, 14482.873185881284],
    type: ObjectiveType.HACK,
    image:"/objectives/hacker-1-camera-4.webp",
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith,
    items: [CameraWiretap]
}

export const HackerPartOne: task = {
    id: "N/A",
    name: "Hacker",
    briefing: "Hey there, buddy. I've got a special task for you. You're gonna be a cameraman of sorts. I need you to infiltrate the military base and hack into their cameras. We need as much information on them as possible. I don't want to go a minute without being alerted when soldiers go to the HQ or leave the base. I want them on my screen 24-7. Like some Big Brother bullshit. Take these gadgets and place them in the cameras on the base. Soon, we'll know more about them than their mothers.",
    debriefing: "Wonderful! With these taped cameras, we now have the upper hand in monitoring the military base. I feel like I'm in a spy movie or something. No one will pick their nose without our knowledge. You did well, champ.",
    note: "Make sure you have the 4 listening devices with you.",
    objectives: [
        HackerPartOne_Objective1,
        HackerPartOne_Objective2,
        HackerPartOne_Objective3,
        HackerPartOne_Objective4,
    ],
    vendor: Handshake,
    items: [CameraWiretap, CameraWiretap, CameraWiretap, CameraWiretap],
    level: 0,
}