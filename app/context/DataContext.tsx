import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { API_URL } from "~/lib/constants";
import { lz, objective, task, location, faction, key, item } from "~/lib/types";

interface DataContextType {
  tasks: task[];
  objectives: objective[];
  lzs: lz[];
  locations: location[];
  factions: faction[];
  keys: key[];
  items: item[];
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
  setTasks: (tasks: task[]) => void;
  setObjectives: (objectives: objective[]) => void;
  setLzs: (lzs: lz[]) => void;
  setLocations: (locations: location[]) => void;
  setFactions: (factions: faction[]) => void;
  setKeys: (keys: key[]) => void;
  setItems: (items: item[]) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<task[]>([]);
  const [objectives, setObjectives] = useState<objective[]>([]);
  const [lzs, setLzs] = useState<lz[]>([]);
  const [locations, setLocations] = useState<location[]>([]);
  const [factions, setFactions] = useState<faction[]>([]);
  const [keys, setKeys] = useState<key[]>([]);
  const [items, setItems] = useState<item[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async <T,>(endpoint: string): Promise<T[]> => {
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
      }
      return await response.json() as T[];
    };

    const loadAllData = async () => {
      try {
        const [
          tasksData,
          objectivesData,
          lzsData,
          locationsData,
          factionsData,
          keysData,
          itemsData,
        ] = await Promise.all([
          fetchData<task>('tasks'),
          fetchData<objective>('objectives'),
          fetchData<lz>('lzs'),
          fetchData<location>('locations'),
          fetchData<faction>('factions'),
          fetchData<key>('keys'),
          fetchData<item>('items'),
        ]);

        setTasks(tasksData);
        setObjectives(objectivesData);
        setLzs(lzsData);
        setLocations(locationsData);
        setFactions(factionsData);
        setKeys(keysData);
        setItems(itemsData);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoaded(false);
      }
    };

    loadAllData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        tasks,
        objectives,
        lzs,
        locations,
        factions,
        keys,
        items,
        isLoaded,
        setTasks,
        setObjectives,
        setLzs,
        setLocations,
        setFactions,
        setKeys,
        setItems,
        setIsLoaded,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
