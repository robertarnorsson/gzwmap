import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { Outlet, } from "@remix-run/react";
import { AppSidebar } from "~/components/sidebar/app-sidebar";
import { AppSidebarTrigger } from "~/components/sidebar/app-sidebar-trigger";
import { MapProvider } from "~/context/MapContext";
import { useState } from "react";

export default function AppLayout() {
  const [open, setOpen] = useState(false)

  return (
    <MapProvider>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-1 w-full">
            <AppSidebarTrigger />
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </MapProvider>
  )
}