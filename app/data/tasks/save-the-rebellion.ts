import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Artisan } from "~/data/vendors";
import { YBL1 } from "~/data/locations";

const SaveTheRebellion_Objective1_LRI: objective = {
    id: "O-MWCIA0",
    name: "Flash Drive",
    description: "Collect the flash drive at the command tent in the Lamang Recovery Initiative's Base Camp",
    position: [23449.148816118646, 22659.690642673566],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.YBL1],
    location: YBL1
}

const SaveTheRebellion_Objective1_MSS: objective = {
    id: "O-6UA02I",
    name: "Flash Drive",
    description: "Collect the flash drive at the command tent in the Mithras Security Systems's Base Camp",
    position: [16724.880988050376, 10351.07033223358],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.YBL1],
    location: YBL1
}

const SaveTheRebellion_Objective1_CSI: objective = {
    id: "O-NQ2M4Z",
    name: "Flash Drive",
    description: "Collect the flash drive at the command tent in the Crimson Shield International's Base Camp",
    position: [9219.678526143574, 22331.891720295775],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.YBL1],
    location: YBL1
}

const SaveTheRebellion_Objective2: objective = {
    id: "O-VE1XU6",
    name: "Guard House",
    description: "Place the flash drive in the guardhouse",
    position: [11091.473984788052, 13175.044582283132],
    type: ObjectiveType.STASH,
    types: [MarkerType.TASK, MarkerType.STASH, MarkerType.ARTISAN, MarkerType.YBL1],
    location: YBL1
}

export const SaveTheRebellion: task = {
    id: "T-R1X44J",
    name: "Save The Rebellion",
    briefing: "Merc, I heard you were assigned to kill the rebels in The Hole. Look, I know you guys have had your differences, but just killing them isn't going to change anything. These guys have been fighting the government and other assholes for decades, and you killing a bunch of them won't change their fighting spirit. It will only strengthen their resolve. I don't agree with everything they do; in fact, I think many of their methods are over the top, but I think they deserve at least some respect for what they have done for the people of Lamang. I know there's always a price, so don't worry, I'm prepared to reward you handsomely. Just go to The Hole and leave this flash drive in their guardhouse. I have recorded a message for them. They will lay low for a while after listening to it. Trust me on this.",
    debriefing: "Well, color me surprised. When I saw you going into The Hole, I was pretty sure you were going to kill everyone. Murder was in your eyes. Anyway, you did the right thing by bringing them the flash drive... and not killing them all. The rebels deserve at least that.",
    objectives: [
      SaveTheRebellion_Objective1_LRI,
      SaveTheRebellion_Objective1_MSS,
      SaveTheRebellion_Objective1_CSI,
      SaveTheRebellion_Objective2
    ],
    vendor: Artisan,
    level: 0,
}