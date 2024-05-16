import { ObjectiveType, objective, task } from "@/lib/types";
import { Banshee } from "@/lib/data/vendors";

const FreshMeatPartOne_Objective1_LRI: objective = {
  name: "Intel",
  description: "Retrieve intel about the true nature of the Blue Lagoon and hand it over to Banshee",
  position: [0.5272610547338238, -0.42889595031738287],
  type: ObjectiveType.COLLECT,
}


export const FreshMeatPartOne: task = {
  name: "Fresh Meat - Part 1",
  briefing: "I understand that the Blue Lagoon isn’t of much interest to your PMC colleagues, but trust me, it is of utmost importance to me. Prior to the Event, this place served as an extremely popular destination for tourists who couldn’t afford accommodations at the Midnight Sapphire. Naturally, there was a lot of drinking and other various substance abuse, which would typically interest me very much. However, beneath the surface, something far more sinister was at play. The Blue Lagoon has long been associated with numerous missing persons cases. Tourists have been vanishing in and around this vicinity for years, and now it's time to uncover the truth. Given that the gang currently occupying the palace is likely the same one that operated there previously, they may possess valuable insights into their illicit activities. Explore the Lagoon thoroughly, try searching any administrative buildings, and retrieve any intel that might help us to figure out what exactly was going on there.",
  debriefing: "I am afraid the truth is even more vile than we could possibly imagine. This wasn’t just some gang making money through human trafficking. Everything here suggests that they were on the government’s payroll, providing “fresh meat” to various establishments around the country. There are also other cryptic notes, but I can’t be sure what they mean yet. This is not over; we’ll need to work on this more!",
  objectives: [
    FreshMeatPartOne_Objective1_LRI,
  ],
  vendor: Banshee,
  level: 0
}