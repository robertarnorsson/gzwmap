import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";

const Unnameable_Objective1: objective = {
    id: "N/A",
    name: "Staff Member",
    description: "Find out what happened to the UNLRA staff member",
    position: [21546.4900653007, 14949.250961683314],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.TIGERBAY],
    location: TigerBay,
    note: "The body is on a bed on the second floor"
}

export const Unnameable: task = {
    id: "N/A",
    name: "Unnameable",
    briefing: `It seems that UNLRA is doing their best to avoid answering any questions from the public, even refusing to provide information to the families of their employees. We've been contacted by the family of one of their personnel, asking for our assistance in locating their missing relative. The last contact they had with him was just before he embarked on some sort of "expedition" into the jungle, likely towards Ground Zero. From communication transcripts provided by his relatives, we know he wasn't staying at the UNLRA camp; instead, he managed to secure a room somewhere north of Tiger Bay Central. He frequently complained about the smell of fried seafood, so there's likely a restaurant nearby. How he managed to arrange that, I have no idea, but it suggests someone may have been keeping a close eye on him. Try to find him, or at least uncover what happened to him, okay?`,
    debriefing: "Damn, it looks like he went insane after witnessing whatever is happening in Ground Zero and subsequently committed suicide. Shit. It's like from some messed up horror flick. What the hell is happening in that part of the island?",
    objectives: [
      Unnameable_Objective1
    ],
    vendor: Gunny,
    level: 0,
}