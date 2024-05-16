import { ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";

const OutOfTheBlue_Objective1: objective = {
  name: "Intel",
  description: "Retrieve intel about hostile group in the Blue Lagoon and hand it over to Gunny",
  position: [0.5236320253434265, -0.4378223419189453],
  type: ObjectiveType.COLLECT,
  image: "/objectives/out-of-the-blue-intel.webp"
}


export const OutOfTheBlue: task = {
  name: "Out of the Blue",
  briefing: "Hey, I need your help with something. There’s some kind of tourist spot south of Tiger Bay. It looks like it was taken over by some armed locals, and we need to know what their deal is and if they’re gonna cause any trouble. Explore the Blue Lagoon thoroughly and try to locate their hideout. Once there, secure any intel that might give us and idea about their intentions. I think I don’t need to say this, but just in case: don’t do anything stupid, and keep a low profile. I’d be thrilled if you managed to finish this without firing a shot, but I’ll be happy enough if you just get back in one piece, so no stupid shit, ya hear me!?",
  debriefing: "So it’s some kind of local gang, eh? It looks like they might leave us alone if we don’t provoke too much, so try to be nice, and all will be good, okay? I don’t think there’s anything of value in that place anyway, so let’s just avoid it, and focus our efforts elsewhere.",
  objectives: [
    OutOfTheBlue_Objective1,
  ],
  vendor: Gunny,
  level: 0
}