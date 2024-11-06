import {MarkerType, ObjectiveType, objective, task} from "~/lib/types";
import {Turncoat} from "~/data/vendors";
import { BanPa } from "~/data/locations";

const UninvitedGuests_Objective1: objective = {
    id: "O-12RUBR",
    name: "Hostiles",
    description: "Eliminate 20 hostiles in Ban Pa",
    position: [23068.48549313735, 16053.485681969149],
    type: ObjectiveType.ELIMINATION,
    types: [MarkerType.TASK, MarkerType.ELIMINATION, MarkerType.TURNCOAT, MarkerType.BANPA],
    location: BanPa
}

export const UninvitedGuests: task = {
    id: "T-4WL1PS",
    name: "Uninvited Guests",
    briefing: "Friend, it is a tremendous pleasure to meet you in the flesh. Your actions speak louder than words, and I respect your bold approach to dealing with problems. It reminds me of myself. My real name does not matter, for I am just a mere merchant trying to survive in this harsh world, but for the sake of easier communication you can call me Turncoat. All friends, be they PMCs or other non-aligned individuals on the island, call me that. I specialize in the field of information acquisition and weapons trade, so if you are looking for weapons or intel, I am your humble supplier. I see you have taken an interest in the more… rustic parts of our beautiful island. I assure you that even though this charming hamlet may not look like much, it holds great value that I'd rather not share with some rabid foreign filth. Whoever these people are, they have come here uninvited, and I, for one, can't tolerate such poor manners. If you would be so kind as to explain to these gentlemen that they are not welcome, I shall be more than generous when considering your recompense.",
    debriefing: "Friend, I am in awe of your efficiency. I think they now understand what kind of message we are trying to convey. Let's just hope that we don't have to repeat ourselves. You have my gratitude, and I look forward to our next meeting.",
    objectives: [
        UninvitedGuests_Objective1,
    ],
    vendor: Turncoat,
    level: 0,
}
