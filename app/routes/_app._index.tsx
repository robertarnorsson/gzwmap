import { type MetaFunction } from "@remix-run/cloudflare";
import { LocationMarker } from "~/components/markers/location-marker";
import { LZMarker } from "~/components/markers/lz-marker";
import { ObjectiveMarker } from "~/components/markers/objective-marker";
import Map from "~/components/map/Map";
import { Popup } from "~/components/map/Popup";
import { AppSidebarTrigger } from "~/components/sidebar/app-sidebar-trigger";
import { useSidebar } from "~/components/ui/sidebar";
import { useData } from "~/context/DataContext";
import { AppSidebar } from "~/components/sidebar/app-sidebar";
import { KeyMarker } from "~/components/markers/key-marker";
import { GridOverlay } from "~/components/map/Grid";

export const meta: MetaFunction = () => {
  return [
    { title: "Gray Zone Warfare Map" },
    { name: "description", content: "An interactive map tool to find objectives, landing zones, locked doors, and more. Track your progress and see what you've completed in the game." },
  ];
};

export default function Index() {
  const { isMobile } = useSidebar();
  const { tasks, keys, lzs, locations } = useData();

  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="absolute top-0 left-0 z-50">
        <AppSidebar />
      </div>
      <Map />
      <GridOverlay />
      <Popup />
      {tasks.map((task) => task.objectives.map((objective, index) => (
        <ObjectiveMarker key={index} task={task} objective={objective} />
      )))}
      {keys.map((key, index) => (
        <KeyMarker key={index} cKey={key} />
      ))}
      {lzs.map((lz, index) => (
        <LZMarker key={index} lz={lz} />
      ))}
      {locations.map((location, index) => (
        <LocationMarker key={index} location={location} />
      ))}
      {isMobile && (
        <div className="absolute top-0 left-0">
          <AppSidebarTrigger />
        </div>
      )}
    </div>
  );
}
