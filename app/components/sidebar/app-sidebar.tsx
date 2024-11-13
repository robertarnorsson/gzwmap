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
  getTotalObjectivesCount,
  getCompletedLZsCount,
  getTotalLZsCount
} from "~/helper/completions";
import { useData } from "~/context/DataContext";

export function AppSidebar() {
  const { settings, actions } = useSettings();
  const { tasks, lzs, factions } = useData();
  const { isMobile } = useSidebar();
  const selectedFactionId = settings.faction;

  // Use memoization for efficiency in calculations
  const completedTasksCount = useMemo(() => {
    return getCompletedTasksCount(tasks, settings.objectivesComplete, selectedFactionId);
  }, [tasks, settings.objectivesComplete, selectedFactionId]);

  const completedObjectivesCount = useMemo(() => {
    return getCompletedObjectivesCount(tasks, settings.objectivesComplete, selectedFactionId);
  }, [tasks, settings.objectivesComplete, selectedFactionId]);

  const totalObjectivesCount = useMemo(() => {
    return getTotalObjectivesCount(tasks, selectedFactionId);
  }, [selectedFactionId, tasks]);

  const completedLZsCount = useMemo(() => {
    return getCompletedLZsCount(lzs, settings.lzsLocated, selectedFactionId);
  }, [lzs, settings.lzsLocated, selectedFactionId]);

  const totalLZsCount = useMemo(() => {
    return getTotalLZsCount(lzs, selectedFactionId);
  }, [lzs, selectedFactionId]);

  const handleFactionSelect = (factionId: string) => {
    actions.updateFaction(factionId);
  };

  return (
    <Sidebar className="grid-bg p-2">
      <SidebarHeader className="bg-transparent">
        <SidebarMenu>
          <div className="flex justify-evenly items-center">
            {factions.map((f) => (
              <button
                key={f.id}
                onClick={() => handleFactionSelect(f.id)}
                className="relative group"
              >
                <img
                  src={`/${f.image}`}
                  alt={f.name}
                  className={`w-24 h-24 cursor-pointer p-1 transition-transform ${
                    selectedFactionId === f.id
                      ? "ring-1 ring-border scale-105"
                      : "ring-1 ring-transparent"
                  }`}
                />
              </button>
            ))}
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
                .padStart(3, "0")} / ${tasks.length}`,
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
        <div className="absolute right-0">
          <AppSidebarTrigger />
        </div>
      )}
    </Sidebar>
  );
}
