import { json, type LoaderFunction, type MetaFunction } from "@remix-run/cloudflare";
import { useEffect } from "react";
import { LocationMarker } from "~/components/markers/location-marker";
import { LZMarker } from "~/components/markers/lz-marker";
import { ObjectiveMarker } from "~/components/markers/objective-marker";
import Map from "~/components/map/Map";
import { Popup } from "~/components/map/Popup";
import { AppSidebarTrigger } from "~/components/sidebar/app-sidebar-trigger";
import { useSidebar } from "~/components/ui/sidebar";
import { faction, item, key, location, lz, objective, task } from "~/lib/types";
import { API_URL } from "~/lib/constants";
import { useLoaderData } from "@remix-run/react";
import { useData } from "~/context/DataContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Gray Zone Warfare Map" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

interface LoaderData {
  tasks: task[];
  objectives: objective[];
  lzs: lz[];
  locations: location[];
  factions: faction[];
  keys: key[];
  items: item[];
}

export const loader: LoaderFunction = async () => {
  const fetchData = async <T, >(endpoint: string): Promise<T[]> => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }
    return await response.json();
  };

  const [tasks, objectives, lzs, locations, factions, keys, items] = await Promise.all([
    fetchData<task>('tasks'),
    fetchData<objective>('objectives'),
    fetchData<lz>('lzs'),
    fetchData<location>('locations'),
    fetchData<faction>('factions'),
    fetchData<key>('keys'),
    fetchData<item>('items'),
  ]);

  return json<LoaderData>({ tasks, objectives, lzs, locations, factions, keys, items });
};

export default function Index() {
  const { isMobile } = useSidebar();
  const loaderData = useLoaderData<LoaderData>();
  const { tasks, lzs, locations } = loaderData;
  const {
    setTasks, setObjectives, setLzs, setLocations,
    setFactions, setKeys, setItems, setIsLoaded
  } = useData();

  useEffect(() => {
    setTasks(loaderData.tasks);
    setObjectives(loaderData.objectives);
    setLzs(loaderData.lzs);
    setLocations(loaderData.locations);
    setFactions(loaderData.factions);
    setKeys(loaderData.keys);
    setItems(loaderData.items);
    setIsLoaded(true);
  }, [
    loaderData.tasks, loaderData.objectives, loaderData.lzs,
    loaderData.locations, loaderData.factions,
    loaderData.keys, loaderData.items,
    setTasks, setObjectives, setLzs, setLocations,
    setFactions, setKeys, setItems, setIsLoaded
  ]);

  return (
    <div className="relative flex w-full items-center justify-center">
      <Map />
      <Popup />
      {tasks.map((task) => task.objectives.map((objective) => (
        <ObjectiveMarker key={objective.id} task={task} objective={objective} />
      )))}
      {lzs.map((lz) => (
        <LZMarker key={lz.id} lz={lz} />
      ))}
      {locations.map((location) => (
        <LocationMarker key={location.id} location={location} />
      ))}
      {isMobile && (
        <div className="absolute top-0 left-0">
          <AppSidebarTrigger />
        </div>
      )}
    </div>
  );
}
