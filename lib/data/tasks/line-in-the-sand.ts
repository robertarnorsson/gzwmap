import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Artisan} from "@/lib/data/vendors";
import { BanPa } from "@/lib/data/locations";

const LineInTheSand_Objective1: objective = {
    id: "O-24Q8G7",
    name: "Drop Location",
    description: "Dispose of the drugs at the northern pier",
    note: "You have to be at the very end and look at the left corner of the pier to dispose of the drugs",
    position: [23266.04598399198, 16085.520594860025],
    type: ObjectiveType.STASH,
    types: [MarkerType.TASK, MarkerType.STASH, MarkerType.ARTISAN, MarkerType.BANPA],
    location: BanPa
}

export const LineInTheSand: task = {
    id: "T-8TGIA3",
    name: "Line in the Sand",
    briefing: "Listen, I know you're here for the money. Hell, I'd say all of us are. But there comes a time when you draw a goddamn line in the sand and say to yourself, “I ain't crossing this shit!” And I'm pretty sure that time has come for you right now. I couldn't help overhearing your conversation with that asshole. You know what that stuff can do, right? I've seen too many good people being slowly eaten from the inside out or dying outright because they took a speck too much. Let me ask you, do you really want to be a part of that? Here's an idea. There's a small pier in the northern part of the village. Why don't you head there after you find that shit and just chug it in the water? It might be just a drop in the ocean, but it's still way better than handing it over to that prick.",
    debriefing: "You did the right thing. Trust me, stuff like this is never worth the profit, and I know what I'm talking about, ok? Now get lost and keep your shit clean, you got me?",
    objectives: [
        LineInTheSand_Objective1,
    ],
    vendor: Artisan,
    level: 0,
}
