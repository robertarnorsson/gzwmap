import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "~/components/ui/sidebar";
import { AppSidebarTrigger } from "./app-sidebar-trigger";
import { Link } from "@remix-run/react";
import { Button } from "../ui/button";
import { Command, Settings } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Input, Keybind } from "../common/Keybind";


const keybinds: Input[] = [
  { name: "Toggle sidebar", windows: "Ctrl + B", mac: "⌘ + B", type: 'keyboard' },
  { name: "Complete objective", action: "right", type: 'mouse' },
]

export function AppSidebar() {
  const { isMobile } = useSidebar();

  return (
    <Sidebar className="grid-bg p-2">
      <SidebarHeader className="bg-transparent">
        <SidebarMenu>
          <div className="flex justify-between items-center">
            <Link to="/">
              <h1 className="text-lg font-bold text-primary">GZW Map</h1>
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
      <SidebarContent className="bg-transparent"></SidebarContent>
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
              value: 'NaN / Nan',
            },
            {
              label: "Tasks Completed",
              value: 'NaN / Nan',
            },
            {
              label: "LZs Discovered",
              value: 'NaN / Nan',
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
