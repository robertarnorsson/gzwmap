import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "~/components/ui/sidebar";
import { useSettings } from "~/context/SettingsProvider";
import { Factions } from "~/data/factions";
import { faction } from "~/lib/types";
import { AppSidebarTrigger } from "./app-sidebar-trigger";

export function AppSidebar() {
  const { settings, updateSetting } = useSettings();
  const selectedFactionId = settings.faction;

  const handleFactionSelect = (factionId: string) => {
    console.log(factionId)
    updateSetting(
      'faction',
      selectedFactionId === factionId ? null : factionId
    );
  };

  const selectedFaction: faction | null = Factions.find(
    (f) => f.id === selectedFactionId
  ) || null;

  return (
    <Sidebar className="grid-bg">
      <SidebarHeader className="bg-transparent">
        <SidebarMenu>
          <h1 className="text-bold">Faction</h1>
          <div className="flex justify-evenly items-center">
            {Factions.map((f) => (
              <button
                key={f.id}
                onClick={() => handleFactionSelect(f.id)}
              >
                <img
                  src={`/${f.image}`}
                  alt={f.name}
                  className={`w-24 h-24 cursor-pointer rounded p-1 ${
                    selectedFactionId === f.id ? "ring-1 ring-border" : "ring-1 ring-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-transparent">
        
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <div className="flex justify-center">
            {selectedFaction && (
              <img
                src={`/${selectedFaction.image}`}
                alt={selectedFaction.name}
                className="w-12 h-12"
              />
            )}
          </div>
        </SidebarMenu>
      </SidebarFooter>
      <div className="absolute right-0">
        <AppSidebarTrigger />
      </div>
    </Sidebar>
  );
}
