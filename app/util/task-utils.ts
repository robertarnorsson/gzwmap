import { lz, objective, task } from "~/lib/types";

export function getTaskFromObjective(tasks: task[], objective: objective): task | null {
  for (const task of tasks) {
    if (task.objectives.includes(objective)) {
      return task;
    }
  }
  return null;
}

export function isObjectiveFromCanceledTask(tasks: task[], task: task, completedObjectiveIds: string[], factionId?: string): boolean {
  if (!task.cancelTaskId) return false;

  const cancelTask = tasks.find(t => t.id === task.cancelTaskId);
  if (!cancelTask) return false;

  return cancelTask.objectives.some(obj => {
    const isFactionMatch = !obj.faction || (factionId && obj.faction.id === factionId);
    return isFactionMatch && completedObjectiveIds.includes(obj.id);
  });
}

export function getCompletedTasks(tasks: task[], completedObjectiveIds: string[], factionId?: string): number {
  return tasks.filter(task => {
    const relevantObjectives = task.objectives.filter(
      obj => !obj.faction || (factionId && obj.faction.id === factionId)
    );

    return relevantObjectives.every(obj => completedObjectiveIds.includes(obj.id));
  }).length;
}

export function getCompletableTasks(tasks: task[], completedObjectiveIds: string[], factionId?: string): number {
  const visitedTasks = new Set<string>();
  let totalCompletableTasks = 0;

  for (const task of tasks) {
    if (visitedTasks.has(task.id)) continue;

    const isCanceled = task.cancelTaskId
      ? tasks.some(
          t =>
            t.id === task.cancelTaskId &&
            t.objectives.some(
              obj =>
                completedObjectiveIds.includes(obj.id) &&
                (!obj.faction || (factionId && obj.faction.id === factionId))
            )
        )
      : false;

    if (isCanceled) continue;

    const relevantObjectives = task.objectives.filter(
      obj => !obj.faction || (factionId && obj.faction.id === factionId)
    );

    if (relevantObjectives.length > 0) {
      totalCompletableTasks++;

      visitedTasks.add(task.id);
      if (task.cancelTaskId) visitedTasks.add(task.cancelTaskId);
    }
  }

  return totalCompletableTasks;
}

export function getCompletedObjectives(tasks: task[], completedObjectiveIds: string[], factionId?: string): number {
  const completedObjectives: objective[] = [];

  for (const task of tasks) {
    const relevantObjectives = task.objectives.filter(
      obj =>
        completedObjectiveIds.includes(obj.id) &&
        (!obj.faction || (factionId && obj.faction.id === factionId))
    );

    completedObjectives.push(...relevantObjectives);
  }

  return completedObjectives.length;
}

export function getCompletableObjectives(tasks: task[], completedObjectiveIds: string[], factionId?: string): number {
  const visitedTasks = new Set<string>();
  let totalCompletableObjectives = 0;

  for (const task of tasks) {
    if (visitedTasks.has(task.id)) continue;

    const isCanceled = task.cancelTaskId
      ? tasks.some(
          t =>
            t.id === task.cancelTaskId &&
            t.objectives.some(
              obj =>
                completedObjectiveIds.includes(obj.id) &&
                (!obj.faction || (factionId && obj.faction.id === factionId))
            )
        )
      : false;

    if (isCanceled) continue;

    const relevantObjectives = task.objectives.filter(
      obj => !obj.faction || (factionId && obj.faction.id === factionId)
    );

    totalCompletableObjectives += relevantObjectives.length;

    visitedTasks.add(task.id);
    if (task.cancelTaskId) visitedTasks.add(task.cancelTaskId);
  }

  return totalCompletableObjectives;
}

export function getDiscoveredLZs(lzs: lz[], discoveredLZIds: string[], factionId?: string): number {
  return lzs.filter(lz => {
    if (!discoveredLZIds.includes(lz.id)) return false;
    return !lz.faction || (factionId && lz.faction.id === factionId);
  }).length;
}

export function getDiscoverableLZs(lzs: lz[], factionId?: string): number {
  return lzs.filter(lz => {
    return !lz.faction || (factionId && lz.faction.id === factionId);
  }).length;
}