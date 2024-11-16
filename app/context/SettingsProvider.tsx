/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from "react";
import { ActionsType, createActions } from "~/helper/settings";

export type UserSettings = {
  faction: string | null;
  objectivesComplete: string[];
  lzsLocated: string[];
  notes: { [id: string]: string };
  showCompletedObjectives: boolean,
  showCanceledObjectives: boolean,
  markerSize: "small" | "normal" | "large"
};

export type Settings = {
  user: UserSettings;
};

const defaultSettings: Settings = {
  user: {
    faction: null,
    objectivesComplete: [],
    lzsLocated: [],
    notes: {},
    showCompletedObjectives: true,
    showCanceledObjectives: true,
    markerSize: "normal"
  },
};

interface SettingsContextType {
  settings: Settings;
  isSettingsLoaded: boolean;
  saveSettings: (value: Settings) => void;
  updateSetting: (key: keyof UserSettings, value: any) => void;
  resetSettings: () => void;
  actions: ActionsType;
  storageKey: string;
  updateStorageKey: (value: string) => void;
}

const defaultStorageKey: string = 'gzwmap-user';

const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isSettingsLoaded, setIsSettingsLoaded] = useState<boolean>(false);
  const [storageKey, setStorageKey] = useState<string>(defaultStorageKey);

  const _encodeSettings = (_settings: Settings): string => btoa(JSON.stringify(_settings));
  const _decodeSettings = (_settingsString: string): Settings => JSON.parse(atob(_settingsString));

  useEffect(() => {
    const init = () => {
      if (typeof window === 'undefined') return;
      const storedEncodedSettings = localStorage.getItem(storageKey);
      if (!storedEncodedSettings) {
        localStorage.setItem(storageKey, _encodeSettings(defaultSettings));
        setSettings(defaultSettings);
      } else {
        setSettings(_decodeSettings(storedEncodedSettings));
      }
      setIsSettingsLoaded(true);
    };
  
    init();
  }, [storageKey]);

  const saveSettings = (value: Settings) => {
    localStorage.setItem(storageKey, _encodeSettings(value));
    setSettings(value);
  }

  const updateSetting = (key: keyof UserSettings, value: any) => {
    const updatedSettings = { ...settings, user: { ...settings.user, [key]: value } };
    saveSettings(updatedSettings);
  };

  const updateStorageKey = (value: string) => {
    setStorageKey(value);
  }

  const resetSettings = () => {
    saveSettings(defaultSettings);
  };

  const actions = createActions(settings, updateSetting);

  return (
    <SettingsContext.Provider value={{
      settings, isSettingsLoaded, saveSettings,
      updateSetting, resetSettings, actions,
      storageKey, updateStorageKey,
     }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
