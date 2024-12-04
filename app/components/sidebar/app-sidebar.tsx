import { Command, Filter, KeyRound, MapPinned } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "~/components/ui/sidebar"
import { useState } from "react";
import { useData } from "~/context/DataContext";
import { useLocalStorage } from "~/context/LocalStorageContext";
import { getCompletableObjectives, getCompletableTasks, getCompletedObjectives, getCompletedTasks, getDiscoverableLZs, getDiscoveredLZs, getFactionKeys, getFactionObjectives, isKeyCollected, isTaskCanceled, isTaskCompleted } from "~/util/task-utils";
import { Link } from "@remix-run/react";
import { key, task } from "~/lib/types";

const navLinks = [
  {
    title: "Filter",
    icon: Filter,
    isActive: true,
    hasSearch: false,
    hasProgression: true,
  },
  {
    title: "Tasks",
    icon: MapPinned,
    isActive: false,
    hasSearch: true,
    hasProgression: false,
  },
  {
    title: "Keys",
    icon: KeyRound,
    isActive: false,
    hasSearch: true,
    hasProgression: false,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = useState(navLinks[0]);
  const { tasks, keys, lzs } = useData();
  const { data } = useLocalStorage();
  const { open, setOpen } = useSidebar();

  const completedTasks = () => getCompletedTasks(tasks, data.user.completedObjectives, data.user.faction);
  const totalTasks = () => getCompletableTasks(tasks, data.user.completedObjectives, data.user.faction);
  
  const completedObjectives = () => getCompletedObjectives(tasks, data.user.completedObjectives, data.user.faction);
  const totalObjectives = () => getCompletableObjectives(tasks, data.user.completedObjectives, data.user.faction);

  const discoveredLZs = () => getDiscoveredLZs(lzs, data.user.discoveredLZs, data.user.faction);
  const totalLZs = () => getDiscoverableLZs(lzs, data.user.faction);

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden grid-bg [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      <Sidebar
        collapsible="none"
        className="!w-[calc(48px_+_1px)] border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <Link to="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Acme Inc</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {navLinks.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item)
                        
                        if(activeItem === item) {
                          setOpen(!open)
                        } else {
                          setOpen(true)
                        }
                      }}
                      isActive={activeItem.title === item.title}
                      className="px-2.5 md:px-2 group"
                    >
                      <item.icon className="text-muted-foreground transition-colors duration-100 group-data-[active=true]:text-primary" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarTrigger />
        </SidebarFooter>
      </Sidebar>
      <Sidebar collapsible="none" className="hidden grid-bg flex-1 md:flex">
        {activeItem.hasSearch && (
          <SidebarHeader className="gap-3.5 border-b p-4">
            <SidebarInput placeholder={`Search ${activeItem.title.toLowerCase()}...`} />
          </SidebarHeader>
        )}
        <SidebarContent className="truncate">
          {activeItem.title === "Tasks" && (
            <div className="w-full h-full space-y-2 p-2 overflow-y-auto">
              {tasks.map((task, idx) => (
                <SidebarMenuItem key={idx}>
                  <TaskComponent tasks={tasks} task={task} />
                </SidebarMenuItem>
              ))}
            </div>
          )}
          {activeItem.title === "Keys" && (
            <div className="w-full h-full space-y-2 p-2 overflow-y-auto">
              {getFactionKeys(keys).map((cKey, idx) => (
                <SidebarMenuItem key={idx}>
                  <KeyComponent keys={keys} cKey={cKey} />
                </SidebarMenuItem>
              ))}
            </div>
          )}
        </SidebarContent>
        {activeItem.hasProgression && (
          <SidebarFooter className="pb-1">
            <div className="w-full h-[1px] bg-border" />
            <div className="truncate flex flex-col space-y-1 text-muted-foreground/90 px-1.5">
              {[
                {
                  label: "Objectives Completed",
                  value: `${completedObjectives().toString().padStart(3, '0')} / ${totalObjectives().toString().padStart(3, '0')}`,
                },
                {
                  label: "Tasks Completed",
                  value: `${completedTasks().toString().padStart(3, '0')} / ${totalTasks().toString().padStart(3, '0')}`,
                },
                {
                  label: "LZs Discovered",
                  value: `${discoveredLZs().toString().padStart(3, '0')} / ${totalLZs().toString().padStart(3, '0')}`,
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
        )}
      </Sidebar>
    </Sidebar>
  )
}

function TaskComponent({ tasks, task }: { tasks: task[], task: task }) {
  const { data } = useLocalStorage();

  const isCompleted = isTaskCompleted(task, data.user.completedObjectives, data.user.faction);
  const isCanceled = isTaskCanceled(tasks, task, data.user.completedObjectives, data.user.faction);

  return (
    <div className="bg-background border p-3">
      <div className="flex items-center justify-between">
        <span className={`font-semibold ${isCompleted && "line-through"}`}>{task.name}</span>
      </div>
      <div className="mt-3 flex flex-col items-start gap-2 text-xs">
        {getFactionObjectives(task, data.user.faction).map((objective) => (
          <div className={`cursor-pointer ${isCompleted ? "line-through" : "hover:underline"}`}>
            {objective.name}
          </div>
        ))}
      </div>
    </div>
  );
}

function KeyComponent({ keys, cKey }: { keys: key[], cKey: key }) {
  const { data } = useLocalStorage();

  const isCollected = isKeyCollected(cKey, data.user.collectedKeys, data.user.faction);

  return (
    <div className="bg-background border p-3">
      <div className="flex items-center justify-between">
        <span className={`font-semibold ${isCollected && "line-through"}`}>{cKey.shortName}</span>
      </div>
    </div>
  );
}
