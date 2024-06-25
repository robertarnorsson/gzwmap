import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import { YBL1 } from "../locations";

const LivingInBurrows_Objective1: objective = {
    id: "N/A",
    name: "Water Flitration Unit",
    description: "Check the state of the water filtration unit",
    position: [11032.49929610872, 13040.587987377512],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.YBL1],
    location: YBL1
}

const LivingInBurrows_Objective2: objective = {
  id: "N/A",
  name: "Generator",
  description: "Check the state of the generator",
  position: [11019.99929610872, 13042.087987377512],
  type: ObjectiveType.LOCATE,
  types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.YBL1],
  location: YBL1
}

export const LivingInBurrows: task = {
    id: "N/A",
    name: "Living In Burrows",
    briefing: "From the Soviet bunker reports I wade through, there should be some interesting machinery. Look, you know how it is. We are doing our best to stay afloat, so every piece of technology, or anything useful in general, can mean the difference between life and death. I need you to go to the hideout of those rebels and check if there is anything worth saving. It was a fully functioning bunker with lots of computers and other gadgets, so there should be a pretty powerful generator. Something like that might come in handy. The other thing I want you to examine is the bunker's water filter. I'm certain the Soviets didn't drink the famously contaminated local water without first purifying it. Nobody wants to shit themselves to death. Having a spare filter on hand would alleviate some of the anxiety about the possibility that our technology might stop working. Therefore, inspect the water filter and the generator. These machines are old, but the Soviets built their equipment to last for decades, so it is possible that we could still use them in the future.",
    debriefing: "Shit! I can't say I'm surprised, but it's still a pity. Although the Soviets knew how to build durable machines, nothing can last forever. Considering that the natives probably didn't know how to maintain it, the damage was inevitable. Now it's just a piece of scrap metal. We have to survive with what we have and look for other places where we can scavenge the things we need.",
    objectives: [
        LivingInBurrows_Objective1,
        LivingInBurrows_Objective2,
    ],
    vendor: Gunny,
    level: 0,
}