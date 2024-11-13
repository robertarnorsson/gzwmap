import { task, objective, lz } from "~/lib/types";

// Function to get relevant objectives based on selected faction and cancelTaskId logic
const getRelevantObjectives = (tasks: task[], completedTaskIds: Set<string>, selectedFactionId: string | null): objective[] => {
  return tasks
    .filter(task => !task.cancelTaskId || !completedTaskIds.has(task.cancelTaskId)) // Exclude objectives of canceled tasks
    .flatMap(task => 
      task.objectives.filter(objective => {
        if (!objective.faction) return true; // Include objectives without a faction
        return selectedFactionId === null || objective.faction.id === selectedFactionId; // Include based on faction
      })
    );
};

// Function to get relevant LZs based on selected faction
const getRelevantLZs = (lzs: lz[], selectedFactionId: string | null): lz[] => {
  return lzs.filter(lz => {
    if (!lz.faction) return true;
    return selectedFactionId === null || lz.faction.id === selectedFactionId;
  });
};

// Function to calculate completed objectives count
export const getCompletedObjectivesCount = (
  tasks: task[],
  completedObjectives: string[],
  selectedFactionId: string | null
): number => {
  const completedTaskIds = new Set<string>();
  const canceledTaskIds = new Set<string>();
  
  // Track completed and canceled tasks
  tasks.forEach(task => {
    const relevantObjectives = task.objectives.filter(objective => {
      return !objective.faction || selectedFactionId === null || objective.faction.id === selectedFactionId;
    });

    const isTaskCompleted = relevantObjectives.every(objective => completedObjectives.includes(objective.id));
    if (isTaskCompleted) {
      completedTaskIds.add(task.id);
      if (task.cancelTaskId) {
        canceledTaskIds.add(task.cancelTaskId);
      }
    }
  });

  const relevantObjectives = getRelevantObjectives(tasks, completedTaskIds, selectedFactionId);
  return relevantObjectives.filter(objective => completedObjectives.includes(objective.id) && !canceledTaskIds.has(objective.id)).length;
};

// Function to calculate total objectives count
export const getTotalObjectivesCount = (tasks: task[], selectedFactionId: string | null): number => {
  const completedTaskIds = new Set<string>();
  const canceledTaskIds = new Set<string>();
  
  // Track completed and canceled tasks
  tasks.forEach(task => {
    if (task.cancelTaskId && completedTaskIds.has(task.cancelTaskId)) {
      canceledTaskIds.add(task.id);
    }
  });

  const relevantObjectives = getRelevantObjectives(tasks, completedTaskIds, selectedFactionId);
  return relevantObjectives.filter(objective => !canceledTaskIds.has(objective.id)).length;
};

// Function to calculate completed tasks count with cancelTaskId logic
export const getCompletedTasksCount = (
  tasks: task[],
  completedObjectives: string[],
  selectedFactionId: string | null
): number => {
  const completedTaskIds = new Set<string>();
  const canceledTaskIds = new Set<string>();

  return tasks.filter(task => {
    // Skip tasks that are canceled by completed tasks
    if (task.cancelTaskId && canceledTaskIds.has(task.cancelTaskId)) {
      return false;
    }

    const relevantObjectives = task.objectives.filter(objective => {
      return !objective.faction || selectedFactionId === null || objective.faction.id === selectedFactionId;
    });

    if (relevantObjectives.length === 0) {
      return false;
    }

    const isTaskCompleted = task.notMultiLocation
      ? // Handle tasks with objectives across different locations
        Object.values(
          relevantObjectives.reduce((acc, objective) => {
            const locationId = objective.location.id;
            if (!acc[locationId]) acc[locationId] = [];
            acc[locationId].push(objective);
            return acc;
          }, {} as Record<string, objective[]>)
        ).some(objectives =>
          objectives.every(objective => completedObjectives.includes(objective.id))
        )
      : // Handle tasks requiring all objectives to be completed
        relevantObjectives.every(objective => completedObjectives.includes(objective.id));

    if (isTaskCompleted) {
      completedTaskIds.add(task.id); // Track this task as completed
      if (task.cancelTaskId) {
        canceledTaskIds.add(task.cancelTaskId); // Track the canceled task
      }
    }

    return isTaskCompleted;
  }).length;
};

// Function to calculate total tasks count with cancelTaskId logic
export const getTotalTasksCount = (tasks: task[], selectedFactionId: string | null): number => {
  const countedTasks = new Set<string>();
  const canceledTaskPairs = new Set<string>(); // Track pairs of canceling tasks

  // Count tasks while accounting for mutually exclusive pairs
  let totalTasks = 0;

  tasks.forEach(task => {
    // Skip tasks that are canceled by other tasks
    if (task.cancelTaskId && countedTasks.has(task.cancelTaskId)) {
      return;
    }

    const isRelevant = task.objectives.some(objective => !objective.faction || selectedFactionId === null || objective.faction.id === selectedFactionId);

    if (isRelevant) {
      if (task.cancelTaskId) {
        // Only count the mutually exclusive task pair once
        const sortedPair = [task.id, task.cancelTaskId].sort().join("-");
        if (!canceledTaskPairs.has(sortedPair)) {
          totalTasks += 0.5; // Count as half a task for mutually exclusive tasks
          canceledTaskPairs.add(sortedPair);
        }
      } else {
        totalTasks += 1; // Count normally for non-mutually exclusive tasks
      }

      countedTasks.add(task.id);
    }
  });

  return Math.ceil(totalTasks); // Round up to ensure tasks are correctly counted as integers
};

// Function to calculate completed LZs count
export const getCompletedLZsCount = (
  lzs: lz[],
  locatedLZs: string[],
  selectedFactionId: string | null
): number => {
  const relevantLZs = getRelevantLZs(lzs, selectedFactionId);
  return relevantLZs.filter(lz => locatedLZs.includes(lz.id)).length;
};

// Function to calculate total LZs count
export const getTotalLZsCount = (lzs: lz[], selectedFactionId: string | null): number => {
  const relevantLZs = getRelevantLZs(lzs, selectedFactionId);
  return relevantLZs.length;
};
