import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useState } from 'react';
import Image from 'next/image';
import { task, faction, objective } from '@/lib/types';
import { Tasks } from '@/lib/data/tasks';
import { Factions } from '@/lib/data/factions';
import { cn } from '@/lib/utils';

export default function SideMenu({ mapRef }: { mapRef: L.Map | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaction, setSelectedFaction] = useState<faction | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function onQueryChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchQuery(e.currentTarget.value);
  }

  function onFactionChange(value: string) {
    const faction = Factions.find(faction => faction.shorthand.toLowerCase() === value.toLowerCase());
    setSelectedFaction(faction || null);
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
  )

  return (
    <div className={`fixed inset-y-0 md:w-[400px] w-full z-[9998] bg-background shadow-lg transition-all duration-300 ${isOpen ? 'left-0' : '-left-full md:-left-[400px]'}`}>
      <div className={`absolute top-0 ${isOpen ? 'right-0' : '-right-12'} cursor-pointer flex items-center justify-center z-[9999] w-12 h-12 bg-background md:w-8 md:-right-8`} onClick={toggleMenu}>
        {isOpen
          ? <>
              <ChevronLeft className='hidden md:block' />
              <X className='block md:hidden' />
            </>
          : <ChevronRight />
        }
      </div>
      <div className={`h-full w-full overflow-y-auto overflow-x-hidden p-4 py-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <p className='font-bold text-4xl text-center pb-4'>Search</p>
        <ToggleGroup
          type="single"
          className='py-4 gap-5'
          onValueChange={(value) => onFactionChange(value)}
        >
          {Factions.map((faction, index) => (
            <FactionButton key={index} faction={faction} />
          ))}
        </ToggleGroup>
        <Command shouldFilter={false} className='h-fit rounded-lg border shadow-md'>
          <div className='relative'>
            <CommandInput onInput={onQueryChange} placeholder="Search tasks..." />
            <span className='absolute top-1/2 right-2 -translate-y-1/2 pb-[3px] text-muted-foreground text-center'>{selectedFaction?.shorthand || "All"}</span>
          </div>
          <CommandList>
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
      </div>
    </div>
  );
};
