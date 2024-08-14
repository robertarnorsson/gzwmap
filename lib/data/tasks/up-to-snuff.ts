import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { HuntersParadise } from "@/lib/data/locations";
import { Difficulty3 } from "../difficulty";

const UpToSnuff_Objective1: objective = {
    id: "O-INAHB0",
    name: "Client List",
    description: "Locate the client list at Hunter's Paradise and hand it to Handshake",
    position: [14318.494068377002, 22040.620985804435],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.HUNTERSPARADISE, MarkerType.DIFFICULTY_3],
    location: HuntersParadise,
    difficulty: Difficulty3
}

export const UpToSnuff: task = {
    id: "T-DDC9ZM",
    name: "Up to Snuff",
    briefing: "Buddy, I need your help. Maybe you've already heard, but Huner's Paradise had some sort of VIP program for those with the deepest pockets. I don't care what sort of fucked up stuff they did, but I was contacted by the boss, and he wants to know what sort of people were in on it. There has to be a list of clients somewhere in that place, so look carefully, find it, and bring it back here. I bet some kind of administrative building should be just the spot where they'd keep something like that.",
    debriefing: "Here we go, this is some good stuff! I even recognize some of these names here. Look at that guy, he won a gold medal in Milan this year. And this chick is the CEO of a huge pharmaceutical company. Don't ask me how I know that. So many different people, but with one thing in common - they are all rich as fuck. Good job, the boss will be thrilled!",
    objectives: [
        UpToSnuff_Objective1,
    ],
    vendor: Handshake,
    level: 0,
    difficulty: Difficulty3,
    note: 'Will cancel "A Shot In The Dark"'
}
