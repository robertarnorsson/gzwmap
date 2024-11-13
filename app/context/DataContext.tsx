import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { API_URL } from "~/lib/constnats";
import { location, lz, objective, task, faction, key, item } from "~/lib/types";

interface DataContextType {
  tasks: task[];
  objectives: objective[];
  lzs: lz[];
  locations: location[];
  factions: faction[];
  keys: key[];
  items: item[];
  isLoaded: boolean;
  fetchTasks: () => void;
  fetchObjectives: () => void;
  fetchLZs: () => void;
  fetchLocations: () => void;
  fetchFactions: () => void;
  fetchKeys: () => void;
  fetchItems: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<task[]>([]);
  const [objectives, setObjectives] = useState<objective[]>([]);
  const [lzs, setLZs] = useState<lz[]>([]);
  const [locations, setLocations] = useState<location[]>([]);
  const [factions, setFactions] = useState<faction[]>([]);
  const [keys, setKeys] = useState<key[]>([]);
  const [items, setItems] = useState<item[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async <T,>(
    endpoint: string,
    setData: React.Dispatch<React.SetStateAction<T[]>>,
    dataType: string
  ) => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json() as T[];
      setData(data);
    } catch (error) {
      console.error(`Error fetching ${dataType}:`, error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await Promise.all([
        fetchData<task>('tasks', setTasks, 'tasks'),
        fetchData<objective>('objectives', setObjectives, 'objectives'),
        fetchData<lz>('lzs', setLZs, 'lzs'),
        fetchData<location>('locations', setLocations, 'locations'),
        fetchData<faction>('factions', setFactions, 'factions'),
        fetchData<key>('keys', setKeys, 'keys'),
        fetchData<item>('items', setItems, 'items'),
      ]);
      setIsLoaded(true);
    };

    fetchAllData();
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
        fetchTasks: () => fetchData<task>('tasks', setTasks, 'tasks'),
        fetchObjectives: () => fetchData<objective>('objectives', setObjectives, 'objectives'),
        fetchLZs: () => fetchData<lz>('lzs', setLZs, 'lzs'),
        fetchLocations: () => fetchData<location>('locations', setLocations, 'locations'),
        fetchFactions: () => fetchData<faction>('factions', setFactions, 'factions'),
        fetchKeys: () => fetchData<key>('keys', setKeys, 'keys'),
        fetchItems: () => fetchData<item>('items', setItems, 'items'),
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
