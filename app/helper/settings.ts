// actions.ts

import { Settings } from "~/context/SettingsProvider";

export type ActionsType = {
  updateNote: (id: string, note: string) => void;
  toggleObjectiveCompletion: (id: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createActions = (settings: Settings, updateSetting: (key: keyof Settings, value: any) => void) => {
  return {
    updateNote: (id: string, note: string) => {
      updateSetting('notes', { ...settings.notes, [id]: note });
    },
    toggleObjectiveCompletion: (id: string) => {
      const isComplete = settings.objectivesComplete.includes(id);
      const updatedObjectives = isComplete
        ? settings.objectivesComplete.filter(oid => oid !== id)
        : [...settings.objectivesComplete, id];

      updateSetting("objectivesComplete", updatedObjectives);
    },
    // Add other actions as needed
  };
};
