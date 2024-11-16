import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "~/components/ui/sidebar";
import { useSettings } from "~/context/SettingsProvider";
import { AppSidebarTrigger } from "./app-sidebar-trigger";
import { Link } from "@remix-run/react";
import { useMemo } from "react";
import {
  getCompletedObjectivesCount,
  getCompletedTasksCount,
  getCompletedLZsCount,
  getTotalLZsCount,
  getTotalTasksCount,
  getTotalObjectivesCount
} from "~/helper/completions";
import { useData } from "~/context/DataContext";
import { Button } from "../ui/button";
import { Settings } from "lucide-react";

export function AppSidebar() {
  const { settings } = useSettings();
  const { tasks, lzs } = useData();
  const { isMobile } = useSidebar();
  const selectedFactionId = settings.user.faction;

  const completedTasksCount = useMemo(() => {
    return getCompletedTasksCount(tasks, settings.user.objectivesComplete, selectedFactionId);
  }, [tasks, settings.user.objectivesComplete, selectedFactionId]);

  const completedObjectivesCount = useMemo(() => {
    return getCompletedObjectivesCount(tasks, settings.user.objectivesComplete, selectedFactionId);
  }, [tasks, settings.user.objectivesComplete, selectedFactionId]);

  const totalObjectivesCount = useMemo(() => {
    return getTotalObjectivesCount(tasks, selectedFactionId);
  }, [selectedFactionId, tasks]);

  const totalTasksCount = useMemo(() => {
    return getTotalTasksCount(tasks, selectedFactionId);
  }, [selectedFactionId, tasks]);

  const completedLZsCount = useMemo(() => {
    return getCompletedLZsCount(lzs, settings.user.lzsLocated, selectedFactionId);
  }, [lzs, settings.user.lzsLocated, selectedFactionId]);

  const totalLZsCount = useMemo(() => {
    return getTotalLZsCount(lzs, selectedFactionId);
  }, [lzs, selectedFactionId]);

  return (
    <Sidebar className="grid-bg p-2">
      <SidebarHeader className="bg-transparent">
        <SidebarMenu>
          <div className="flex justify-between items-center">
            <Link
              to='/'
            >
              <h1 className="text-lg font-bold text-primary">GZW Map</h1>
            </Link>
            <div className="flex space-x-2">
              <Link
                to="/settings"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Button variant='ghost' size='icon'>
                  <Settings />
                </Button>
              </Link>
            </div>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-transparent"></SidebarContent>
      <SidebarFooter className="pb-1">
        <div className="w-full h-[1px] bg-border mb-1" />
        <div className="flex flex-col space-y-1 text-muted-foreground/90 px-1.5">
          {[
            {
              label: "Objectives Completed",
              value: `${completedObjectivesCount
                .toString()
                .padStart(3, "0")} / ${totalObjectivesCount}`,
            },
            {
              label: "Tasks Completed",
              value: `${completedTasksCount
                .toString()
                .padStart(3, "0")} / ${totalTasksCount}`,
            },
            {
              label: "LZs Found",
              value: `${completedLZsCount
                .toString()
                .padStart(3, "0")} / ${totalLZsCount.toString().padStart(3, "0")}`,
            },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-end justify-between">
              <span className="text-xs font-mono">{label}</span>
              <span className="flex-1 mx-1.5 mb-[2px] border-b border-dashed border-muted-foreground/30"></span>
              <span className="text-xs font-mono">{value}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center space-x-4">
          <div className="w-full h-[1px] bg-border" />
          <div className="flex w-full flex-row justify-around items-center space-x-3 text-[10px] text-border">
            <Link
              to="https://github.com/robertarnorsson/gzwmap"
              className="duration-300 transition-colors hover:text-muted-foreground"
            >
              Github
            </Link>
            <Link
              to="/donate"
              className="duration-300 transition-colors hover:text-muted-foreground"
            >
              Donate
            </Link>
            <Link
              to="/about"
              className="duration-300 transition-colors hover:text-muted-foreground"
            >
              Updates
            </Link>
          </div>
          <div className="w-full h-[1px] bg-border" />
        </div>
      </SidebarFooter>
      {!isMobile && (
        <div className="absolute right-0 top-0">
          <AppSidebarTrigger />
        </div>
      )}
    </Sidebar>
  );
}
