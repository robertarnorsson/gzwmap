import { UserData } from "~/context/LocalStorageContext";
import { lz, task } from "~/lib/types";
import { isCanceledTaskCompleted } from "~/lib/utils";

export function getObjectivesTask(tasks: task[], objectiveId: string): task | undefined {
  return tasks.find((task) => task.objectives.some((objective) => objective.id === objectiveId))
}

export function isTaskCanceled(tasks: task[], taskToCheck: task): boolean {
  if (taskToCheck.cancelTaskId) {
    return tasks.some((task) => task.id === taskToCheck.cancelTaskId);
  }
  return false;
}

// Objectives
export function getTotalObjectives(tasks: task[], user: UserData): number {
  const activeTasks = tasks.filter((task) => !isCanceledTaskCompleted(task, tasks, user));
  
  let objectives = activeTasks.flatMap((task) => 
    task.objectives.filter((objective) => !objective.faction)
  );

  if (user.faction) {
    const factionObjectives = activeTasks.flatMap((task) => 
      task.objectives.filter((objective) => objective.faction?.id === user.faction)
    );

    objectives = [...objectives, ...factionObjectives];
  }

  const uniqueObjectives = new Set(objectives.map((obj) => obj.id));

  return uniqueObjectives.size;
}

export function getCompletedObjectives(tasks: task[], completedObjectiveIds: string[]): number {
  const activeTasks = tasks.filter((task) => !isTaskCanceled(tasks, task));

  const objectives = activeTasks.flatMap((task) => task.objectives);

  const completedObjectives = objectives.filter((objective) => 
    completedObjectiveIds.includes(objective.id)
  );

  const uniqueCompletedObjectives = new Set(completedObjectives.map((obj) => obj.id));

  return uniqueCompletedObjectives.size;
}

// Tasks
export function getTotalTasks(): number {
  return 1;
}

export function getCompletedTasks(): number {
  return 1;
}

// Landing Zone
export function getTotalLZs(lzs: lz[], factionId?: string): number {
  const nonFactionLZs = lzs.filter((lz) => lz.faction === undefined);

  if (factionId) {
    const factionLZs = lzs.filter((lz) => lz.faction?.id === factionId);
    return nonFactionLZs.length + factionLZs.length;
  }

  return lzs.length;
}

export function getDiscoveredLZs(lzs: lz[], discoveredLZs: string[], factionId: string): number {
  const nonFactionLZs = lzs.filter((lz) => lz.faction === undefined);
  const nonFactionDiscoveredLZs = nonFactionLZs.filter((lz) => discoveredLZs.includes(lz.id));

  if (factionId) {
    const factionLZs = lzs.filter((lz) => lz.faction?.id === factionId);
    const factionDiscoveredLZs = factionLZs.filter((lz) => discoveredLZs.includes(lz.id));

    return factionDiscoveredLZs.length + nonFactionDiscoveredLZs.length;
  }

  return nonFactionDiscoveredLZs.length;
}