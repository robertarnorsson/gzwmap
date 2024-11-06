import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import { TigerBay } from "~/data/locations";

const UnlraPartTwo_Objective1: objective = {
    id: "O-UTS8HM",
    name: "Intel",
    description: "Retrieve the intel from an LAF checkpoint and report back to Handshake",
    position: [21631.346898625256, 15511.622555824166],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay
}

export const UnlraPartTwo: task = {
    id: "T-3XIOLO",
    name: "UNLRA II",
    briefing: "Hey man. Something about the UN operation still feels off. How is it possible that so many people have not been evacuated? That is suspicious as hell. The documents from last time mentioned that the UNLRA was here for humanitarian reasons, yet when it came time to act, they didn't do everything in their power to protect the little people. It's just weird... not to mention a waste of our tax money. I want you to go back to the Tiger Bay area and look for files related to the evacuation. Try to search the military checkpoints. LAF has secured the roads around Tiger Bay. I bet they had their own orders on how to approach the UNLRA.",
    debriefing: "Excellent work, my man. These reports and documents are priceless! So, the LAF actively opposed the UN evacuation, and there were even clashes between these two groups. And look at this! The fucking UNLRA had orders not to evacuate certain people. Some big shots must have had a reason to decide that. We have more questions to answer, my man.",
    objectives: [
      UnlraPartTwo_Objective1
    ],
    vendor: Handshake,
    level: 0,
}