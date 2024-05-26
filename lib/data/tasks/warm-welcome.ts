import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Turncoat} from "@/lib/data/vendors";
import { BanPa } from "../locations";

const WarmWelcome_Objective1: objective = {
    id: "",
    name: "Gang Leader",
    description: "Eliminate the gang leader in Ban Pa",
    position: [23109.22397131015, 15885.825645493795],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.TURNCOAT, MarkerType.BANPA],
    location: BanPa
}

export const WarmWelcome: task = {
    id: "",
    name: "Warm Welcome",
    briefing: "Friend, I’m afraid I need to call upon your services once more. The rabble in Ban Pa has proven more stubborn than I anticipated. It would seem they fear their leader’s wrath more than our “warm” welcome. A swift solution presents itself quite clearly - silence this individual and free his cohorts from his iron fist. He should stand out among his subordinates quite ostentatiously, so I trust you won’t have any trouble locating him. Perhaps then the rest will come to their senses and finally understand that it’s in their best interest to vacate our little corner of paradise.",
    debriefing: "Beautifully done! Now, let’s just hope they won’t find a replacement anytime soon.",
    objectives: [
        WarmWelcome_Objective1,
    ],
    vendor: Turncoat,
    level: 0,
}
