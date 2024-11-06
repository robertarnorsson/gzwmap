import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Banshee } from "~/data/vendors";
import { BlueLagoon } from "~/data/locations";
import { BLStrg } from "~/data/keys/blue-lagoon";

const WhatWasLeft_Objective1_LRI: objective = {
  id: "O-3NPE0Q",
  name: "Box of Passports",
  description: "Retrieve the personal documents and hand it over to Banshee",
  position: [22550.467615895264, 12118.705719676276],
  type: ObjectiveType.COLLECT,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.BANSHEE, MarkerType.BLUELAGOON],
  location: BlueLagoon,
  key: BLStrg
}


export const WhatWasLeft: task = {
  id: "T-Z8DSWJ",
  name: "What Was Left",
  briefing: "We have one last thing to finish before continuing our investigation elsewhere. I want to know the identities of at least some of the people who went missing. Even if saving them seems pretty much impossible right now, we have to at least try. If nothing else, they will serve as evidence and could bring some closure to their families and loved ones. I'm sure there has to be a place in the Lagoon where they would store any personal documentation of the tourists after they kidnapped them, so please investigate the area carefully and bring those documents to me.",
  debriefing: "I'm glad that you understand. I think this is all the info we're gonna get from that wretched place. Hopefully, we can uncover more information elsewhere. I have some promising leads lined up and will contact you once I know more. You did very well, thank you.",
  objectives: [
    WhatWasLeft_Objective1_LRI,
  ],
  vendor: Banshee,
  level: 0,
  key: [
    BLStrg
  ]
}