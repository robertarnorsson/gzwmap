import { Settings } from "~/context/SettingsProvider";

export type ActionsType = {
  updateNote: (id: string, note: string) => void;
  toggleObjectiveCompletion: (id: string) => void;
  updateFaction: (id: string) => void;
  updateShowCompleted: (value: boolean) => void;
  updateShowCanceled: (value: boolean) => void;
  updateMarkerSize: (size: "small" | "normal" | "large") => void;
};

export const createActions = (
  settings: Settings,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateSetting: (key: keyof Settings['user'], value: any) => void
): ActionsType => {
  return {
    updateNote: (id: string, note: string) => {
      updateSetting('notes', { ...settings.user.notes, [id]: note });
    },
    toggleObjectiveCompletion: (id: string) => {
      const isComplete = settings.user.objectivesComplete.includes(id);
      const updatedObjectives = isComplete
        ? settings.user.objectivesComplete.filter(oid => oid !== id)
        : [...settings.user.objectivesComplete, id];

      updateSetting("objectivesComplete", updatedObjectives);
    },
    updateFaction: (id: string) => {
      const updatedFaction = settings.user.faction === id ? null : id;
      updateSetting("faction", updatedFaction);
    },
    updateShowCompleted: (value: boolean) => {
      updateSetting('showCompletedObjectives', value);
    },
    updateShowCanceled: (value: boolean) => {
      updateSetting('showCanceledObjectives', value);
    },
    updateMarkerSize: (size: "small" | "normal" | "large") => {
      updateSetting('markerSize', size)
    }
  };
};
