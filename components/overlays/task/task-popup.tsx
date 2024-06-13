"use client";

import { objective, task } from "@/lib/types";
import React from "react";
import { PopUp } from "../popup";
import ImageShowcase from "@/components/menu/image-showcase";
import Image from "next/image";
import { Item } from "@/components/comp/item";

export const TaskPopup = (task: task, objective: objective, onClick: () => void) => (
  <PopUp
    id={`${task.id} - ${objective.id}`}
    onClick={onClick}
  >
    <h2 className="text-lg font-bold text-primary text-pretty">{task.name}</h2>
    <div className="flex flex-row gap-2">
      <p className="text-xs text-muted-foreground">{task.vendor.name}</p>
      <p className="text-xs text-muted-foreground">▪</p>
      <p className="text-xs text-muted-foreground">{objective.faction?.shorthand || "All Factions"}</p>
      <p className="text-xs text-muted-foreground">▪</p>
      <p className="text-xs text-muted-foreground">{objective.type}</p>
    </div>
    <p className="pt-4 text-sm text-primary text-pretty font-semibold">{objective.name}</p>
    <p className="text-xs text-primary/85 text-pretty">{objective.description}</p>
    {objective.key && (
      <div  className="pt-4">
        <div className="flex flex-row gap-2">
          <p className="text-xs text-muted-foreground">Keys</p>
        </div>
        <div className="flex flex-wrap gap-1">
          <div className="flex gap-1">
            <Item
              name={objective.key.shortName}
              imageUrl={objective.key.keyType}
              size={50}
            ></Item>
          </div>
        </div>
      </div>
    )}
    {objective.image && (
      <div className="pt-4">
        <ImageShowcase
          url={objective.image}
          alt={objective.name}
        />
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
  </PopUp>
)
