import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Turncoat } from "@/lib/data/vendors";
import { TigerBay } from "@/lib/data/locations";

const FriendlySuggestion_Objective1: objective = {
    id: "O-SYEMAE",
    name: "Commander",
    description: "Neutralize the LAF commander in Tiger Bay",
    position: [21636.81804307105, 14500.479752588932],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.TURNCOAT, MarkerType.TIGERBAY],
    location: TigerBay
}

export const FriendlySuggestion: task = {
    id: "T-Y94FOM",
    name: "Friendly Suggestion",
    briefing: "Friend, I'm reaching out with another request. You're aware of the LAF occupation at Tiger Bay Central, and I'm well aware of your keen interest in reclaiming that territory. Allow me to propose a bold move: the removal of their commander. Such an action would strike a heavy blow to their morale, given their reliance on his leadership. Why suggest such a drastic measure? Partly to assist a valued client and partly due to a personal grievance. The commander and I have a history, and it's far from pleasant. He failed to support me when I needed it most, a truly disappointing betrayal. But let's focus on the rewards. A substantial one awaits you. Waste no time; let's bring this plan to fruition.",
    debriefing: "Friend, my gratitude knows no bounds. That scoundrel had it coming for far too long; his obstructionism was intolerable. Your action not only benefits me and your company but also contributes to the betterment of this magnificent land!",
    objectives: [
      FriendlySuggestion_Objective1
    ],
    vendor: Turncoat,
    level: 0,
}