import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { getObjectivesTask } from '~/helper/counter';
import { task } from '~/lib/types';
import { isCanceledTaskCompleted } from '~/lib/utils';

// Utility functions for base64 encoding/decoding
const encodeBase64 = (data: string): string => btoa(data);
const decodeBase64 = (data: string): string => atob(data);

export type MarkerSize = 1 | 2 | 3 | 4 | 5;

// Define types for the data stored in localStorage
export interface UserData {
  username: string;
  faction: string;
  completedObjectives: string[];
  collectedKeys: string[];
  discoveredLZs: string[];
  notes: { [id: string]: string };
  settings: {
    showCompletedObjectives: boolean;
    showCanceledObjectives: boolean;
    markerSize: MarkerSize;
  };
}

export interface PopupData {
  dismissedNewMap: boolean;
}

// Define the structure of the localStorage data
export interface LocalStorageData {
  user: UserData;
  popup: PopupData;
}

// Define the actions with type safety
interface LocalStorageActions {
  user: {
    getUser: () => UserData;
    updateUsername: (username: string) => void;
    updateFaction: (factionId: string) => void;
    updateNote: (id: string, note: string) => void;
    addCompletedObjective: (objective: string, tasks: task[], user: UserData) => void;
    removeCompletedObjective: (objective: string) => void;
    addCollectedKey: (key: string) => void;
    removeCollectedKey: (key: string) => void;
    addDiscoveredLZ: (lz: string) => void;
    removeDiscoveredLZ: (lz: string) => void;
    setting: {
      toggleShowCompletedObjectives: () => void;
      toggleShowCanceledObjectives: () => void;
      updateMarkerSize: (size: MarkerSize) => void;
    };
  };
  popup: {
    toggleNewMap: () => void;
  };
}

// Define the context type
interface LocalStorageContextType {
  data: LocalStorageData;
  actions: LocalStorageActions;
}

// Create the context
const LocalStorageContext = createContext<LocalStorageContextType | undefined>(undefined);

// Default data
const defaultData: LocalStorageData = {
  user: {
    username: '',
    faction: '',
    completedObjectives: [],
    collectedKeys: [],
    discoveredLZs: [],
    notes: {},
    settings: {
      showCompletedObjectives: true,
      showCanceledObjectives: true,
      markerSize: 3,
    },
  },
  popup: {
    dismissedNewMap: false,
  },
};

// Helper function to merge default data with stored data
const mergeData = <T extends object>(defaultData: T, storedData: Partial<T>): T => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = { ...defaultData };
  for (const key in storedData) {
    if (Object.prototype.hasOwnProperty.call(storedData, key)) {
      if (
        typeof storedData[key] === 'object' &&
        storedData[key] !== null &&
        !Array.isArray(storedData[key])
      ) {
        result[key] = mergeData(result[key], storedData[key]);
      } else {
        result[key] = storedData[key];
      }
    }
  }
  return result;
};

