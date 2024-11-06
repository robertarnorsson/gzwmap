import { MarkerType, ObjectiveType, objective, task } from "~/lib/types";
import { Handshake } from "~/data/vendors";
import { PhaLangAirfield } from "~/data/locations";

const WhatComesUp_Objective1: objective = {
    id: "O-EV1RA0",
    name: "Flight Recorder",
    description: "Retrieve the flights recorder and report back to Handshake",
    position: [20578.30932298945, 18877.14155488151],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.PHALANGAIRFIELD],
    location: PhaLangAirfield
}

export const WhatComesUp: task = {
    id: "T-33E578",
    name: "What Comes Up",
    briefing: "I have a mission for you that will require a certain amount of discretion. Are you up for it? Good. Thanks to the flight data that you acquired, we now know that there was a plane in the air precisely above the place where shit hit the fan. Naturally, they went down, but everything about their final voyage was stored in a black box, which all these planes carrying rich pricks have as a little extra insurance policy. It is in our best interest that the black box doesn't fall into the wrong hands, so I'll need your help locating it and bringing it back to me. From the manifest, we know that it was a regular night sightseeing flight, starting at Pha Lang Airfield and then heading south over what we now call Ground Zero. We have no idea what happened then, but we may assume they tried to return to the airfield from the southeast and crashed about a klick from the airfield, so I'd start searching there. If the pilot managed to line the plane to the runway, it should be as easy as following its direction, but if not, you'll have to look around a bit.",
    debriefing: "Excellent work, my man! I'll see to it personally that this little thing doesn't cause us any trouble. Could you imagine that someone else would get their grubby hands on it and leak whatever's on there to the outside world? The last thing we need is more publicity, that's for sure.",
    objectives: [
      WhatComesUp_Objective1
    ],
    vendor: Handshake,
    level: 0,
    cancelTaskId: "T-EUBU8Y"
}