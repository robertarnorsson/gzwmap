import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Artisan } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";

const CrimeDoesntPay_Objective1: objective = {
    id: "N/A",
    name: "Deesabun Nguyen",
    description: "Search the Midnight Sapphire and uncover what happened to Deesabun Nguyen",
    position: [15935.922245949592, 21366.965655260585],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.ARTISAN, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const CrimeDoesntPay: task = {
    id: "N/A",
    name: "Crime Doesn't Pay",
    briefing: "Hey, merc. It seems you've taken a liking to Midnight Sapphire; I'm not too surprised; after all, it was made for foreign scumbags. I guess it must feel like home to you and your kind. The place was a fucking paradise for people who could afford it but a hellhole for those who had to work there. They were nothing more than slaves to the rich bastards who thought they could do anything to these poor people. I know it's not your business to have empathy, but I know you won't turn down a paying job. I want you to go there and look for an employee named Deesabun Nguyen who has mysteriously disappeared. Try to look south of the golf club where the employees live. That's all. Go and enjoy your stay at the Midnight Sapphire sell-out Soldier.",
    debriefing: "So they tortured him and then executed him for some petty crime like stealing. Fucking Midnight Sapphire! This is what I was talking about. You foreigners have no compassion for us, you only bring death and disaster.",
    objectives: [
      CrimeDoesntPay_Objective1
    ],
    vendor: Artisan,
    level: 0,
}