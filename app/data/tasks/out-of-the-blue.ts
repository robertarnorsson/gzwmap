import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Gunny } from "~/data/vendors";
import { BlueLagoon } from "~/data/locations";

const OutOfTheBlue_Objective1: objective = {
  id: "O-HDJWR5",
  name: "Intel",
  description: "Retrieve intel about hostile group in the Blue Lagoon and hand it over to Gunny",
  position: [22566.284975706112, 12123.992835127088],
  type: ObjectiveType.COLLECT,
  image: "/assets/objectives/out-of-the-blue-intel.webp",
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.GUNNY, MarkerType.GUNNY, MarkerType.BLUELAGOON],
  location: BlueLagoon
}


export const OutOfTheBlue: task = {
  id: "T-IVBZH1",
  name: "Out of the Blue",
  briefing: "Hey, I need your help with something. There's some kind of tourist spot south of Tiger Bay. It looks like it was taken over by some armed locals, and we need to know what their deal is and if they're gonna cause any trouble. Explore the Blue Lagoon thoroughly and try to locate their hideout. Once there, secure any intel that might give us and idea about their intentions. I think I don't need to say this, but just in case: don't do anything stupid, and keep a low profile. I'd be thrilled if you managed to finish this without firing a shot, but I'll be happy enough if you just get back in one piece, so no stupid shit, ya hear me!?",
  debriefing: "So it's some kind of local gang, eh? It looks like they might leave us alone if we don't provoke too much, so try to be nice, and all will be good, okay? I don't think there's anything of value in that place anyway, so let's just avoid it, and focus our efforts elsewhere.",
  objectives: [
    OutOfTheBlue_Objective1,
  ],
  vendor: Gunny,
  level: 0
}