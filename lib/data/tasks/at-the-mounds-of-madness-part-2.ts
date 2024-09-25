import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Artisan } from "@/lib/data/vendors";
import { BanPa } from "@/lib/data/locations";
import { Difficulty3 } from "@/lib/data/difficulty";

const AtTheMoundsOfMadnessPartTwo_Objective1: objective = {
    id: "O-1DCZEW",
    name: "Intel",
    description: "Retrieve the intel from Ban Pa and report back to Artisan",
    position: [23051.01938982965, 15980.120927877104],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.BANPA, MarkerType.DIFFICULTY_3],
    location: BanPa,
    difficulty: Difficulty3,
    note: "You can find the intel inside the Elders House next to the candles."
}

export const AtTheMoundsOfMadnessPartTwo: task = {
    id: "T-P3IO7D",
    name: "At the Mounds of Madness II",
    briefing: "Mercenary, I see that even your superiors are taking an interest in that forsaken village. Well, I am also still interested, so why not do what I'm sure you do best, backstab those pricks you're working for, and bring anything you dig up to me, hm? Maybe I'll even feel generous and share anything I can figure out with you.",
    debriefing: "This... this is nonsense! Complete fucking nonsense! These people were playing us all for fools. Now I'm not even sure if those tales about mutilated bodies hold any truth. Likely just part of the same scam to scare folks away. I just can't wrap my head around why those bastards from the LAF turned a blind eye to it. They had no qualms about cracking down on everyone else on this island, so why let this slide? Keep at it, merc. Maybe you'll unearth more.",
    objectives: [
        AtTheMoundsOfMadnessPartTwo_Objective1,
    ],
    vendor: Artisan,
    level: 0,
    difficulty: Difficulty3,
    cancelTaskId: "T-4V85R5"
}
