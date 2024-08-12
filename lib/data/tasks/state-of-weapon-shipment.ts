import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Banshee, Handshake } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";

const StateOfWeaponShipment_Objective1: objective = {
    id: "O-I4KRBC",
    name: "Supplies",
    description: "Determine the state of the firearm and ammunition supplies in Fort Narith",
    position: [10705.11036314214, 14704.544700694929],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.FORTNARITH],
    location: FortNarith
}

export const StateOfWeaponShipment: task = {
    id: "T-IAOE3X",
    name: "State Of Weapon Shipment",
    briefing: "Ah, good to see you again! Listen, I've been thinking it over, and I'm sure you and I could reach a mutually beneficial partnership. What do you say? You scratch my back, and I scratch yours? Listen, I had a deal that went sour with one of the officers at Fort Narith. Simply put, I gave him the money, and he stopped returning my calls. And if there's something I hate, it's being fucking ghosted! I need you to check if he wasn't full of shit from the very beginning and find out what's the weapon situation over there. I bet you already know the place like the back of your hand, so it should be a walk in the park, right? Just try to keep it quiet, please. We don't want the entire base on high alert. Simply find their ammunition depot, and check what they have left there. Think you can do that for me?",
    debriefing: "I see. So it looks like there were multiple similar deals done in the past, and now they have pretty much nothing left! That sneaky son of a bitch! Well, even though this is unfortunate, it gives me new possibilities for various other types of negotiations. Thank you, partner. I'm sure you can use this info as well, right?",
    objectives: [
        StateOfWeaponShipment_Objective1
    ],
    vendor: Banshee,
    level: 0
}