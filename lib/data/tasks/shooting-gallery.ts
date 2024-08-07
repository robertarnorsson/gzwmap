import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { HuntersParadise } from "../locations";

const ShootingGallery_Objective1: objective = {
    id: "N/A",
    name: "Hostiles",
    description: "Neutralize 20 hostiles at Hunter's Paradise",
    position: [14266.817217745482, 22029.739060036856],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise
}

export const ShootingGallery: task = {
    id: "N/A",
    name: "Shooting Gallery",
    briefing: "So, I'd say we've had just about enough of those assholes occupying the shooting range, wouldn't you agree? It's time for some proper live target practice! Load up your mags, head to Hunter's Paradise, and kick some ass, alright? I'm sure they'll never know what hit them!",
    debriefing: "That's what I like to see, my man! You tore through them like a fucking hurricane! I sure am glad you're on our side.",
    objectives: [
        ShootingGallery_Objective1,
    ],
    vendor: Handshake,
    level: 0,
}
