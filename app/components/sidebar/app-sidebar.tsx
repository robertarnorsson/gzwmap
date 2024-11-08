import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { useSettings } from "~/context/SettingsProvider";
import { Factions } from "~/data/factions";
import { faction } from "~/lib/types";
import { Switch } from "../ui/switch";

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
    <Sidebar className="grid-background">
      <SidebarHeader className="bg-transparent">
        <SidebarMenu>
          <h1 className="text-bold">Faction</h1>
          <div className="flex justify-evenly items-center">
            {Factions.map((f) => (
              <img
                key={f.id}
                src={`/${f.image}`}
                alt={f.name}
                className={`w-24 h-24 cursor-pointer rounded p-1 ${
                  selectedFactionId === f.id ? "ring-1 ring-border" : "ring-1 ring-transparent"
                }`}
                onClick={() => handleFactionSelect(f.id)}
              />
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
                className="w-12 h-12" // Adjust the size as needed
              />
            )}
          </div>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
