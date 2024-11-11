import { task, objective } from "~/lib/types";

// Function to get relevant objectives based on the selected faction
const getRelevantObjectives = (tasks: task[], selectedFactionId: string | null): objective[] => {
  return tasks.flatMap(task => 
    task.objectives.filter(objective => {
      if (!objective.faction) {
        return true;
      }

      return selectedFactionId === null || objective.faction.id === selectedFactionId;
    })
  );
};

// Function to get the count of completed objectives
export const getCompletedObjectivesCount = (
  tasks: task[],
  completedObjectives: string[],
  selectedFactionId: string | null
): number => {
  const relevantObjectives = getRelevantObjectives(tasks, selectedFactionId);
  return relevantObjectives.filter(objective => completedObjectives.includes(objective.id)).length;
};

// Function to get the total number of objectives based on the selected faction
export const getTotalObjectivesCount = (tasks: task[], selectedFactionId: string | null): number => {
  const relevantObjectives = getRelevantObjectives(tasks, selectedFactionId);
  return relevantObjectives.length;
};

// Function to get the count of completed tasks based on completed objectives and selected faction
export const getCompletedTasksCount = (
  tasks: task[],
  completedObjectives: string[],
  selectedFactionId: string | null
): number => {
  return tasks.filter(task => {
    const relevantObjectives = task.objectives.filter(objective => {
      return !objective.faction || selectedFactionId === null || objective.faction.id === selectedFactionId;
    });

    if (relevantObjectives.length === 0) {
      return false;
    }

    if (task.notMultiLocation) {
      const objectivesByLocation = relevantObjectives.reduce((acc, objective) => {
        const locationId = objective.location.id;
        if (!acc[locationId]) acc[locationId] = [];
        acc[locationId].push(objective);
        return acc;
      }, {} as Record<string, objective[]>);

      return Object.values(objectivesByLocation).some(objectives =>
        objectives.every(objective => completedObjectives.includes(objective.id))
      );
    } else {
      return relevantObjectives.every(objective => completedObjectives.includes(objective.id));
    }
  }).length;
};

// Function to get the total number of tasks based on the selected faction
export const getTotalTasksCount = (tasks: task[], selectedFactionId: string | null): number => {
  return tasks.filter(task => {
    return task.objectives.some(objective => !objective.faction || selectedFactionId === null || objective.faction.id === selectedFactionId);
  }).length;
};
