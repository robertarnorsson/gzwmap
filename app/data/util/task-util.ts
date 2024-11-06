import { location, objective } from "~/lib/types";
import { Tasks } from "../tasks";

export function getAllObjectivesForLocation(location: location) {
  const objectives: objective[] = []
  Tasks.forEach((task) => {
    task.objectives.filter((objective) => objective.location === location).map((objective) => objectives.push(objective))
  });
  return objectives;
}