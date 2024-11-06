import {MarkerType, ObjectiveType, objective, task} from "~/lib/types";
import {Handshake} from "~/data/vendors";
import { Sawmill } from "~/data/locations";

const IWentISawIConqueredPartOne_Objective1: objective = {
    id: "O-Z529UO",
    name: "Ridge",
    description: "Survey the sawmill from the nearby ridge",
    position: [10195.209641469448, 17115.660714779697],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.SAWMILL],
    location: Sawmill
}

export const IWentISawIConqueredPartOne: task = {
    id: "T-TQDOUB",
    name: "I went, I saw, I conquered",
    briefing: "So, are you ready to leave our little playground and go on an actual honest-to-god recon mission, champ? I'm sure you can't wait, so listen up. There's a military base in the western part of our AO. Forth Narith, named after the asshole that used to run this POS country before he disappeared fuck knows where. However, that didn't stop him from leaving his private army behind to guard anything worth something in this shithole. Now, attacking the base itself would be a bad idea, so we'll leave that bit for later. What we can do is scout the area and look for potential outposts that will come in handy when shit hits the fan. And this is where you come in. I need you to check the area north of Fort Narith. There's supposed to be an abandoned sawmill there, meaning it's a pretty safe bet that there's gonna be a lot of space for our birds to land and not get caught on fucking branches. Find a good vantage point to survey the sawmill itself and confirm if it really is abandoned, and while you're at it, try to find me a proper landing zone, okay? I'm sure it's gonna be a walk in the park for somebody of your talents.",
    debriefing: "Fantastic job, my man. This is going to make our lives here a lot easier. Unfortunately, it looks like the sawmill is far from being abandoned and that the folks there are anything but friendly. Whatever may be the case, expect this wasn't your last time smelling freshly cut timber.",
    objectives: [
        IWentISawIConqueredPartOne_Objective1
    ],
    vendor: Handshake,
    level: 0,
}