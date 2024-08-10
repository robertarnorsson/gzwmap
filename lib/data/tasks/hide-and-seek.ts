import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";

const HideAndSeek_Objective1: objective = {
    id: "O-IPE8UN",
    name: "LAF Hideout",
    description: "Find the LAF hideout in Tiger Bay Central",
    position: [21671.468298158376, 14504.860015962191],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.HANDSHAKE, MarkerType.TIGERBAY],
    location: TigerBay,
    note: 'Objective is in the "amazing shoes shop"'
}

export const HideAndSeek: task = {
    id: "T-TFPXJQ",
    name: "Hide And Seek",
    briefing: "Hey, man. How are you feeling about another recon mission? The LAF has turned Tiger Bay Central into their stronghold and revamped the shops to fit their agenda. We've got some intel, but we need the full picture. We're lacking details on their hideout inside the shopping center, and it'd be a game-changer if we could pinpoint their exact location. That's where you come in. I won't sugarcoat it; this task won't be a walk in the park. They've fortified the shopping complex, making it nearly impossible to breach. So, gear up accordingly.",
    debriefing: "Nice work, buddy. Knowing their exact positions works in our favor. Finally, some good news for once. Get some rest.",
    objectives: [
      HideAndSeek_Objective1
    ],
    vendor: Handshake,
    level: 0,
}