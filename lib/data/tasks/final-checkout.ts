import {ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";

const FinalCheckout_Objective1: objective = {
    name: "Final Check Out - Purple Suitcase",
    description: "Look for the purple spinner case standing upright adjacent to the wooden post, underneath the Hangar.",
    position: [0.8693285941867842, -0.6031751632690431],
    type: ObjectiveType.DISCOVER,
}


export const FinalCheckout: task = {
    name: "Final Check Out",
    briefing: "I have another client on the line who is very much interested in the airfield. Apparently, he booked a vacation for his wife to visit this POS country, but she never made it back. Her name was in the manifest database, so we know she arrived here a week before the Event and stayed at the Midnight Sapphire Resort. The question is, what happened to her after that? I need you to go to the airfield, rummage through some baggage, and look for a purple suitcase. From what we know, pretty much everyone staying at the resort tried to use the airfield as their first means of evacuation, so there’s a significant likelihood she was among them. If the suitcase is still there, well, chances are that she will not be coming home anytime soon, and that’s exactly what the client wants to confirm…",
    debriefing: "So you found it, eh? I’d normally say it’s a shame, but from what I understood, my client will be more than happy with this outcome. Wouldn’t be my first choice how to get out of a shitty marriage, but hey, as long as they’re paying, I’m not judging.",
    objectives: [
        FinalCheckout_Objective1,
    ],
    vendor: Handshake,
    level: 0,
}