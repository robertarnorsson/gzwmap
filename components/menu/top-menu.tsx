"use client";

import { ChevronDown, ChevronUp, Filter, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { AutoComplete } from "../ui/autocomplete";
import { tasksToOption } from "@/lib/utils";

export default function TopMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {!isMenuOpen && (
        <div className="group absolute flex top-0 left-1/2 transform -translate-x-1/2 justify-center w-44 h-4 z-20 duration-500" >
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-none rounded-b-xl w-32 h-8 -translate-y-12 transition-transform group-hover:translate-y-0 duration-500" 
            onClick={toggleMenu}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      )}
      <Dialog>
        <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-screen-lg h-14 px-2 pl-3 group rounded-full bg-background border border-accent duration-500 z-30 ${isMenuOpen ? '' : '-translate-y-20'}`}>
          <div className="relative w-full h-full">
            <div className="flex justify-between items-center gap-4 w-full h-full relative z-40">
              <div className="grow">
                <div className="flex flex-row gap-2">
                  <SearchBar />
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full text-muted-foreground aspect-square">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Filter</DialogTitle>
                    </DialogHeader>
                    <DialogContent>
                      <DialogDescription>
                        Filter tasks by project, tags, and more.
                      </DialogDescription>
                    </DialogContent>
                  </DialogContent>
                </div>
              </div>
              <div className="grow flex flex-row">
                <div className="w-full" />
                <Link href="/settings" className="group/settings">
                  <Button variant="outline" className="rounded-full font-normal text-muted-foreground">
                    <Settings className="h-4 w-4 mr-2 duration-200 group-hover/settings:rotate-90" />
                    Settings
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 px-8 py-4 group-hover:-right-[85px] duration-200 z-20">
              <Button variant="outline" size="icon" className="rounded-full" onClick={toggleMenu}>
                <ChevronUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

function SearchBar() {
  const [isMac, setIsMac] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMac(/macintosh|mac os x/.test(userAgent));
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);

  return (
    <div className="relative w-96 group/search duration-300">
      <AutoComplete
        options={tasksToOption()}
        emptyMessage={"No results found"}
      />
      <span className="absolute top-1/2 right-4 -translate-y-1/2 pb-[3px] text-muted-foreground text-center">
        {!isMobile && (
          <kbd className="pointer-events-none inline-flex h-4 select-none items-center gap-1 rounded border bg-muted px-1 font-mono text-xxs font-bold text-muted-foreground opacity-100">
            {isMac ? '⌘ K' : 'Ctrl K'}
          </kbd>
        )}
      </span>
    </div>
  );
}
