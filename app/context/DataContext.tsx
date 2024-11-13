import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { API_URL } from "~/lib/constnats";
import { location, lz, objective, task, faction, key, item } from "~/lib/types"; // Assuming these are your existing types

interface DataContextType {
  tasks: task[];
  fetchTasks: () => void;
  objectives: objective[];
  fetchObjectives: () => void;
  lzs: lz[];
  fetchLZs: () => void;
  locations: location[];
  fetchLocations: () => void;
  factions: faction[];
  fetchFactions: () => void;
  keys: key[];
  fetchKeys: () => void;
  items: item[];
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

  const fetchData = async <T, >(endpoint: string, setData: React.Dispatch<React.SetStateAction<T[]>>, dataType: string) => {
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
    fetchData<task>('tasks', setTasks, 'tasks');
    fetchData<objective>('objectives', setObjectives, 'objectives');
    fetchData<lz>('lzs', setLZs, 'lzs');
    fetchData<location>('locations', setLocations, 'locations');
    fetchData<faction>('factions', setFactions, 'factions');
    fetchData<key>('keys', setKeys, 'keys');
    fetchData<item>('items', setItems, 'items');
  }, []);

  return (
    <DataContext.Provider value={{
      tasks, fetchTasks: () => fetchData<task>('tasks', setTasks, 'tasks'),
      objectives, fetchObjectives: () => fetchData<objective>('objectives', setObjectives, 'objectives'),
      lzs, fetchLZs: () => fetchData<lz>('lzs', setLZs, 'lzs'),
      locations, fetchLocations: () => fetchData<location>('locations', setLocations, 'locations'),
      factions, fetchFactions: () => fetchData<faction>('factions', setFactions, 'factions'),
      keys, fetchKeys: () => fetchData<key>('keys', setKeys, 'keys'),
      items, fetchItems: () => fetchData<item>('items', setItems, 'items')
    }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
