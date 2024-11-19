import { createContext, ReactNode, useContext, useState } from "react";
import { faction, item, key, location, lz, objective, task } from "~/lib/types";

interface DataProps {
  tasks: task[];
  objectives: objective[];
  lzs: lz[];
  locations: location[];
  factions: faction[];
  items: item[];
  keys: key[];
}

interface DataContextType extends DataProps {
  loaded: boolean;
  updateLoaded: (value: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ data, loaded, children }: { data: DataProps, loaded: boolean, children: ReactNode }) => {
  const [isLoaded, setLoaded] = useState<boolean>(loaded);

  const updateLoaded = (value: boolean) => {
    setLoaded(value);
  }

  return (
    <DataContext.Provider value={{ ...data, loaded: isLoaded, updateLoaded }}>
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
