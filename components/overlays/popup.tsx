"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Rubik } from "next/font/google";
import React from "react";

const rubik = Rubik({ subsets: ["latin"] });

export const PopUp = ({
  children,
  id,
  onClick,
  addPadding = true
}: Readonly<{
  children: React.ReactNode;
  id: string;
  onClick: () => void;
  addPadding?: boolean;
}>) => {
  return ( 
    <div className={cn(rubik.className, addPadding && "p-6", "relative bg-background mb-[18px] w-[300px]")}>
      <Button variant='ghost' size='icon' className="absolute top-2 right-2 h-6 w-6 z-50" onClick={onClick}>
        <X className="w-4 h-4" />
      </Button>
      <span className="absolute bottom-1 right-2 text-[9px] text-[#193b3b]">
        {id}
      </span>
      <div>
        {children}
      </div>
      <div className="absolute -bottom-[12px] w-0 h-0 z-40
        left-1/2 transform -translate-x-1/2
        border-l-[20px] border-l-transparent
        border-t-[12px] border-t-background
        border-r-[20px] border-r-transparent">
      </div>
    </div>
  );
}