import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Artisan } from "~/data/vendors";
import { Sawmill } from "~/data/locations";

const WhenATreeFalls_Objective1: objective = {
    id: "O-QEWARO",
    name: "Malo Kethavongsa",
    description: "Search the sawmill and uncover what happened to Malo Kethavongsa",
    position: [10230.298541708924, 17259.54617704634],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.SAWMILL],
    location: Sawmill
}

export const WhenATreeFalls: task = {
    id: "T-DMI6CK",
    name: "When A Tree Falls",
    briefing: "Hey, wanna do some good for a change? Many people were left behind during the so-called “evacuation,” and I need you to find out what happened to them. I know you already did a job like that for that egghead woman - you call her Lab Rat, right? - who seems to be the only person here with at least a shred of decency, but these are my people, and I'll see to it personally that you won't make a half-assed attempt and call it a day. At least when looking for some individuals… Malo Kethavongsa was working at the Tonmai Hainy Lumber Company when all that hell broke loose. From what I've heard, everyone from there ran for their lives almost immediately and didn't look back. His mother was one of the first to get booted off the island, so she couldn't even look for him. I don't know how she managed to get his name on Lab Rat's little missing person's list, but I bet it must have cost her everything she had left. Now run along, look into his disappearance, and report back to me with anything you find.",
    debriefing: "I can't believe they would just leave him there… Don't tell me the damn UNLRA didn't check the place out! They probably just didn't care and wanted to avoid the paperwork, fucking bastards. I hope you're not that dumb to think this was really a humanitarian mission or, god forbid, a rescue. But why would you care, right? As long as the money keeps coming! Just leave me alone, okay?",
    objectives: [
        WhenATreeFalls_Objective1,
    ],
    vendor: Artisan,
    level: 0,
}
