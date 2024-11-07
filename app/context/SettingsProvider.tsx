import { createContext, useContext, useEffect, useState } from "react";

type Settings = {
  faction: string | null;
  objectivesComplete: string[];
  lzsLocated: string[];
}

const defaultSettings: Settings = {
  faction: null,
  objectivesComplete: [],
  lzsLocated: [],
};

interface SettingsContextType {
  settings: Settings;
  isSettingsLoaded: boolean;
  saveSettings: (value: Settings) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateSetting: (key: keyof Settings, value: any) => void;
  resetSettings: () => void;
  storageKey: string;
  updateStorageKey: (value: string) => void;
}

const defaultStorageKey: string = 'gzwmap-user';

const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isSettingsLoaded, setIsSettingsLoaded] = useState<boolean>(false);
  const [storageKey, setStorageKey] = useState<string>(defaultStorageKey);

  /**
   * Encodes the settings object into a base64 string for safe storage in localStorage.
   * @param {Settings} _settings - The settings object to encode.
   * @returns {string} Base64 encoded settings.
   */
  const _encodeSettings = (_settings: Settings): string => btoa(JSON.stringify(_settings));

  /**
   * Decodes the base64 settings string from localStorage into a JavaScript object.
   * @param {string} _settingsString - The base64 string to decode.
   * @returns {Settings} The decoded settings object.
   */
  const _decodeSettings = (_settingsString: string): Settings => JSON.parse(atob(_settingsString));

  /**
   * Initializes the settings by loading them from localStorage if available,
   * or saving the default settings if not.
   */
  const _init = () => {
    if (typeof window === 'undefined') return;
    const storedEncodedSettings = localStorage.getItem(storageKey);
    if (!storedEncodedSettings) {
      localStorage.setItem(storageKey, _encodeSettings(defaultSettings));
      setSettings(defaultSettings);
    } else {
      setSettings(_decodeSettings(storedEncodedSettings));
    }
    setIsSettingsLoaded(true);
  }

  useEffect(() => {
    _init();
  }, []);

  /**
   * Saves the provided settings to localStorage and updates the state.
   * @param {Settings} value - The new settings object to save.
   */
  const saveSettings = (value: Settings) => {
    localStorage.setItem(storageKey, _encodeSettings(value));
    setSettings(value);
  }

  /**
   * Updates a specific setting by key, merges it with the current settings,
   * and saves the updated settings to localStorage.
   * @param {keyof Settings} key - The key of the setting to update.
   * @param {any} value - The new value for the specified setting.
   */
  const updateSetting = (key: keyof Settings, value: any) => {
    const updatedSettings = { ...settings, [key]: value };
    saveSettings(updatedSettings);
  };

  /**
   * Updates the localStorage key used to save settings.
   * @param {string} value - The new key to use for storing settings.
   */
  const updateStorageKey = (value: string) => {
    setStorageKey(value);
  }

  /**
   * Resets settings to default values and saves them to localStorage.
   */
  const resetSettings = () => {
    saveSettings(defaultSettings);
  };

  return (
    <SettingsContext.Provider value={{
      settings, isSettingsLoaded, saveSettings,
      updateSetting, resetSettings, storageKey,
      updateStorageKey,
     }}>
      {children}
    </SettingsContext.Provider>
  )
}

/**
 * Custom hook to use the Settings context.
 * Throws an error if used outside of SettingsProvider.
 * @returns {SettingsContextType} The context value containing settings and functions.
 */
export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
