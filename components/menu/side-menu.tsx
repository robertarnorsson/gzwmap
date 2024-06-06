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
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { task, faction, objective } from '@/lib/types';
import { Tasks } from '@/lib/data/tasks';
import { Factions } from '@/lib/data/factions';
import { cn } from '@/lib/utils';
import { Map, Overlay } from 'ol';
import ReactDOMServer from 'react-dom/server';
import { TaskPopup } from '../overlays/task/task-popup';

export default function SideMenu({ map, popupOverlay }: { map: Map | undefined, popupOverlay: Overlay | undefined }) {
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
      acc[faction].push(objective);
      return acc;
    }, {} as Record<string, objective[]>);
  
    const factions = Object.keys(objectivesByFaction);
  
    return (
      <CommandGroup className="mt-1">
        <div className="p-3 bg-accent/20 rounded-[var(--radius)] mb-4 last:mb-1">
          <div className="flex flex-col mb-2">
            <p className="text-lg font-bold">{task.name}</p>
            <p className="text-xs font-light text-muted-foreground">{task.vendor.name}</p>
          </div>
          {factions.map((faction, index) => {
            const isSelected = selectedFactions.has(faction);
            if (isSelected || selectedFactions.size === 0 || faction === "no-faction") {
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
      if (map && popupOverlay) {
        setIsOpen(false);
        setSearchQuery("");
        setSelectedFactions(new Set());
        
        const view = map.getView();
        view.animate({zoom: (view.getMaxZoom() - 1), center: objective.position})

        popupOverlay.getElement()!.innerHTML = ReactDOMServer.renderToString(TaskPopup(task, objective)),
        popupOverlay.setPosition(objective.position)
        popupOverlay.getElement()!.classList.add("visible")
      }
    };

    const factionImage = objective.faction && (
      <Image
        src={`/${objective.faction.image}`}
        alt={objective.faction.name}
        width={30}
        height={30}
        quality={5}
        className="inline-block mr-4"
      />
    );

    return (
      <CommandItem onSelect={handleClick} className="cursor-pointer rounded-md flex items-center">
        {factionImage}
        <div>
          <div className="flex flex-col">
            <span>{objective.name}</span>
            <span className="text-xs text-muted-foreground">{`${task.name} ▪ ${objective.type}`}</span>
          </div>
          <span className='sr-only'>
            {`${objective.faction?.name} - ${objective.name}`}
          </span>
        </div>
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
    <div className={`fixed inset-y-0 md:w-[400px] w-full z-[9998] ${!isMobile && "border-r"} bg-background shadow-lg transition-all duration-300 ${isOpen ? 'left-0' : '-left-full md:-left-[400px]'}`}>
      <div className={`absolute ${isMobile ? "top-0" : "top-4"} ${isOpen ? 'right-0' : '-right-12'} ${!isMobile ? "border" : !isOpen && "border-b border-r"} cursor-pointer flex items-center justify-center z-[9999] w-12 h-12 bg-background hover:bg-accent md:w-8 md:-right-8`} onClick={toggleMenu}>
        {isOpen
          ? <>
              <ChevronLeft className='hidden md:block' />
              <X className='block md:hidden' />
            </>
          : <ChevronRight />
        }
      </div>
      {isMobile && <div className='h-10'></div>}
      <div className={`h-fit w-full overflow-y-auto overflow-x-hidden p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
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
          <CommandList className="px-1">
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