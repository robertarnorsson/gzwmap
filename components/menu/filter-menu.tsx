import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "../ui/button";
import { Filter } from "lucide-react";
import { MarkerType } from "@/lib/types";

export default function FilterMenu() {

  const categories = {
    Generic: [
      MarkerType.TASK,
      MarkerType.LZ,
      MarkerType.LOCATION,
      MarkerType.POI,
    ],
    Factions: [
      MarkerType.LRI,
      MarkerType.MSS,
      MarkerType.CSI,
    ],
    Vendors: [
      MarkerType.HANDSHAKE,
      MarkerType.GUNNY,
      MarkerType.LABRAT,
      MarkerType.ARTISAN,
      MarkerType.TURNCOAT,
      MarkerType.BANSHEE,
    ],
    Locations: [
      MarkerType.PHALANG,
      MarkerType.NAMTHAVEN,
      MarkerType.KIUVONGSA,
      MarkerType.BANPA,
      MarkerType.HUNTERSPARADISE,
      MarkerType.YBL1,
      MarkerType.BLUELAGOON,
      MarkerType.SAWMILL,
      MarkerType.PHALANGAIRFIELD,
      MarkerType.FORTNARITH,
      MarkerType.MIDNIGHTSAPPHIRE,
      MarkerType.TIGERBAY,
    ],
    Tasks: [
      MarkerType.COLLECT,
      MarkerType.MARK,
      MarkerType.STASH,
      MarkerType.ELIMINATION,
      MarkerType.LOCATE,
      MarkerType.HACK,
    ],
  };

  return (
    <div className="fixed top-6 right-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size='icon'>
            <Filter />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto" side="right">
          <DropdownMenuLabel>Select Filter</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <DropdownMenuLabel>{category}</DropdownMenuLabel>
              {items.map((item) => (
                <DropdownMenuCheckboxItem key={item}>
                  {item}
                </DropdownMenuCheckboxItem>
              ))}
              <DropdownMenuSeparator />
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}