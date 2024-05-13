import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMap } from 'react-leaflet'; // Import the useMap hook
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useState } from 'react';
import Image from 'next/image';
import { lz, task, faction, objective } from '@/lib/types';
import { Tasks } from '@/lib/data/tasks';
import { LZs } from '@/lib/data/lzs';
import { Factions } from '@/lib/data/factions';

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function onQueryChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchQuery(e.currentTarget.value);
  }

  function searchTasks(query: string): task[] {
    return Tasks.filter(task =>
      task.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  const TaskGroup = ({ task }: { task: task }) => (
    <CommandGroup heading={task.name}>
      {task.objectives.map((objective, index) => (
        <ObjectiveItem key={`${task.name}${index}`} objective={objective} />
      ))}
    </CommandGroup>
  );

  const ObjectiveItem = ({ objective }: { objective: objective }) => (
    <CommandItem>
      {objective.faction
        ? `${objective.faction?.shorthand} - ${objective.name}`
        : `${objective.name}`
      }
    </CommandItem>
  );

  return (
    <div className={`fixed inset-y-0 w-[400px] z-[9998] bg-background shadow-lg transition-all duration-300 ${isOpen ? 'left-0' : '-left-[400px]'}`}>
      <button className='absolute top-0 -right-10 flex items-center justify-center z-[9999] w-10 h-12 bg-background md:w-6 md:-right-6' onClick={toggleMenu}>
        {isOpen
          ? <ChevronLeft />
          : <ChevronRight />
        }
      </button>
      <div className={`h-full w-full overflow-y-auto overflow-x-hidden p-4 py-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex gap-2 mb-5 place-content-center">
          <Image src='/lamang_logo.webp' className="p-2 cursor-pointer" alt='logo' width={100} height={100} />
          <Image src='/crimson_logo.webp' className="p-2 cursor-pointer" alt='logo' width={100} height={100} />
          <Image src='/mithras_logo.webp' className="p-2 cursor-pointer bg-transparent border-2" alt='logo' width={100} height={100} />
        </div>
        <Command shouldFilter={false} className='h-fit rounded-lg border shadow-md'>
        <CommandInput onInput={onQueryChange} placeholder="Search..." />
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
