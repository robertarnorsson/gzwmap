import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Artisan } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";
import { Difficulty4 } from "@/lib/data/difficulty";

const ArtisansList_Objective1: objective = {
    id: "O-AQLPSL",
    name: "List of Evacuees",
    description: "Retrieve a list of evacuess from the UNLRA refugee camp in Tiger Bay",
    position: [21935.437536824877, 14851.26456091809],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.ARTISAN, MarkerType.TIGERBAY, MarkerType.DIFFICULTY_4],
    location: TigerBay,
    difficulty: Difficulty4
}

export const ArtisansList: task = {
    id: "T-WLS0YS",
    name: "Artisan's List",
    briefing: "Mercenary, you have to do something for me. Don't worry, I know you lot wouldn't save your own mothers from a nursing home fire if they didn't pay you upfront, so rest assured that you will be rewarded. I think even you can now agree that what the UN did here was a total sham. It wasn't an evacuation; it was expulsion, and I won't stop until I know why. I need you to head out to the UNLRA camp in Tiger Bay and find any relevant documentation. Start with a list of evacuees. I need to know who got out, at least according to them, and why some were left behind. I refuse to believe this all wasn't a part of some sick fucking plan. Well? What are you waiting for?",
    debriefing: "Look at this shit! This isn't a list of evacuess, but a list of people that were forbidden to leave the island! I knew there was something else going on here!",
    objectives: [
      ArtisansList_Objective1
    ],
    vendor: Artisan,
    level: 0,
    difficulty: Difficulty4
}