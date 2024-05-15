"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandDialog,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import Image from "next/image";
import { task, faction, objective } from "@/lib/types";
import { Tasks } from "@/lib/data/tasks";
import { Factions } from "@/lib/data/factions";
import { cn } from "@/lib/utils";

export function SearchMenu({ mapRef }: { mapRef: L.Map | null }) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFactions, setSelectedFactions] = useState<Set<string>>(new Set());

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

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

  function onSearchOpenChange(open: boolean) {
    setOpen(open);
  }

  function formatQuery(query: string) {
    return query.replaceAll("'", "").replaceAll("&", "").toLowerCase().trim();
  }

  function searchTasks(query: string): task[] {
    return Tasks.filter((task) =>
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

  const ObjectiveItem = ({ task, objective }: { task: task; objective: objective }) => {
    const handleClick = () => {
      if (mapRef) {
        setOpen(false);
        setSearchQuery("");
        setSelectedFactions(new Set());
        mapRef.closePopup();
        mapRef.flyTo(objective.position, 15);
      }
    };

    const factionImage = objective.faction && (
      <Image
        src={`/${objective.faction.image}`}
        alt={objective.faction.name}
        width={40}
        height={40}
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
            <span className="text-xs text-muted-foreground">{task.name}</span>
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
    <CommandDialog open={open} onOpenChange={onSearchOpenChange}>
      <Command shouldFilter={false}>
        <div className="rounded-[var(--radius)] w-full">
          <div className="flex justify-around px-12 py-4 bg-transparent">
            {Factions.map((faction, index) => (
              <FactionButton key={index} faction={faction} />
            ))}
          </div>
          <div className="-mx-1 h-px bg-border" role="separator"></div>
        </div>
        <div className="relative">
          <CommandInput autoFocus value={searchQuery} onInput={onQueryChange} placeholder="Search tasks..." />
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
    </CommandDialog>
  );
}
