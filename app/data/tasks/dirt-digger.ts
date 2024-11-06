import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Banshee } from "~/data/vendors";
import { MidnightSapphire } from "~/data/locations";

const DirtDigger_Objective1: objective = {
    id: "O-CSXCAG",
    name: "VHS",
    description: "Retrieve the VHS and report back to Banshee",
    position: [17067.6593855409, 21489.976456254713],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const DirtDigger: task = {
    id: "T-2JLQ7Q",
    name: "Dirt Digger",
    briefing: "I've been informed that you have once again been assigned to retrieve a device containing evidence of crimes committed. Like last time, I would like to ask you to bring it to me instead of your morally ambivalent superior. People with power think they can get away with their terrible deeds, but with your help, we can bring them to justice. I want you to hand me the dirt you were sent to retrieve. I'm pretty sure it will shed light on some of the events on this island. The more we can gather, the better.",
    debriefing: "Thanks for the VHS. I'm not going to reveal who the scumbag celebrity was, but let me be clear: not even his stardom will save him when the prosecution starts. The things he did to those poor locals are unforgivable. It's disgusting how they were treated by everyone with some kind of power. You did well in bringing this to my attention.",
    objectives: [
      DirtDigger_Objective1
    ],
    vendor: Banshee,
    level: 0,
}