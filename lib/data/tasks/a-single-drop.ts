import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import { PhaLangAirfield } from "@/lib/data/locations";

const ASingleDrop_Objective1: objective = {
    id: "N/A",
    name: "First Tanker Truck",
    description: "White truck with gas tank trailer. Interact with the panel that's open on the side of the tank.",
    position: [18551.026055441052, 19752.614250877567],
    type: ObjectiveType.MARK,
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield
}

const ASingleDrop_Objective2: objective = {
    id: "N/A",
    name: "Second Tanker Truck",
    description: "White truck with gas tank trailer. Interact with the panel that's open on the side of the tank.",
    position: [18703.590535590494, 19992.511205904735],
    type: ObjectiveType.MARK,
    image: "/objectives/a-single-drop-second-tanker.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield
}

const ASingleDrop_Objective3: objective = {
    id: "N/A",
    name: "Third Tanker Truck",
    description: "White truck with gas tank trailer. Interact with the panel that's open on the side of the tank.",
    position: [18754.927298622453, 20085.16929079341],
    type: ObjectiveType.MARK,
    image: "/objectives/a-single-drop-third-tanker.webp",
    types: [MarkerType.TASK, MarkerType.MARK, MarkerType.GUNNY, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield
}

export const ASingleDrop: task = {
    id: "N/A",
    name: "A Single Drop",
    briefing: "We are still running dangerously low on fuel and can't afford to waste a single drop. Luckily, I think we found just the place where we can finally get some. There's a small airfield east of the shooting range and southeast of that blight of a resort. If there is any place that's gotta stock some damn fuel, it's definitely this one, so get your ass over there and check any tanker trucks that might have some in it. Once you're done, report back to me pronto. I'll be damned if we can't find any fuel on this rock!",
    debriefing: "You gotta be shitting me! So you're telling me that they were all empty? On a goddamn afield? That does it! Somebody's fucking with us, there's no other way. Either they were quicker and stockpiled all the fuel before we had our chance, or it has to do something with whatever happened over here. I have to say, I'm not too happy about either of those options. Looks like well have to make do.",
    objectives: [
        ASingleDrop_Objective1,
        ASingleDrop_Objective2,
        ASingleDrop_Objective3
    ],
    vendor: Gunny,
    level: 0,
}