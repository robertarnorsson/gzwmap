import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Turncoat } from "~/data/vendors";
import { FortNarith } from "~/data/locations";

const Dragonslayer_Objective1: objective = {
    id: "O-G8JA7C",
    name: "Commander",
    description: "Eliminate the Fort Narith commander",
    position: [11072.3172317327, 14512.068731835068],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.TURNCOAT, MarkerType.FORTNARITH],
    location: FortNarith
}

export const Dragonslayer: task = {
    id: "T-J0FWGB",
    name: "Dragonslayer",
    briefing: "Friend, you have succeeded in weakening your enemies at the military base. I applaud your skills. Now there is only one thing left to do, cut off the dragon's head. The commander himself. I won't pretend that I have nothing against this man. I consider it an insult to this country that such an important military base is run by this foreign dog. I've observed your progress, you've done everything imaginable to break the soldiers bit by bit. It was like watching an artist create his magnum opus. Inspiring. Friend, go and finish your masterpiece. The time is ripe for a change of leadership at the base.",
    debriefing: "Friend, you are an unstoppable force of nature. Such a beautiful display of pure violence. I'm sure even Mr. Handshake will be happy to see your company spread its wings a little further. You have my gratitude for getting rid of the alien worm.",
    objectives: [
      Dragonslayer_Objective1
    ],
    vendor: Turncoat,
    level: 0,
}