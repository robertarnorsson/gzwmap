import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";

const ReconnaissanceInForce_Objective1: objective = {
    id: "O-FK0IJT",
    name: "Client List",
    description: "Neutralize soldiers in the military base",
    position: [11027.612314641116, 14756.69353649419],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.FORTNARITH],
    location: FortNarith
}

export const ReconnaissanceInForce: task = {
    id: "T-JPLZYN",
    name: "Reconnaissance In Force",
    briefing: "I've got a new recon mission for you, champ. But this time a bit more interesting. A bit more action packed! I want you to go to the military base and test their defenses. Wreak havoc among the soldiers and look for soft spots. We need to know how many soldiers are still on the base and how well-organized they are. And make it look like we are bigger than the reality is. You know, Michael Bay stuff. Our enemies don't need to know the truth.",
    debriefing: "Well done, champ. Your first-rate acts of violence have helped us tremendously. The military base seems to be poorly guarded. They don't have enough soldiers to guard every perimeter, which gives us a big advantage. We can plan missions inside the military base and gradually conquer the place.",
    objectives: [
      ReconnaissanceInForce_Objective1
    ],
    vendor: Handshake,
    level: 0,
}