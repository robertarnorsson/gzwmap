import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";
import { Lusia } from "@/lib/data/keys/midnight-sapphire";

const TerminalInitiative_Objective1: objective = {
    id: "N/A",
    name: "LAF Forces FN",
    description: "Eliminate the LAF forces at Fort Narith",
    position: [11086.27122459803, 14554.50643900907],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay
}

const TerminalInitiative_Objective2: objective = {
    id: "N/A",
    name: "Container FN",
    description: "Retrieve the container from Fort Narith",
    position: [11067.497649117393, 14473.098874874215],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay
}

const TerminalInitiative_Objective3: objective = {
    id: "N/A",
    name: "LAF Forces TB",
    description: "Eliminate the LAF forces at Tiger Bay",
    position: [21678.035130260203, 14445.675610064356],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay
}

const TerminalInitiative_Objective4: objective = {
    id: "N/A",
    name: "Container TB",
    description: "Retrieve the container from Tiger Bay",
    position: [21714.396774698176, 14492.672423344402],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay
}

const TerminalInitiative_Objective5: objective = {
    id: "N/A",
    name: "LAF Forces MS",
    description: "Eliminate the LAF forces at Midnight Sapphire",
    position: [16637.795396956935, 21662.69532113455],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay
}

const TerminalInitiative_Objective6: objective = {
    id: "N/A",
    name: "Container MS",
    description: "Retrieve the container from Midnight Sapphire",
    position: [16621.70751622416, 22088.397053061508],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay,
    key: Lusia
}

export const TerminalInitiative: task = {
    id: "N/A",
    name: "Terminal Initiative",
    briefing: "Here we go, the final stretch! The LAF has been conducting more and more operations in Ground Zero and, despite heavy casualties, securing valuable materials from within. We cannot let this continue! The boss was very clear on this. We have to do whatever it takes to get hold of those containers. I know you've done this before, but not like this. Expect heavy resistance, the LAF knows damn well what they are doing, and they won't surrender the cargo without a fight. Whatever happened here during the Event, these things are the key to it all. The boss needs to have them, and we're gonna get them for him. This is why we are here. Do you understand? It all comes down to this. I hope you're ready.",
    debriefing: "You fucking did it! Great job, man. Your performance during this entire op was nothing short of exceptional. We might have had our differences, but I knew I could count on you. The containers you secured are gonna be sent to a company lab off-site and studied inside out. I can tell you that we are on the verge of something fucking historical. The stuff that's inside... let's just say it will make us richer beyond our wildest dreams! It might take some time, but I promise you this: Once we are prepared, we will take over Ground Zero and find out exactly what happened there. Trust me, this is far from over...",
    objectives: [
      TerminalInitiative_Objective1,
      TerminalInitiative_Objective2,
      TerminalInitiative_Objective3,
      TerminalInitiative_Objective4,
      TerminalInitiative_Objective5,
      TerminalInitiative_Objective6,
    ],
    vendor: Handshake,
    level: 0,
    key: [
        Lusia
    ]
}