// Define the provider component
export const LocalStorageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<LocalStorageData>(defaultData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to set data in state and localStorage
  const setKey = <K extends keyof LocalStorageData>(key: K, value: LocalStorageData[K]) => {
    const encodedValue = encodeBase64(JSON.stringify(value));
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key as string, encodedValue);
    }
    setData(prevData => ({ ...prevData, [key]: value }));
  };

  // Function to get data from state
  const getKey = <K extends keyof LocalStorageData>(key: K): LocalStorageData[K] => data[key];

  // Load data from localStorage after component mounts
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const userDataString = localStorage.getItem('user');
        const popupDataString = localStorage.getItem('popup');

        const userData: UserData = userDataString
          ? mergeData(
              defaultData.user,
              JSON.parse(decodeBase64(userDataString)) as Partial<UserData>
            )
          : defaultData.user;

        const popupData: PopupData = popupDataString
          ? mergeData(
              defaultData.popup,
              JSON.parse(decodeBase64(popupDataString)) as Partial<PopupData>
            )
          : defaultData.popup;

        setData({ user: userData, popup: popupData });
      } catch (error) {
        console.error('Error reading localStorage:', error);
        setData(defaultData);
      } finally {
        setIsLoaded(true);
      }
    }
  }, []);

  // Update localStorage whenever data changes
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined' && window.localStorage) {
      try {
        const encodedUserData = encodeBase64(JSON.stringify(data.user));
        const encodedPopupData = encodeBase64(JSON.stringify(data.popup));
        localStorage.setItem('user', encodedUserData);
        localStorage.setItem('popup', encodedPopupData);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }
  }, [data, isLoaded]);

  // Define actions with access to getKey and setKey
  const actions: LocalStorageActions = {
    user: {
      getUser: () => {
        return getKey('user');
      },
      updateUsername: (username: string) => {
        const userData = getKey('user');
        const updatedUserData: UserData = { ...userData, username };
        setKey('user', updatedUserData);
      },
      updateFaction: (faction: string) => {
        const userData = getKey('user');
        const updatedUserData: UserData = { ...userData, faction };
        setKey('user', updatedUserData);
      },
      updateNote: (id: string, note: string) => {
        const userData = getKey('user');
        const updatedUserData: UserData = {
          ...userData,
          notes: { ...userData.notes, [id]: note },
        };
        setKey('user', updatedUserData);
      },
      addCompletedObjective: (objective: string, tasks: task[], user: UserData) => {
        const userData = getKey('user');

        const task = getObjectivesTask(tasks, objective)

        if (!task) return; 
      
        if (isCanceledTaskCompleted(task, tasks, user)) return;
      
        if (!userData.completedObjectives.includes(objective)) {
          const updatedUserData: UserData = {
            ...userData,
            completedObjectives: [...userData.completedObjectives, objective],
          };
          setKey('user', updatedUserData);
        }
      },
      removeCompletedObjective: (objective: string) => {
        const userData = getKey('user');
        const updatedUserData: UserData = {
          ...userData,
          completedObjectives: userData.completedObjectives.filter(obj => obj !== objective),
        };
        setKey('user', updatedUserData);
      },
      addCollectedKey: (key: string) => {
        const userData = getKey('user');
        if (!userData.collectedKeys.includes(key)) {
          const updatedUserData: UserData = {
            ...userData,
            collectedKeys: [...userData.collectedKeys, key],
          };
          setKey('user', updatedUserData);
        }
      },
      removeCollectedKey: (key: string) => {
        const userData = getKey('user');
        const updatedUserData: UserData = {
          ...userData,
          collectedKeys: userData.collectedKeys.filter(collectedKey => collectedKey !== key),
        };
        setKey('user', updatedUserData);
      },
      addDiscoveredLZ: (lz: string) => {
        const userData = getKey('user');
        if (!userData.discoveredLZs.includes(lz)) {
          const updatedUserData: UserData = {
            ...userData,
            discoveredLZs: [...userData.discoveredLZs, lz],
          };
          setKey('user', updatedUserData);
        }
      },
      removeDiscoveredLZ: (lz: string) => {
        const userData = getKey('user');
        const updatedUserData: UserData = {
          ...userData,
          discoveredLZs: userData.discoveredLZs.filter(discoveredLz => discoveredLz !== lz),
        };
        setKey('user', updatedUserData);
      },
      setting: {
        toggleShowCompletedObjectives: () => {
          const userData = getKey('user');
          const updatedUserData: UserData = {
            ...userData,
            settings: {
              ...userData.settings,
              showCompletedObjectives: !userData.settings.showCompletedObjectives,
            },
          };
          setKey('user', updatedUserData);
        },
        toggleShowCanceledObjectives: () => {
          const userData = getKey('user');
          const updatedUserData: UserData = {
            ...userData,
            settings: {
              ...userData.settings,
              showCanceledObjectives: !userData.settings.showCanceledObjectives,
            },
          };
          setKey('user', updatedUserData);
        },
        updateMarkerSize: (size: MarkerSize) => {
          const userData = getKey('user');
          const updatedUserData: UserData = {
            ...userData,
            settings: {
              ...userData.settings,
              markerSize: size,
            },
          };
          setKey('user', updatedUserData);
        },
      },
    },
    popup: {
      toggleNewMap: () => {
        const popupData = getKey('popup');
        const updatedPopupData: PopupData = {
          ...popupData,
          dismissedNewMap: !popupData.dismissedNewMap,
        };
        setKey('popup', updatedPopupData);
      },
    },
  };

  return (
    <LocalStorageContext.Provider value={{ data, actions }}>
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
