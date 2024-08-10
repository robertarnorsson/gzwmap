import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";
import { BanPa } from "../locations";

const TheShadowOverBanPaPartOne_Objective1: objective = {
    id: "O-9TYYMD",
    name: "Southern Entry Point",
    description: "Scout the main southern entry point to Ban Pa",
    position: [22831.016360322225, 15877.925846181417],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.BANPA],
    location: BanPa
}

const TheShadowOverBanPaPartOne_Objective2: objective = {
    id: "O-NWNJBX",
    name: "Northern Entry Point",
    description: "Scout the main northern entry point to Ban Pa",
    position: [23062.043042315352, 16144.894701962065],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.BANPA],
    location: BanPa
}

export const TheShadowOverBanPaPartOne: task = {
    id: "T-5W6AAL",
    name: "The Shadow Over Ban Pa",
    briefing: "Hey man, wanna hear some spooky shit? There's a fishing village called Ban Pa in the eastern part of our AO, just north of the Tiger Bay shopping center and marina. The word around town is that it was taken over by some crazy cult a couple of years back, and all the locals were scared shitless to even go near it, saying that the fanatics there are worshipping some demon or whatever and that the entire village is cursed. Now, since I'm not five anymore, I don't believe bullshit like that, and neither should you. What I do believe is that it's the only place on the shoreline that works as a good stepping point for our future operations in and around Tiger Bay. Head out there, scout the area while focusing on the main entry points, and try looking for a suitable LZ. And don't get eaten by ghosts! Seriously, these fucking people…",
    debriefing: "So, seen any demons? That's what I thought. Probably just piles of rotting fish and a couple of stupid pictures. It's gonna take more than that to scare you, eh champ? Good job. I'd take a bath if I were you, though…",
    objectives: [
        TheShadowOverBanPaPartOne_Objective1,
        TheShadowOverBanPaPartOne_Objective2,
    ],
    vendor: Handshake,
    level: 0,
}
