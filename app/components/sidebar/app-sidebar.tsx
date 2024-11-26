/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  useSidebar,
} from "~/components/ui/sidebar";
import { AppSidebarTrigger } from "./app-sidebar-trigger";
import { Link } from "@remix-run/react";
import { Button } from "../ui/button";
import { Command, Settings, X } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { KBInput, Keybind } from "../common/Keybind";
import { useData } from "~/context/DataContext";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { useMap } from "~/context/MapContext";
import { key, lz, objective, task } from "~/lib/types";
import { usePopup } from "~/context/PopupContext";
import { ObjectivePopupContent } from "../popups/objective-popup";
import { KeyPopupContent } from "../popups/key-popup";
import { useLocalStorage } from "~/context/LocalStorageContext";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { SetStateAction, useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { LZPopupContent } from "../popups/lz-popup";
import { KeyItem, LZItem, MultipleObjectiveTask, SingleObjectiveTask } from "./search-items";


const keybinds: KBInput[] = [
  { name: "Toggle sidebar", windows: "Ctrl + B", mac: "⌘ + B", type: 'keyboard' },
  { name: "Complete objective", action: "right", type: 'mouse' },
]

export function AppSidebar() {
  const { map } = useMap();
  const { isMobile, toggleSidebar } = useSidebar();
  const { data, actions } = useLocalStorage();
  const { showPopup } = usePopup();
  const { tasks, locations, keys, lzs } = useData();

  const [searchCategory, setSearchCategory] = useState("tasks");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<lz[] | task[] | key[]>([]);
  const [expandedTask, setExpandedTask] = useState<task | null>(null);

  const handleObjectiveClick = (task: task, objective: objective) => {
    if (!map) return;
    const mapView = map.getView()
    if (!mapView) return;
    if (!window) return;

    mapView.animate({
      center: objective.position,
      zoom: 6,
      duration: 1000
    });
    showPopup(objective.position, <ObjectivePopupContent task={task} objective={objective} />, [0, -20]);
    toggleSidebar();
    setIsSuggestionsOpen(false);
  }

  const handleKeyClick = (key: key) => {
    if (!map) return;
    const mapView = map.getView()
    if (!mapView) return;
    if (!window) return;
    
    mapView.animate({
      center: key.position,
      zoom: 6,
      duration: 1000
    });
    showPopup(key.position, <KeyPopupContent cKey={key} />, [0, -20]);
    toggleSidebar();
    setIsSuggestionsOpen(false);
    setExpandedTask(null);
  }

  const handleLZClick = (lz: lz) => {
    if (!map) return;
    const mapView = map.getView()
    if (!mapView) return;
    if (!window) return;

    mapView.animate({
      center: lz.position,
      zoom: 6,
      duration: 1000
    });
    showPopup(lz.position, <LZPopupContent lz={lz} />, [0, -27]);
    toggleSidebar();
    setIsSuggestionsOpen(false);
    setExpandedTask(null);
  }

  function filterByFaction<T extends { faction?: { id: string } }>(
    items: T[],
    userFaction: string
  ): T[] {
    return items.filter(
      (item) => !item.faction || item.faction.id === userFaction
    );
  }

  useEffect(() => {
    let filteredSuggestions: lz[] | task[] | key[] = [];
    const query = searchQuery.toLowerCase();
  
    if (searchCategory === "tasks") {
      filteredSuggestions = tasks.filter(
        (task) =>
          task.name.toLowerCase().includes(query) &&
          (task.faction === undefined || task.faction.id === data.user.faction)
      );
    } else if (searchCategory === "keys") {
      filteredSuggestions = keys.filter((key) =>
        key.name.toLowerCase().includes(query)
      );
    } else if (searchCategory === "lzs") {
      filteredSuggestions = lzs.filter((lz) =>
        lz.name.toLowerCase().includes(query)
      );
    }
  
    setSuggestions(filteredSuggestions);
  }, [searchQuery, searchCategory, tasks, keys, lzs, data.user.faction]);
  

  return (
    <Sidebar className="grid-bg p-2">
      <SidebarHeader className="bg-transparent">
        <SidebarMenu>
          <div className="flex justify-between items-center">
            <Link to="/">
              <h1 className="text-2xl font-semibold">GZW Map</h1>
            </Link>
            <div className="flex space-x-2">
              <Link
                to="/settings"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Button variant="ghost" size="icon">
                  <Settings />
                </Button>
              </Link>
            </div>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-transparent py-2">
        <div className="flex w-full px-1">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSuggestionsOpen(true)}
              onBlur={() => setIsSuggestionsOpen(false)}
              className="h-10 pr-24"
            />
            <div className="absolute inset-y-0 right-24 h-10">
              <div className="flex items-center w-full h-full">
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setExpandedTask(null);
                    setIsSuggestionsOpen(false);
                  }}
                >
                  <div className="hover:bg-primary/10 p-1">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                </button>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 w-24 h-10">
              <Select value={searchCategory} onValueChange={(value: SetStateAction<string>) => {
                  setSearchCategory(value);
                  setExpandedTask(null);
                }}>
                <SelectTrigger className="h-full border-none focus:ring-0">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tasks">Tasks</SelectItem>
                  <SelectItem value="keys">Keys</SelectItem>
                  <SelectItem value="lzs">LZs</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out bg-black/20 overflow-x-hidden ${
                isSuggestionsOpen ? "max-h-64 ring-1 ring-ring" : "max-h-0"
              }`}
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="shadow ">
                {suggestions.length > 0 ? (
                  <ul>
                    <li className="p-2 font-bold">Results</li>
                    {suggestions.map((item, index) => {
                      if (searchCategory === "tasks" && "objectives" in item) {
                        const factionObjectives = filterByFaction(item.objectives, data.user.faction);
                  
                        if (factionObjectives.length === 1) {
                          return (
                            <SingleObjectiveTask
                              key={index}
                              task={item}
                              objective={factionObjectives[0]}
                              onClick={() => handleObjectiveClick(item, factionObjectives[0])}
                            />
                          );
                        } else {
                          return (
                            <MultipleObjectiveTask
                              key={index}
                              task={item}
                              objectives={factionObjectives}
                              expandedTask={expandedTask}
                              onExpand={() => setExpandedTask(expandedTask?.name === item.name ? null : item)}
                              onClick={(objective) => handleObjectiveClick(item, objective)}
                            />
                          );
                        }
                      } else if (searchCategory === "keys" && "size" in item) {
                        return (
                          <KeyItem
                            key={index}
                            keyItem={item}
                            faction={data.user.faction}
                            onClick={() => handleKeyClick(item)}
                          />
                        );
                      } else if (searchCategory === "lzs" && "discoverable" in item) {
                        return (
                          <LZItem
                            key={index}
                            lz={item}
                            faction={data.user.faction}
                            onClick={() => handleLZClick(item)}
                          />
                        );
                      }
                      return null;
                    })}
                  </ul>
                ) : (
                  <p className="p-2 text-sm text-muted-foreground">
                    No results found
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <SidebarMenu>
          <Collapsible >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <span className="text-lg font-bold">Tasks</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {tasks.map((task, idx) => (
                  <SidebarMenu key={idx}>
                    <Collapsible className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            {task.name}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          {task.objectives.filter((objective) => objective.faction === undefined || objective.faction.id === data.user.faction).map((objective, idx) => (
                            <SidebarMenuSub key={idx}>
                              <SidebarMenuSubItem>
                                <SidebarMenuButton
                                  onClick={() => handleObjectiveClick(task, objective)}
                                >
                                  <span className="text-xs">{objective.name}</span>
                                </SidebarMenuButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          ))}
                        </CollapsibleContent>
                        <SidebarMenuBadge>{task.objectives.filter((objective) => objective.faction === undefined || objective.faction.id === data.user.faction).length}</SidebarMenuBadge>
                      </SidebarMenuItem>
                    </Collapsible>
                  </SidebarMenu>
                ))}
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
        <SidebarMenu>
          <Collapsible >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <span className="text-lg font-bold">Keys</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {locations.map((location, idx) => (
                  <SidebarMenu key={idx}>
                    <Collapsible className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            {location.name}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          {keys.filter((key) => key.location.id === location.id).map((key, idx) => (
                            <SidebarMenuSub key={idx}>
                              <SidebarMenuSubItem>
                                <SidebarMenuButton
                                  onClick={() => handleKeyClick(key)}
                                >
                                  <span className="text-xs">{key.name}</span>
                                </SidebarMenuButton>
                                <SidebarMenuBadge>
                                  <Checkbox
                                    className="mr-2 pointer-events-auto"
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        actions.user.addCollectedKey(key.id)
                                      } else {
                                        actions.user.removeCollectedKey(key.id)
                                      }
                                    }}
                                  />
                                </SidebarMenuBadge>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          ))}
                        </CollapsibleContent>
                        <SidebarMenuBadge>{keys.filter((key) => key.location.id === location.id).length}</SidebarMenuBadge>
                      </SidebarMenuItem>
                    </Collapsible>
                  </SidebarMenu>
                ))}
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="pb-1">
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="w-full h-[1px] bg-border" />
          {!isMobile && (
            <div className="flex flex-row justify-around items-center space-x-3 text-[10px] text-border">
              <HoverCard>
                <HoverCardTrigger>
                  <Command className="w-3 h-3 duration-300 transition-colors hover:text-muted-foreground" />
                </HoverCardTrigger>
                <HoverCardContent side="right">
                  <div className="flex flex-col">
                    <h2 className="text-base font-semibold mb-2">Keybinds</h2>
                    <div className="flex flex-row">
                      <ul className="space-y-1.5 w-full">
                        {keybinds.map((input, index) => (
                          <li key={index} className="flex justify-between items-end text-muted-foreground/90">
                            <span className="text-xs">{input.name}</span>
                            <span className="flex-1 mx-1.5 mb-[2px] border-b border-dashed border-muted-foreground/30"></span>
                            <Keybind input={input} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-1 text-muted-foreground/90 px-1.5">
          {[
            {
              label: "Objectives Completed",
              value: 'NaN / NaN',
            },
            {
              label: "Tasks Completed",
              value: 'NaN / NaN',
            },
            {
              label: "LZs Discovered",
              value: 'NaN / NaN',
            },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-end justify-between">
              <span className="text-xs font-mono">{label}</span>
              <span className="flex-1 mx-1.5 mb-[2px] border-b border-dashed border-muted-foreground/30"></span>
              <span className="text-xs font-mono">{value}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center space-x-2">
          <div className="w-full h-[1px] bg-border" />
          <div className="flex w-full flex-row justify-around items-center space-x-2 text-[10px] text-border">
            <Link
              to="https://github.com/robertarnorsson/gzwmap"
              className="duration-300 transition-colors hover:text-muted-foreground"
            >
              Github
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
