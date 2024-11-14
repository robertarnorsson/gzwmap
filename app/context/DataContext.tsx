import { createContext, ReactNode, useContext, useState } from "react";
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

  // Function to set loading status manually
  const setLoaded = (loaded: boolean) => {
    setIsLoaded(loaded);
  };

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
        setIsLoaded: setLoaded
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
