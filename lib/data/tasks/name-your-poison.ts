import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Turncoat } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";
import { PoisonVial } from "@/lib/data/items/tools";

const NameYourPoison_Objective1: objective = {
    id: "O-O5IULF",
    name: "Water Cistern",
    description: "Find the water cistern near the barracks and poison it",
    position: [10659.667381636918, 15032.654781583667],
    type: ObjectiveType.STASH,
    types: [MarkerType.TASK, MarkerType.STASH, MarkerType.TURNCOAT, MarkerType.FORTNARITH],
    location: FortNarith,
    items: [ PoisonVial ]
}

export const NameYourPoison: task = {
    id: "T-BTHUGK",
    name: "Name Your Poison",
    briefing: "Friend, I am well aware that you are successively attacking the soldiers in Fort Narith, and I want to help you. As a weapons trader, I sometimes come across interesting things. In this case, a very useful poison. Put it into the water supply and witness the magic. It won't kill the men, but it will weaken them. What's my motivation? Let's just say that the army hasn't been fair to me in the past. And knowing that you will give them hell puts a smile on my face. If you accept, I shall provide you with the poison. Consider it a token of goodwill. A gift to strengthen our bond. And worry not, if you manage to misplace it, you can purchase more from me... for a modest price. I can't keep giving away such a wonderful gifts all the time, you know. I'm sure you understand.",
    debriefing: "Friend, I must say that your unscrupulous approach to this task is truly laudable. Your actions have increased my respect for you.",
    objectives: [
        NameYourPoison_Objective1
    ],
    vendor: Turncoat,
    level: 0,
    items: [ PoisonVial ],
    cancelTaskId: "T-B758JQ"
}