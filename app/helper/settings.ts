import { Settings } from "~/context/SettingsProvider";

export type ActionsType = {
  updateNote: (id: string, note: string) => void;
  toggleObjectiveCompletion: (id: string) => void;
  updateFaction: (id: string) => void;
};

export const createActions = (
  settings: Settings,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateSetting: (key: keyof Settings, value: any) => void
): ActionsType => {
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
    updateFaction: (id: string) => {
      const updatedFaction = settings.faction === id ? null : id;
      updateSetting("faction", updatedFaction);
    }
  };
};
