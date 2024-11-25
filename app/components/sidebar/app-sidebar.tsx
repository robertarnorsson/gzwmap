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
import { Command, Settings } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Input, Keybind } from "../common/Keybind";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useData } from "~/context/DataContext";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { useMap } from "~/context/MapContext";
import { key, objective, task } from "~/lib/types";
import { usePopup } from "~/context/PopupContext";
import { ObjectivePopupContent } from "../popups/objective-popup";
import { KeyPopupContent } from "../popups/key-popup";
import { useLocalStorage } from "~/context/LocalStorageContext";
import { Checkbox } from "../ui/checkbox";


const keybinds: Input[] = [
  { name: "Toggle sidebar", windows: "Ctrl + B", mac: "⌘ + B", type: 'keyboard' },
  { name: "Complete objective", action: "right", type: 'mouse' },
]

export function AppSidebar() {
  const { map } = useMap();
  const { isMobile } = useSidebar();
  const { data, actions } = useLocalStorage();
  const { showPopup } = usePopup();
  const { tasks, locations, keys } = useData();

  const handleObjectiveClick = (task: task, objective: objective) => {
    if (!map) return;
    const mapView = map.getView()
    if (!mapView) return;
    if (!window) return;

    const viewportCenter = [window.innerWidth / 2, window.innerHeight / 2];

    mapView.centerOn(objective.position, map.getSize()!, viewportCenter);
    mapView.setZoom(6)
    showPopup(objective.position, <ObjectivePopupContent task={task} objective={objective} />, [0, -20])
  }

  const handleKeyClick = (key: key) => {
    if (!map) return;
    const mapView = map.getView()
    if (!mapView) return;
    if (!window) return;

    const viewportCenter = [window.innerWidth / 2, window.innerHeight / 2];

    mapView.centerOn(key.position, map.getSize()!, viewportCenter);
    mapView.setZoom(6)
    showPopup(key.position, <KeyPopupContent cKey={key} />, [0, -20])
  }

  return (
    <Sidebar className="grid-bg p-2">
      <SidebarHeader className="bg-transparent">
        <SidebarMenu>
          <div className="flex justify-between items-start">
            <Link to="/">
              <img
                src="/assets/icons/icon-72x72.png"
                width="48"
                height="48"
              />
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
