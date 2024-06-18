import {MarkerType, ObjectiveType, objective, task} from "@/lib/types";
import {Handshake} from "@/lib/data/vendors";
import { Sawmill } from "../locations";

const IWentISawIConqueredPartTwo_Objective1: objective = {
    id: "N/A",
    name: "Long Table",
    description: "Explore the sawmill and find out the hostile group's intentions",
    position: [10260.132001749596, 17412.88650657878],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.SAWMILL],
    location: Sawmill
}

export const IWentISawIConqueredPartTwo: task = {
    id: "N/A",
    name: "I went, I saw, I conquered - Part 2",
    briefing: "All right, it's confirmed: we've got hostiles at the sawmill. Now the big question is, who the hell are they, and what's their game? We've received reports indicating that they might not even be local, which makes this entire situation even worse. Just what we needed, more assholes trying to pick this damn island apart. Great. Anyway, I need you to infiltrate the compound and report back with anything that‘ll help us find out what we’re dealing with here before we make a move. Think you're up for it?",
    debriefing: "Well, this is just getting better and better, doesn’t it? Not only are they supposedly some assholes from afar, but from what you’re telling me, they’re making fucking explosives! Only God knows what they’re planning to do with them… This has to be dealt with pronto, understand?",
    objectives: [
        IWentISawIConqueredPartTwo_Objective1
    ],
    vendor: Handshake,
    level: 0,
}