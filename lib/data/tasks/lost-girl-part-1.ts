import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";

const LostGirl_Objective1: objective = {
    id: "N/A",
    name: "Info",
    description: "Find any info regarding the missing girl",
    position: [21940.622998078896, 14495.789450336171],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.TIGERBAY],
    location: TigerBay
}

export const LostGirl: task = {
    id: "N/A",
    name: "Lost Girl",
    briefing: "We've received a tip about a tourist who was behaving strangely and didn't evacuate with the others. This individual is described as an athletic-looking white male who vanished just before the chaos erupted. While it's possible he's just a random person acting oddly, I have my doubts. It seems unlikely that someone would vanish right before shit hit the fan. I need you to investigate this mysterious individual. Our source claims he was staying at a house somewhere west of the Tiger Bay Central shopping center, so focus your search there. I have a feeling we will find something interesting.",
    debriefing: "So, according to your findings, she went to the Blue Lagoon. I hope we can return her safely to her parents. A happy family reunion is something of a miracle in these places, but God knows I wouldn't wish for anything else.",
    objectives: [
      LostGirl_Objective1
    ],
    vendor: Gunny,
    level: 0,
}