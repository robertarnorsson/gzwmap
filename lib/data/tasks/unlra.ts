import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";

const Unlra_Objective1: objective = {
    id: "N/A",
    name: "Intel",
    description: "Retrieve intel form the UNLRA camp in Tiger Bay and report back to Handshake",
    position: [22007.015255271213, 14880.138988306579],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay,
    image: "/objectives/unlra.webp"
}

export const Unlra: task = {
    id: "N/A",
    name: "UNLRA",
    briefing: "What do you think about the UN's involvement in everything that has happened on this island, buddy? I feel like there's something wrong here. I can't put my finger on it, but something doesn't add up. Don't get me wrong, this fucking country needed outside intervention like no other, but the UNLRA operating here, doing the bare minimum? Suspicious, man. Very suspicious. I'm pretty sure you're as intrigued as I am, so I want you to go to Tiger Bay and investigate. Bring me back something that answers my questions. Try to find something in the refugee camp.",
    debriefing: "The UNLRA was here because of the humanitarian crisis and blah blah blah, we all know that shit, right? However, the preparations they made are pretty suspicious. According to these documents, it looks like they knew something was going to happen here. Very interesting.",
    objectives: [
      Unlra_Objective1
    ],
    vendor: Handshake,
    level: 0,
}