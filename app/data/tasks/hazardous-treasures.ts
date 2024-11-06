import {MarkerType, ObjectiveType, objective, task} from "~/lib/types";
import {Handshake} from "~/data/vendors";
import { BanPa, BlueLagoon, HuntersParadise, PhaLangAirfield, Sawmill, YBL1 } from "~/data/locations";
import { SMOstrg } from "~/data/keys/sawmill";
import { HPWep } from "~/data/keys/hunters-paradise";
import { PLAStrg } from "~/data/keys/pha-lang-airfield";

const HazardousTreasures_Objective1: objective = {
    id: "O-CU3VR6",
    name: "Eliminate (Sawmill)",
    description: "Eliminate 10 hostiles at Sawmill",
    position: [10338.581243139115, 17361.701847856064],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.SAWMILL],
    location: Sawmill
}

const HazardousTreasures_Objective2: objective = {
    id: "O-96FFAD",
    name: "Container (Sawmill)",
    description: "Retrieve the container from Sawmill",
    position: [10308.675731601135, 17317.32988742429],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-sawmill.webp",
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.SAWMILL],
    location: Sawmill,
    key: SMOstrg
}

const HazardousTreasures_Objective3: objective = {
    id: "O-ZNYVQG",
    name: "Eliminate (Blue Lagoon)",
    description: "Eliminate 10 hostiles at Blue Lagoon",
    position: [22719.24375249368, 12216.951908114108],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.BLUELAGOON],
    location: BlueLagoon
}

const HazardousTreasures_Objective4: objective = {
    id: "O-OJEVLH",
    name: "Container (Blue Lagoon)",
    description: "Retrieve the container from Blue Lagoon",
    position: [22785.68694339168, 12197.50006123458],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-blue-lagoon.webp",
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.BLUELAGOON],
    location: BlueLagoon
}

const HazardousTreasures_Objective5: objective = {
    id: "O-KIVOEL",
    name: "Eliminate (Hunters Paradise)",
    description: "Eliminate 10 hostiles at Hunters Paradise",
    position: [14255.009359179032, 21973.35754681658],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise
}

const HazardousTreasures_Objective6: objective = {
    id: "O-0KD7NY",
    name: "Container (Hunters Paradise)",
    description: "Retrieve the container from Hunters Paradise",
    position: [14159.81469349933, 22007.76764842343],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-hunters-paradise.webp",
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.HUNTERSPARADISE],
    location: HuntersParadise,
    key: HPWep
}

const HazardousTreasures_Objective7: objective = {
    id: "O-6OGJA9",
    name: "Eliminate (Ban Pa)",
    description: "Eliminate 10 hostiles at Ban Pa",
    position: [23089.767597996575, 16070.757603081283],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.BANPA],
    location: BanPa
}

const HazardousTreasures_Objective8: objective = {
    id: "O-RDJSSQ",
    name: "Container (Ban Pa)",
    description: "Retrieve the container from Ban Pa",
    position: [23047.267597996575, 15985.757603081283],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-ban-pa.webp",
    note: "You can find the container in the Elder's House upstairs under a pink table.",
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.BANPA],
    location: BanPa
}

const HazardousTreasures_Objective9: objective = {
    id: "O-JR3YYG",
    name: "Eliminate (Pha Lang Airfield)",
    description: "Eliminate 10 hostiles at Pha Lang Airfield",
    position: [18633.696966059757, 19947.307636785845],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield
}

const HazardousTreasures_Objective10: objective = {
    id: "O-YSM98T",
    name: "Container (Pha Lang Airfield)",
    description: "Retrieve the container from Pha Lang Airfield",
    position: [18547.62469130929, 19658.656022310017],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-airfield.webp",
    note: "You will need a PLA STRG key. The container is behind the desk.",
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield,
    key: PLAStrg
}

const HazardousTreasures_Objective11: objective = {
    id: "O-HLAQSF",
    name: "Eliminate (YBL-1)",
    description: "Eliminate 10 hostiles at YBL-1",
    position: [11071.218423652977, 13112.975395786707],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.YBL1],
    location: YBL1
}

const HazardousTreasures_Objective12: objective = {
    id: "O-1BI5OD",
    name: "Container (YBL-1)",
    description: "Retrieve the container from YBL-1",
    position: [10983.47018390438, 12987.693226897089],
    type: ObjectiveType.COLLECT,
    image: "/objectives/hazardous-treasures-ybl-1.webp",
    note: "Back room in the office with wooden wall panels next to the communications room.",
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.YBL1],
    location: YBL1
}

export const HazardousTreasures: task = {
    id: "T-6J3QNM",
    name: "Hazardous Treasures",
    briefing: "Listen up! I've got an important task for you, and I need your full commitment, okay? We got reports of materials being transported from Ground Zero, and they are popping all over the place. It is of utmost importance that we secure them all. The boss was very clear about that, so I suggest you stop whatever you're doing and focus strictly on this. The reports are still coming in, and I'm gonna keep updating you as you progress. What we know now is that those paramilitaries at the Sawmill got a hold of one of the containers used to transport whatever is in there, so pack your gear, head out there, neutralize any threats, and secure the cargo. By the time you're done, we'll hopefully have more info about other possible points of interest. Understood? Good. Don't waste any time, and get to it!",
    debriefing: "Fantastic! I know this shit wasn't easy, but you've exceeded all expectations. The boss is gonna be fucking ecstatic! I think you're starting to figure out that whatever is in these is very important to him and absolutely crucial for our mission here. I'd tell you more, but I'm afraid I know as much as you. But hey, why ask questions when the pay is so good, right?",
    objectives: [
        HazardousTreasures_Objective1,
        HazardousTreasures_Objective2,
        HazardousTreasures_Objective3,
        HazardousTreasures_Objective4,
        HazardousTreasures_Objective5,
        HazardousTreasures_Objective6,
        HazardousTreasures_Objective7,
        HazardousTreasures_Objective8,
        HazardousTreasures_Objective9,
        HazardousTreasures_Objective10,
        HazardousTreasures_Objective11,
        HazardousTreasures_Objective12,
    ],
    vendor: Handshake,
    level: 0,
    key: [
        SMOstrg,
        HPWep,
        PLAStrg
    ]
}