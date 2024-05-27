"use client";

import { objective, task } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";
import Image from "next/image";
import React from "react";

const rubik = Rubik({ subsets: ["latin"] });

export const taskPopup = (task: task, objective: objective) => (
  <div className={cn(rubik.className, "p-6 relative bg-background mb-[18px] w-[300px]")}>
    <h2 className="text-lg font-bold text-primary">{task.name}</h2>
    <div className="flex flex-row gap-2">
      <p className="text-xs text-muted-foreground">{task.vendor.name}</p>
      <p className="text-xs text-muted-foreground">▪</p>
      <p className="text-xs text-muted-foreground">{objective.faction?.shorthand || "All Factions"}</p>
      <p className="text-xs text-muted-foreground">▪</p>
      <p className="text-xs text-muted-foreground">{objective.type}</p>
    </div>
    <p className="pt-4 text-sm text-primary text-pretty font-semibold">{objective.name}</p>
    <p className="text-xs text-primary/85 text-pretty">{objective.description}</p>
    {objective.image && (
      <div className="pt-4 group">
        <div className="w-full h-full aspect-video relative group-hover:scale-[2] duration-300 z-50">
          <Image src={objective.image} alt={objective.name} fill className="object-cover outline outline-1 outline-muted-foreground"></Image>
        </div>
      </div>
    )}
    {task.note && (
      <div className="flex flex-col gap-1 pt-4">
        <p className="text-xs text-muted-foreground">Notes</p>
        <p className="text-xs text-blue-400/85">{task.note}</p>
      </div>
    )}
    {objective.note && (
      <div className="flex flex-col gap-1 pt-4">
        <p className="text-xs text-gray-500">Objective Note</p>
        <p className="text-xs text-orange-400/85">{objective.note}</p>
      </div>
    )}
    <div className="absolute -bottom-[12px] w-0 h-0 z-40
      left-1/2 transform -translate-x-1/2
      border-l-[20px] border-l-transparent
      border-t-[12px] border-t-background
      border-r-[20px] border-r-transparent">
    </div>
  </div>
)
