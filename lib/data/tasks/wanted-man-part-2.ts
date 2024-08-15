import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import { FortNarith } from "@/lib/data/locations";

const WantedManPartTwo_Objective1: objective = {
    id: "O-KZW0JW",
    name: "Transcript",
    description: "Retrieve the interrogation transcript and report back to Gunny",
    position: [10761.66835424005, 14961.690889668995],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.GUNNY, MarkerType.FORTNARITH],
    location: FortNarith
}

export const WantedManPartTwo: task = {
    id: "T-J60CPW",
    name: "Wanted Man II",
    briefing: "The intel you got last time was really helpful, but we need a little more. According to the documents, our favorite prisoner was interrogated in the barracks. I am sure the Lamangese used progressive interview methods, so there must be a transcript from which we can squeeze more knowledge. If we are to continue our missions in Lamang, we need to make sure we know as much as possible about these guys. Go to the Fort Narith barracks and inspect them thoroughly. I want to know everything there is to know about this swine.",
    debriefing: "It appears that the guys took a beating as well. According to this file, they suffered heavy casualties. Great news! The bastards got their own medicine. We need to get more intel on these mysterious professionals. There's still too much we don't know that could cost us dearly.",
    objectives: [
        WantedManPartTwo_Objective1
    ],
    vendor: Gunny,
    level: 0,
}