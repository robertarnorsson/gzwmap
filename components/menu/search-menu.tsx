import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandDialog,
  CommandSeparator
} from "@/components/ui/command"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { task, faction, objective } from '@/lib/types';
import { Tasks } from '@/lib/data/tasks';
import { Factions } from '@/lib/data/factions';
import { cn } from "@/lib/utils";

export function SearchMenu({ mapRef }: { mapRef: L.Map | null }) {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaction, setSelectedFaction] = useState<faction | null>(null);
 
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "q" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  function onQueryChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchQuery(e.currentTarget.value);
  }

  function onFactionChange(value: string) {
    const faction = Factions.find(faction => faction.shorthand.toLowerCase() === value.toLowerCase());
    setSelectedFaction(faction || null);
  }

  function onSearchOpenChange(open: boolean) {
    setOpen(open);
  }

  function formatQuery(query: string) {
    return query
      .replaceAll("'", "")
      .replaceAll("&", "")
      .toLowerCase()
      .trim()
  }

  function searchTasks(query: string): task[] {
    return Tasks.filter(task =>
      formatQuery(task.name).includes(formatQuery(query))
    );
  }

  const TaskGroup = ({ task }: { task: task }) => {
    const filteredObjectives = task.objectives.filter(objective => {
      return !selectedFaction || (objective.faction?.shorthand === selectedFaction.shorthand) || !objective.faction;
    });

    return (
      <CommandGroup heading={task.name}>
        {filteredObjectives.map((objective, index) => (
          <ObjectiveItem key={`${task.name}${index}`} task={task} objective={objective} />
        ))}
      </CommandGroup>
    );
  };

  const ObjectiveItem = ({ task, objective }: { task: task, objective: objective }) => {
    const handleClick = () => {
      if (mapRef) {
        setOpen(false);
        setSearchQuery("");
        setSelectedFaction(null);
        mapRef.closePopup()
        mapRef.flyTo(objective.position, 15)
      }
    };
  
    return (
      <CommandItem onSelect={handleClick} className="cursor-pointer rounded-md">
        {selectedFaction
          ? `${objective.name}`
          : objective.faction
          ? `${objective.faction?.shorthand} - ${objective.name}`
          : `${objective.name}`
        }
      </CommandItem>
    );
  };
  

  const FactionButton = ({ faction }: { faction: faction }) => (
    <ToggleGroupItem
      value={faction.shorthand}
      aria-label={`Select ${faction.name}`}
      variant='default'
      className={cn(
        'outline outline-2 -outline-offset-2 px-0 w-[100px] h-[100px] cursor-pointer bg-transparent hover:bg-muted-foreground/10',
        faction === selectedFaction
          ? 'outline-muted-foreground bg-muted-foreground/10'
          : 'outline-transparent',
      )}
    >
      <Image src={`/${faction.image}`} className="p-2 cursor-pointer" alt={faction.name} width={100} height={100} />
    </ToggleGroupItem>
  );
 
  return (
      <CommandDialog open={open} onOpenChange={onSearchOpenChange}>
        <Command shouldFilter={false}>
          <div className="rounded-[var(--radius)] w-full">
            <ToggleGroup
              type="single"
              value={selectedFaction?.shorthand}
              className='flex justify-around px-12 py-4 bg-transparent'
              onValueChange={(value) => onFactionChange(value)}
            >
              {Factions.map((faction, index) => (
                <FactionButton key={index} faction={faction} />
              ))}
            </ToggleGroup>
            <div className="-mx-1 h-px bg-border" role="separator"></div>
          </div>
          <div className='relative'>
            <CommandInput autoFocus value={searchQuery} onInput={onQueryChange} placeholder="Search tasks..." />
            <span className='absolute top-1/2 right-2 -translate-y-1/2 pb-[3px] text-muted-foreground text-center'>{selectedFaction?.shorthand || "All"}</span>
          </div>
          <CommandList className="max-h-[300px]">
            <CommandEmpty>No results found.</CommandEmpty>
            {searchQuery && (
              <>
                {searchTasks(searchQuery).map((task, index) => (
                  <TaskGroup key={`${task.name}${index}`} task={task} />
                ))}
              </>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
  )
}