import { key, lz, objective, task } from "~/lib/types";

export function getTaskFromObjective(tasks: task[], objective: objective): task | null {
  for (const task of tasks) {
    if (task.objectives.includes(objective)) {
      return task;
    }
  }
  return null;
}

export function getFactionObjectives(
  task: task,
  factionId?: string
): objective[] {
  return task.objectives.filter(obj => {
    return !obj.faction || (factionId && obj.faction.id === factionId);
  });
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

export function isTaskCanceled(tasks: task[], task: task, completedObjectiveIds: string[], factionId?: string): boolean {
  if (!task.cancelTaskId) return false;

  const cancelTask = tasks.find(t => t.id === task.cancelTaskId);
  if (!cancelTask) return false;

  // Check if any objectives in the cancelTask are completed
  return cancelTask.objectives.some(obj => {
    const isFactionMatch = !obj.faction || (factionId && obj.faction.id === factionId);
    return isFactionMatch && completedObjectiveIds.includes(obj.id);
  });
}

export function isTaskCompleted(task: task, completedObjectiveIds: string[], factionId?: string): boolean {
  const relevantObjectives = task.objectives.filter(
    obj => !obj.faction || (factionId && obj.faction.id === factionId)
  );

  return relevantObjectives.every(obj => completedObjectiveIds.includes(obj.id));
}

export function isKeyCollected(
  cKey: key,
  collectedKeyIds: string[],
  factionId?: string
): boolean {
  const isFactionMatch = (!cKey.faction || (factionId && cKey.faction.id === factionId)) as boolean;
  return isFactionMatch && collectedKeyIds.includes(cKey.id);
}

export function getFactionKeys(
  keys: key[],
  factionId?: string
): key[] {
  return keys.filter(k => {
    return !k.faction || (factionId && k.faction.id === factionId);
  }) || [];
}

export function isTaskCompletable(tasks: task[], task: task, completedObjectiveIds: string[], factionId?: string): boolean {
  if (isTaskCanceled(tasks, task, completedObjectiveIds, factionId)) return false;

  const relevantObjectives = task.objectives.filter(
    obj => !obj.faction || (factionId && obj.faction.id === factionId)
  );

  return relevantObjectives.length > 0;
}

export function isObjectiveCompleted(objective: objective, completedObjectiveIds: string[], factionId?: string): boolean {
  const isFactionMatch = (!objective.faction || (factionId && objective.faction.id === factionId)) as boolean;
  return isFactionMatch && completedObjectiveIds.includes(objective.id);
}

export function isObjectiveCanceled(tasks: task[], objective: objective, completedObjectiveIds: string[], factionId?: string): boolean {
  const parentTask = tasks.find(task => task.objectives.includes(objective));
  if (!parentTask || !parentTask.cancelTaskId) return false;

  const cancelTask = tasks.find(t => t.id === parentTask.cancelTaskId);
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