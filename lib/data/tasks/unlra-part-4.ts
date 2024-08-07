import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";

const UnlraPartFour_Objective1: objective = {
    id: "N/A",
    name: "Intel",
    description: "Retrieve the intel from UNLRA HQ and report back to Handshake",
    position: [22173.11008348653, 15035.671663064282],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay
}

export const UnlraPartFour: task = {
    id: "N/A",
    name: "UNLRA IV",
    briefing: "Hey man. I need to know what happened to the UN group that was sent to the GZ. There must be some intel that will satisfy my curiosity. The UNLRA knew what was going to happen and were prepared from the beginning. Yet they didn't stay in Lamang even though they had been operating here for a long time. What the hell happened that they felt the need to leave the island in such a hurry? Go to the Tiger Bay area and look for documents that might be related to their journey. Check out their HQ.",
    debriefing: "Unusual phenomena, mutated vegetation, contaminated animals and people... Well, well, well, we got ourselves into some pretty strange territory. Not only that, but it looks like those UNLRA idiots also had some close encounters with whoever caused our unfortunate setback some time ago. I have to say, this feels more and more like a fucking dumpster fire. I think I need to have a few word with the boss...",
    objectives: [
      UnlraPartFour_Objective1
    ],
    vendor: Handshake,
    level: 0,
}