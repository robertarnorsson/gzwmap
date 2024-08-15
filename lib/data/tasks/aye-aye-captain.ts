import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";
import { Difficulty4 } from "@/lib/data/difficulty";

const AyeAyeCaptain_Objective1: objective = {
    id: "O-7WRF1D",
    name: "Evidence",
    description: "Search for usable ships on water",
    position: [22308.851586038247, 14798.736164797996],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.TIGERBAY, MarkerType.DIFFICULTY_4],
    location: TigerBay,
    image: "/objectives/aye-aye-captain.webp",
    difficulty: Difficulty4
}

export const AyeAyeCaptain: task = {
    id: "T-TRXFG4",
    name: "Aye Aye, Captain",
    briefing: "I have another resource-saving job for you. In Tiger Bay, there is a harbor that I want you to inspect. So far, we have mostly had bad luck finding anything useful on land, which is why you will now be looking for a ship at sea. The evacuation was abrupt. Therefore, it's possible that some ships were left behind in the chaos. Find a place where you can see the whole harbor. I hope you'll be successful this time. It would be useful to have our own navy. Enjoy your walk on the beach.",
    debriefing: "Nothing? So another failed attempt to get anything of value from this godforsaken island. One by one we lose the places where we can get something of any use. Shit. I hope you at least had a nice view.",
    objectives: [
      AyeAyeCaptain_Objective1
    ],
    vendor: Gunny,
    level: 0,
    difficulty: Difficulty4
}