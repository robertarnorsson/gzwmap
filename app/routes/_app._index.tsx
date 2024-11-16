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

export const meta: MetaFunction = () => {
  return [
    { title: "Gray Zone Warfare Map" },
    { name: "description", content: "An interactive map tool to find objectives, landing zones, locked doors, and more. Track your progress and see what you've completed in the game." },
  ];
};

export default function Index() {
  const { isMobile } = useSidebar();
  const { tasks, lzs, locations } = useData();

  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="absolute top-0 left-0 z-50">
        <AppSidebar />
      </div>
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
