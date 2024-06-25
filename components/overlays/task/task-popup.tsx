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
    addPadding={false}
  >
    <div className="relative">
      <Image 
        src={`/task_banners/${task.vendor.name.replaceAll(" ", "").toLocaleLowerCase()}_task_banner.webp`}
        alt={task.name}
        className="w-full h-auto"
        layout="responsive"
        objectFit="contain"
        height={50}
        width={320}
      />
      <div className="absolute top-1/2 left-0 right-0 bottom-0 bg-gradient-to-t from-background">

      </div>
    </div>
    <div className="p-6 pt-3">
      <h2 className="text-xl font-bold text-primary text-pretty">{task.name}</h2>
      <div className="flex flex-row gap-2">
        <p className="text-xs text-muted-foreground">{task.vendor.name}</p>
        <p className="text-xs text-muted-foreground">▪</p>
        <p className="text-xs text-muted-foreground">{objective.faction?.shorthand || "All Factions"}</p>
        <p className="text-xs text-muted-foreground">▪</p>
        <p className="text-xs text-muted-foreground">{objective.type}</p>
      </div>
      <p className="pt-4 text-sm text-primary text-pretty font-semibold">{objective.name}</p>
      <p className="text-xs text-primary/85 text-pretty">{objective.description}</p>
      {objective.items && (
        <div  className="pt-4">
          <div className="flex flex-row gap-2">
            <p className="text-xs text-muted-foreground">Required Items</p>
          </div>
          <div className="pt-1 flex flex-wrap gap-1">
            <div className="flex gap-1">
              {objective.items.map((item) => (
                <Item key={item.id}
                  name={item.name}
                  shortName={item.shortName || item.name}
                  imageUrl={item.image}
                  size={item.size}
                ></Item>
              ))}
            </div>
          </div>
        </div>
      )}
      {objective.key && (
        <div  className="pt-4">
          <div className="flex flex-row gap-2">
            <p className="text-xs text-muted-foreground">Keys</p>
          </div>
          <div className="flex flex-wrap gap-1">
            <div className="flex gap-1">
              <Item
                name={objective.key.name}
                shortName={objective.key.shortName || objective.key.name}
                imageUrl={objective.key.image}
                size={objective.key.size}
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
    </div>
  </PopUp>
)
