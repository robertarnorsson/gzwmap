import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Banshee } from "~/data/vendors";
import { MidnightSapphire } from "~/data/locations";

const FelonyAndPunishment_Objective1: objective = {
    id: "O-KATO91",
    name: "Smartphone",
    description: "Retrieve the smartphone and report back to Banshee",
    position: [16905.6593855409, 21556.476456254713],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire
}

export const FelonyAndPunishment: task = {
    id: "T-J4JCA2",
    name: "Felony And Punishment",
    briefing: "Listen, I know your superior asked you to retrieve some kompromat, and I know you recently managed to acquire another one. Last time, I wasn't quick enough to make you a counteroffer, but today, it is different. I am still gathering evidence against the Lamang government and all the people involved in the crimes against the local people. Help me put them behind bars. I know the reward for the smartphone is big, but this can really help us in our case.",
    debriefing: "Thank you for your help. I cannot tell you who the congressman is in the photos and videos on the phone, but you should know that this will not be swept under the rug. The congressman is identifiable and explicitly committing acts of rape, torture, and murder. It's good that this material has come to us.",
    objectives: [
      FelonyAndPunishment_Objective1
    ],
    vendor: Banshee,
    level: 0,
}