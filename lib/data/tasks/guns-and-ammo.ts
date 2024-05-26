import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import { HuntersParadise } from "../locations";

const GunsAndAmmo_Objective1: objective = {
    id: "",
    name: "Weapon Storage",
    description: "Investigate the weapon storage at Hunter’s Paradise",
    position: [14162.9620680349, 22002.75041031785],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise
}

export const GunsAndAmmo: task = {
    id: "",
    name: "Guns & Ammo",
    briefing: "Ok, time to look into the weapon situation. Investigate the shooting range thoroughly, and try to locate its weapon storage. It’s likely to be locked, so you’ll need to find a key. Once you get in, check out how many weapons and ammo are there, if any, and report back to me. I hope you understand how much beneficial a fully stocked armory like that would be to our mission here, but still be careful out there. Manpower is still more important than hardware, and all the guns and ammo in the world would be useless if there’s no one left to use them, right?",
    debriefing: "Damn it! Either those bastards armed themselves to the teeth, or the guns were never there in the first place. Perhaps the workers grabbed them after the Event, or maybe the army swooped in and confiscated everything. Whatever the case, the result is the same: no guns, no ammo, not even a sharp stick. You did well, shame it was all for nothing.",
    objectives: [
        GunsAndAmmo_Objective1,
    ],
    vendor: Gunny,
    level: 0,
}
