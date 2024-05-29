import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import { YBL1 } from "../locations";

const TheNegotiator_Objective1: objective = {
    id: "",
    name: "Negotiator",
    description: "Find the negotiator in the room Office 2",
    position: [11014.03902408218, 12968.448916078934],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.GUNNY, MarkerType.YBL1],
    location: YBL1
}

export const TheNegotiator: task = {
    id: "",
    name: "The Negotiator",
    briefing: "We've got a big problem. Our enlightened head operator sent a bunch of our boys to negotiate a cease-fire with those rebels you found in the old Soviet bunker, and guess what happened? They didn't return and we lost contact with them. Shit! I told that wise-ass it was a bad idea to send them there, but he insisted that the potential danger was lower than the possible return. What bullshit! I know the kind of people these rebels are. They are ruthless brutes and intransigent extremists. To them we are just intruders who have invaded their land, no better than the corrupt Lamang army. All the negotiation nonsense was doomed from the start. Go to the bunker and find out what happened to our men and bring them back if possible. I hope it's not too late. Don't hold back, weapons free. The time has come to end this farce and do what we are best at.",
    debriefing: "They tortured them? Goddamn animals! Just like I said. These so-called rebels are nothing but thugs. All of this could have been avoided. We're understaffed and still act like losing a few men is no problem. Absolutely unnecessary deaths.",
    objectives: [
        TheNegotiator_Objective1
    ],
    vendor: Gunny,
    level: 0,
}