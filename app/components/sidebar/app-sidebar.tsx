import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "~/components/ui/sidebar";
import { useSettings } from "~/context/SettingsProvider";
import { Factions } from "~/data/factions";
import { AppSidebarTrigger } from "./app-sidebar-trigger";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Link } from "@remix-run/react";
import { useMemo } from "react";
import { Tasks } from "~/data/tasks";
import { LZs } from "~/data/lzs";
import { objective } from "~/lib/types";

export function AppSidebar() {
  const { settings, actions } = useSettings();
  const selectedFactionId = settings.faction;

  const completedTasksCount = useMemo(() => {
    return Tasks.filter((task) => {
      // Filter objectives based on selected faction, if any
      const relevantObjectives = task.objectives.filter((objective) => {
        // Only include objectives for the selected faction or if no faction is selected
        return (
          !settings.faction || // No faction selected, include all objectives
          objective.faction?.id === settings.faction // Only include objectives matching the selected faction
        );
      });
  
      if (relevantObjectives.length === 0) {
        // If there are no relevant objectives for the selected faction, this task should not be considered
        return false;
      }
  
      // If `notMultiLocation` is true, check completion for any location
      if (task.notMultiLocation) {
        // Group objectives by location
        const objectivesByLocation = relevantObjectives.reduce((acc, objective) => {
          const locationId = objective.location.id;
          if (!acc[locationId]) acc[locationId] = [];
          acc[locationId].push(objective);
          return acc;
        }, {} as Record<string, objective[]>);
  
        // Check if any location's objectives are all completed
        return Object.values(objectivesByLocation).some((objectives) =>
          objectives.every((objective) =>
            settings.objectivesComplete.includes(objective.id)
          )
        );
      } else {
        // For tasks without `notMultiLocation`, all relevant objectives must be completed
        return relevantObjectives.every((objective) =>
          settings.objectivesComplete.includes(objective.id)
        );
      }
    }).length;
  }, [settings.objectivesComplete, settings.faction]);

  const completedObjectivesCount = useMemo(() => {
    return settings.objectivesComplete.filter((objectiveId) => {
      const matchingObjective = Tasks.flatMap((task) => task.objectives).find(
        (obj) => obj.id === objectiveId
      );
      // Only count objectives if they match the selected faction
      return (
        matchingObjective &&
        (!settings.faction || matchingObjective.faction?.id === settings.faction)
      );
    }).length;
  }, [settings.objectivesComplete, settings.faction]);  
  
  // Calculate total objectives, including all objectives for tasks without `notMultiLocation`
  const totalObjectives = useMemo(() => {
    return Tasks.flatMap((task) =>
      task.notMultiLocation
        ? task.objectives.filter((objective) => {
            return (
              !settings.faction || // Include all objectives if no faction is selected
              objective.faction?.id === settings.faction // Only include matching faction
            );
          })
        : task.objectives // Include all objectives for tasks without `notMultiLocation`
    ).length;
  }, [settings.faction]);
  

  const handleFactionSelect = (factionId: string) => {
    actions.updateFaction(factionId);
  };

  return (
    <TooltipProvider>
      <Sidebar className="grid-bg p-2">
        <SidebarHeader className="bg-transparent">
          <SidebarMenu>
            <div className="flex justify-evenly items-center">
              {Factions.map((f) => (
                <Tooltip key={f.id}>
                  <TooltipTrigger asChild>
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
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{f.name}</p>
                  </TooltipContent>
                </Tooltip>
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
                  .padStart(3, "0")} / ${totalObjectives}`,
              },
              {
                label: "Tasks Completed",
                value: `${completedTasksCount
                  .toString()
                  .padStart(3, "0")} / ${Tasks.length}`,
              },
              {
                label: "LZs Found",
                value: `${settings.lzsLocated.length
                  .toString()
                  .padStart(3, "0")} / ${LZs.length.toString().padStart(3, "0")}`,
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
        <div className="absolute right-0">
          <AppSidebarTrigger />
        </div>
      </Sidebar>
    </TooltipProvider>
  );
}
