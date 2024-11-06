import {MarkerType, ObjectiveType, objective, task} from "~/lib/types";
import {Turncoat} from "~/data/vendors";
import { BanPa } from "~/data/locations";

const TheValueOfSharing_Objective1: objective = {
    id: "O-1AJPSM",
    name: "Stash of high-grade fentanyl",
    description: "Locate a stash of high-grade fentanyl under a house",
    position: [22944.46418700454, 16058.091541802138],
    image: "/objectives/stash-of-high-grade-fentanyl.webp",
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.TURNCOAT, MarkerType.BANPA],
    location: BanPa
}

export const TheValueOfSharing: task = {
    id: "T-S5HKAX",
    name: "The Value Of Sharing",
    briefing: "Friend, I suspect that by now, you are already aware of the exact nature of events that unfolded in Ban Pa before your arrival. The village's original inhabitants utilized their entrepreneurship and passion for drama to create a delightfully macabre and, more importantly, very profitable business. Sadly, even though they shared some of their wealth with... certain individuals in power to look the other way, judging by what you've discovered, it wasn't nearly enough. I believe it's only fair I get my slice of the pie, and I hope you'll help me secure it. No need to fret; unlike those tight-fisted folks, I understand the value of sharing. There's bound to be a stash hidden away somewhere, containing the finest of their craft. If you'd kindly procure some of these materials for me, I'll ensure your efforts are handsomely rewarded.",
    debriefing: "Very good! I am glad to see that you are an intelligent man who is not afraid to seize the day, and I have to say I feel genuinely delighted by our friendship. To future endeavors!",
    objectives: [
        TheValueOfSharing_Objective1,
    ],
    vendor: Turncoat,
    level: 0,
}
