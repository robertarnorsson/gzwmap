import { SidebarProvider } from "~/components/ui/sidebar";
import { Outlet, } from "@remix-run/react";
import { AppSidebar } from "~/components/sidebar/app-sidebar";
import { AppSidebarTrigger } from "~/components/sidebar/app-sidebar-trigger";
import { MapProvider } from "~/context/MapContext";
import { useState } from "react";
import { PopupProvider } from "~/context/PopupContext";

export default function AppLayout() {
  const [open, setOpen] = useState(false)

  return (
    <MapProvider>
      <PopupProvider>
        <SidebarProvider open={open} onOpenChange={setOpen} className="bg-transparent">
          <AppSidebar />
          <div className="relative flex flex-1 w-full">
            <AppSidebarTrigger />
            <Outlet />
          </div>
        </SidebarProvider>
      </PopupProvider>
    </MapProvider>
  )
}