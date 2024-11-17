import React, { createContext, useContext, ReactNode, useEffect } from 'react';

// Utility functions for base64 encoding/decoding
const encodeBase64 = (data: string): string => btoa(data);
const decodeBase64 = (data: string): string => atob(data);

// Define types for the data stored in localStorage
interface UserData {
  username: string;
  faction: string;
  completedObjectives: string[];
  discoveredLZs: string[];
  notes: { [id: string]: string };
}

interface PopupData {
  dismissedNewMap: boolean;
}

// Define the structure of the localStorage data
export interface LocalStorageData {
  user: UserData;
  popup: PopupData;
}

// Type definitions for getKey and setKey functions
type GetKeyFunction = <K extends keyof LocalStorageData>(key: K) => LocalStorageData[K] | null;
type SetKeyFunction = <K extends keyof LocalStorageData>(key: K, value: LocalStorageData[K]) => void;

// Define the actions with type safety
interface LocalStorageActions {
  user: {
    getUser: () => UserData;
    updateUsername: (username: string) => void;
    updateFaction: (factionId: string) => void;
    updateNote: (id: string, note: string) => void;
    addCompletedObjective: (objective: string) => void;
    removeCompletedObjective: (objective: string) => void;
    addDiscoveredLZ: (lz: string) => void;
    removeDiscoveredLZ: (lz: string) => void;
  };
  popup: {
    toggleNewMap: () => void;
  }
}

// Define the context type
interface LocalStorageContextType {
  setKey: SetKeyFunction;
  getKey: GetKeyFunction;
  actions: LocalStorageActions;
}

// Create the context
const LocalStorageContext = createContext<LocalStorageContextType | undefined>(undefined);

// Define the provider component
export const LocalStorageProvider: React.FC<{
  children: ReactNode;
  initialData?: Partial<LocalStorageData>;
}> = ({ children, initialData }) => {
  const setKey: SetKeyFunction = (key, value) => {
    const encodedValue = encodeBase64(JSON.stringify(value));
    localStorage.setItem(key as string, encodedValue);
  };

  const getKey: GetKeyFunction = (key) => {
    const encodedValue = localStorage.getItem(key as string);
    if (encodedValue) {
      try {
        return JSON.parse(decodeBase64(encodedValue));
      } catch (e) {
        console.error('Error decoding localStorage data:', e);
      }
    }
    return null;
  };

  // Type guard to check if a value is an object
  const isObject = (value: unknown): value is object => {
    return typeof value === 'object' && value !== null;
  };

  useEffect(() => {
    // Initialize and update default data with missing fields
    if (initialData) {
      (Object.keys(initialData) as Array<keyof LocalStorageData>).forEach((key) => {
        const existingData = getKey(key);
        const defaultData = initialData[key]!;

        if (existingData !== null) {
          if (isObject(existingData) && isObject(defaultData)) {
            // Both are objects, merge them
            const updatedData = { ...defaultData, ...existingData } as LocalStorageData[typeof key];
            setKey(key, updatedData);
          } else {
            // For primitives, keep the existing data
            setKey(key, existingData as LocalStorageData[typeof key]);
          }
        } else {
          // Key does not exist, set default data
          setKey(key, defaultData);
        }
      });
    }
  }, [initialData]);

  // Define actions with access to getKey and setKey
  const actions: LocalStorageActions = {
    user: {
      getUser: () => {
        const userData = getKey('user');
        return userData as UserData;
      },
      updateUsername: (username: string) => {
        const userData = getKey('user');
        if (userData && isObject(userData)) {
          const updatedUserData: UserData = { ...(userData as UserData), username };
          setKey('user', updatedUserData);
        }
      },
      updateFaction: (faction: string) => {
        const userData = getKey('user');
        if (userData && isObject(userData)) {
          const updatedUserData: UserData = { ...(userData as UserData), faction };
          setKey('user', updatedUserData);
        }
      },
      updateNote: (id: string, note: string) => {
        const userData = getKey('user');
        if (userData && isObject(userData)) {
          const updatedUserData: UserData = {
            ...(userData as UserData),
            notes: { ...(userData as UserData).notes, [id]: note },
          };
          setKey('user', updatedUserData);
        }
      },
      addCompletedObjective: (objective: string) => {
        const userData = getKey('user');
        if (userData && isObject(userData)) {
          const updatedUserData: UserData = {
            ...(userData as UserData),
            completedObjectives: [...(userData as UserData).completedObjectives, objective],
          };
          setKey('user', updatedUserData);
        }
      },
      removeCompletedObjective: (objective: string) => {
        const userData = getKey('user');
        if (userData && isObject(userData)) {
          const updatedUserData: UserData = {
            ...(userData as UserData),
            completedObjectives: (userData as UserData).completedObjectives.filter((obj) => obj !== objective),
          };
          setKey('user', updatedUserData);
        }
      },
      addDiscoveredLZ: (lz: string) => {
        const userData = getKey('user');
        if (userData && isObject(userData)) {
          const updatedUserData: UserData = {
            ...(userData as UserData),
            discoveredLZs: [...(userData as UserData).discoveredLZs, lz],
          };
          setKey('user', updatedUserData);
        }
      },
      removeDiscoveredLZ: (lz: string) => {
        const userData = getKey('user');
        if (userData && isObject(userData)) {
          const updatedUserData: UserData = {
            ...(userData as UserData),
            discoveredLZs: (userData as UserData).discoveredLZs.filter((location) => location !== lz),
          };
          setKey('user', updatedUserData);
        }
      },
    },
    popup: {
      toggleNewMap: () => {
        const popupData = getKey('popup');
        if (popupData && isObject(popupData)) {
          const updatedPopupData: PopupData = {
            ...(popupData as PopupData),
            dismissedNewMap: !(popupData as PopupData).dismissedNewMap,
          };
          setKey('popup', updatedPopupData);
        }
      },
    }
  };

  return (
    <LocalStorageContext.Provider value={{ setKey, getKey, actions }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

// Custom hook to use the localStorage context
export const useLocalStorage = (): LocalStorageContextType => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error('useLocalStorage must be used within a LocalStorageProvider');
  }
  return context;
};
