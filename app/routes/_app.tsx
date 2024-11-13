import { SidebarProvider } from "~/components/ui/sidebar";
import { Outlet, } from "@remix-run/react";
import { AppSidebar } from "~/components/sidebar/app-sidebar";
import { MapProvider } from "~/context/MapContext";
import { useState } from "react";
import { PopupProvider } from "~/context/PopupContext";
import { DataProvider } from "~/context/DataContext";

export default function AppLayout() {
  const [open, setOpen] = useState(false)

  return (
    <DataProvider>
    <MapProvider>
    <PopupProvider>
    <SidebarProvider open={open} onOpenChange={setOpen} className="bg-transparent">
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="absolute top-0 left-0 z-50">
        <AppSidebar />
        </div>
        <div className="relative flex flex-1 w-full h-full">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
    </PopupProvider>
    </MapProvider>
    </DataProvider>
  )
}