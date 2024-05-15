"use client";

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
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { task, faction, objective } from '@/lib/types';
import { Tasks } from '@/lib/data/tasks';
import { Factions } from '@/lib/data/factions';
import { cn } from '@/lib/utils';

export default function SideMenu({ mapRef }: { mapRef: L.Map | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFactions, setSelectedFactions] = useState<Set<string>>(new Set());
  const [isMac, setIsMac] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMac(/macintosh|mac os x/.test(userAgent));
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function onQueryChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchQuery(e.currentTarget.value);
  }

  function onFactionChange(factionShorthand: string) {
    setSelectedFactions((prev) => {
      const newSelections = new Set(prev);
      if (newSelections.has(factionShorthand)) {
        newSelections.delete(factionShorthand);
      } else {
        newSelections.add(factionShorthand);
      }
      return newSelections;
    });
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
    const objectivesByFaction = task.objectives.reduce((acc, objective) => {
      const faction = objective.faction?.shorthand || "no-faction";
      if (!acc[faction]) {
        acc[faction] = [];
      }
      if (
        selectedFactions.size === 0 ||
        selectedFactions.has(faction) ||
        faction === "no-faction"
      ) {
        acc[faction].push(objective);
      }
      return acc;
    }, {} as Record<string, objective[]>);
  
    const factions = Object.keys(objectivesByFaction);
  
    return (
      <CommandGroup className="mt-1">
        <div className="p-3 bg-accent/20 rounded-xl mb-4 last:mb-1">
          <p className="text-lg font-bold">{task.name}</p>
          {factions.map((faction, index) => {
            const isSelected = selectedFactions.has(faction);
            if (isSelected || selectedFactions.size === 0) {
              return (
                <div key={index}>
                  {factions.length > 0 && (
                    <div className="flex flex-row gap-3 items-center">
                      <div className="text-muted-foreground text-xs font-medium whitespace-nowrap my-2">
                        {faction === "no-faction"
                          ? "All Factions"
                          : Factions.find((f) => f.shorthand === faction)?.name}
                      </div>
                      <div className="w-full -mx-1 h-px bg-border" role="separator"></div>
                    </div>
                  )}
                  {objectivesByFaction[faction].map((objective, objIndex) => (
                    <ObjectiveItem
                      key={`${task.name}-${objIndex}`}
                      task={task}
                      objective={objective}
                    />
                  ))}
                </div>
              );
            }
            return null;
          })}
        </div>
      </CommandGroup>
    );
  };

  const ObjectiveItem = ({ task, objective }: { task: task, objective: objective }) => {
    const handleClick = () => {
      if (mapRef) {
        mapRef.closePopup()
        if (isMobile) {
          setIsOpen(false);
          mapRef.setView(objective.position, 15)
        } else {
          mapRef.flyTo(objective.position, 15)
        }
      }
    };

    const factionImage = objective.faction && (
      <Image
        src={`/${objective.faction.image}`}
        alt={objective.faction.name}
        width={20}
        height={20}
        className="inline-block mr-2"
      />
    );

    return (
      <CommandItem onSelect={handleClick} className="cursor-pointer rounded-md flex items-center">
        {factionImage}
        <span>
          {objective.name}
          <span className='sr-only'>
            {`${objective.faction?.shorthand} - ${objective.name}`}
          </span>
        </span>
      </CommandItem>
    );
  };

  const FactionButton = ({ faction }: { faction: faction }) => {
    const isSelected = selectedFactions.has(faction.shorthand);

    return (
      <div
        onClick={() => onFactionChange(faction.shorthand)}
        aria-label={`Select ${faction.name}`}
        className={cn(
          "outline outline-2 -outline-offset-2 px-0 w-[100px] h-[100px] rounded-[var(--radius)] cursor-pointer bg-transparent hover:bg-muted-foreground/10",
          isSelected ? "outline-muted-foreground bg-muted-foreground/10" : "outline-transparent"
        )}
      >
        <Image
          src={`/${faction.image}`}
          className="p-2 cursor-pointer"
          alt={faction.name}
          width={100}
          height={100}
          quality={20}
        />
      </div>
    );
  };

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
      <div className={`h-full w-full overflow-y-auto overflow-x-hidden border-r p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <Command className='border' shouldFilter={false}>
          <div className="rounded-[var(--radius)] w-full">
            <div className="flex justify-around py-2 bg-transparent">
              {Factions.map((faction, index) => (
                <FactionButton key={index} faction={faction} />
              ))}
            </div>
            <div className="-mx-1 h-px bg-border" role="separator"></div>
          </div>
          <div className='relative'>
            <CommandInput onInput={onQueryChange} placeholder="Search tasks..." />
            <span className='absolute top-1/2 right-2 -translate-y-1/2 pb-[3px] text-muted-foreground text-center'>
              {!isMobile && (
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-bold text-muted-foreground opacity-100">
                  {isMac ? '⌘ K' : 'Ctrl K'}
                </kbd>
              )}
            </span>
          </div>
          <CommandList className="h-[500px]">
          <CommandEmpty>No results found.</CommandEmpty>
            {searchQuery && (
              <>
                {searchTasks(searchQuery).map((task, index) => (
                  <TaskGroup key={`${task.name}-${index}`} task={task} />
                ))}
              </>
            )}
          </CommandList>
        </Command>
      </div>
    </div>
  );
};
