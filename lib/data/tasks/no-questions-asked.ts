import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Turncoat } from "@/lib/data/vendors";
import { MidnightSapphire } from "@/lib/data/locations";

const NoQuestionsAsked_Objective1: objective = {
    id: "",
    name: "Pile Of Gold",
    description: "Retrieve the Pile Of Gold from villa Anna Jana in Midnight Sapphire",
    position: [16667.21836378558, 21300.81646078751],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.MIDNIGHTSAPPHIRE],
    location: MidnightSapphire,
    note: "You will need the Villa Anna Jana Key"
}

const NoQuestionsAsked_Objective2: objective = {
  id: "",
  name: "Precious Cigars",
  description: "Retrieve the Precious Cigars from villa Marta Monica in Midnight Sapphire",
  position: [16725.79848270433, 21523.330052395628],
  type: ObjectiveType.COLLECT,
  types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.TURNCOAT, MarkerType.MIDNIGHTSAPPHIRE],
  location: MidnightSapphire
}

export const NoQuestionsAsked: task = {
    id: "",
    name: "No Questions Asked",
    briefing: "Friend, I was hoping you could do me a small favor. My friend left his most valuable possessions at the Midnight Sapphire Resort. There was panic and chaos everywhere, so it's not inconceivable. He's very upset that he can't get his stuff back, and when I mentioned that I was working with a very talented PMC friend who has helped me out on more than one occasion, he asked if I could persuade you to help with this little task. I can guarantee you won't be disappointed with the reward. Just go to the resort, find the valuables, and bring back what my friend stored there. He left his belongings at Villa Anna Jana and Villa Marta Monica. Gold and Cuban cigars, he told me. Or was it Golden Cuban cigars? Guess you'll have to find out for yourself.",
    debriefing: `Friend, you are a savior. I love that you don't ask too many questions. A prime example of the "don't ask, don't tell" attitude. It's great to see that even though you're a foreigner, you still care about the welfare of the local people. I will spread good news about you.`,
    objectives: [
      NoQuestionsAsked_Objective1,
      NoQuestionsAsked_Objective2,
    ],
    vendor: Turncoat,
    level: 0,
}