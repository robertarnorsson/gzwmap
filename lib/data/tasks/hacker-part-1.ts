import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";

const HackerPartOne_Objective1: objective = {
    id: "",
    name: "Camera 1",
    description: "Hack the camera at the air traffic control building",
    position: [0.6225538171181662, -0.9400397060105027],
    type: ObjectiveType.HACK,
    image:"/objectives/hacker-camera-air-traffic-control-building.webp",
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH]
}

const HackerPartOne_Objective2: objective = {
    id: "",
    name: "Camera 2",
    description: "Hack the camera at the main entrance",
    position: [0.6342316308779556, -0.9222942777356248],
    type: ObjectiveType.HACK,
    image:"/objectives/hacker-camera-main-entrance.webp",
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH]

}

const HackerPartOne_Objective3: objective = {
    id: "",
    name: "Camera 3",
    description: "Hack the camera at the northern entrance",
    position: [0.6480950970010751, -0.9342072925215519],
    type: ObjectiveType.HACK,
    image:"/objectives/hacker-camera-northern-entrance.webp",
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH]
}

const HackerPartOne_Objective4: objective = {
    id: "",
    name: "Camera 4",
    description: "Hack the camera in the army HQ",
    position: [0.6271425239793826, -0.9316388579253856],
    type: ObjectiveType.HACK,
    image:"/objectives/hacker-camera-army-headquarters.webp",
    types: [MarkerType.TASK, MarkerType.HACK, MarkerType.HANDSHAKE, MarkerType.FORTNARITH]
}

export const HackerPartOne: task = {
    id: "",
    name: "Hacker - Part 1",
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
    level: 0,
}