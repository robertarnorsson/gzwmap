import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Turncoat } from "~/data/vendors";
import { FortNarith } from "~/data/locations";

const Downsizing_Objective1: objective = {
    id: "O-B0E1NF",
    name: "Commander",
    description: "Eliminate the LAF forces at Fort Narith",
    position: [11099.438825593268, 14538.317611915381],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.TURNCOAT, MarkerType.FORTNARITH],
    location: FortNarith
}

export const Downsizing: task = {
    id: "T-2G7NLW",
    name: "Downsizing",
    briefing: "Friend, you know that I want the best for you, right? That's why I want to help you with a suggestion: take out the officers at Fort Narith. This will cause more chaos among the remaining soldiers at the base. Don't look for ulterior motives, friend. I'm just an altruist who likes to help. What makes you happy makes me happy... and you know what? To motivate you even more, if you do what's best for you and kill the officers, I'll give you a reward. Just to see your joyful smile.",
    debriefing: "Friend, great job! The soldiers must be running around the base like chickens hit by a hawk. I'm happy that you're happy. Now I'll sleep a little easier... I mean because you did what was best for you. Yeah, that's why! Ha ha!",
    objectives: [
      Downsizing_Objective1
    ],
    vendor: Turncoat,
    level: 0,
}