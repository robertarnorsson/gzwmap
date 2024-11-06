import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import { TigerBay } from "~/data/locations";

const MallVigilante_Objective1: objective = {
    id: "O-GFR60E",
    name: "LAF forces",
    description: "Neutralize the LAF forces at Tiger Bay",
    position: [21608.754062332206, 14539.25169367332],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay
}

export const MallVigilante: task = {
    id: "T-YGPG8D",
    name: "Mall Vigilante",
    briefing: "Hey there, buddy. I've got a task that I think a man with your qualities would appreciate. You see, I'm of the opinion that soldiers shouldn't be occupying civilian commercial buildings for too long. These buildings were built for the purpose of making money, and the army guys are just lying around, smoking, shitting, and loitering aimlessly. Absolutely disgusting and inexcusable. I'm pretty sure you feel the same way. That's why you have to go to Tiger Bay Central and show these inert sons of bitches what it means to piss us off. Bring the lazy soldiers their well-deserved punishment and eliminate as many of them as possible.The fewer they are, the better for us.",
    debriefing: "The man, the legend. Great work as always, amigo. Now it's going to be a lot easier to go to the mall and have a peaceful window-shopping experience.",
    objectives: [
      MallVigilante_Objective1
    ],
    vendor: Handshake,
    level: 0,
}