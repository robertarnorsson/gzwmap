import { SidebarProvider } from "~/components/ui/sidebar";
import { Outlet, } from "@remix-run/react";
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
      <div className="relative w-screen">
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