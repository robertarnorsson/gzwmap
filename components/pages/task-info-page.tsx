"use client";

import { task, objective } from "@/lib/types";
import Image from "next/image";
import { useMemo } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Item } from "../comp/item";
import { toSlug } from "@/lib/utils";

export default function TaskInfoPage({ task }: { task: task }) {
  const groupedObjectives = useMemo(() => {
    const groups: { [key: string]: objective[] } = {};
    task.objectives.forEach((objective) => {
      const locationName = objective.location.name;
      if (!groups[locationName]) {
        groups[locationName] = [];
      }
      groups[locationName].push(objective);
    });
    return groups;
  }, [task.objectives]);

  return (
    <div className="container mx-auto p-6 bg-background text-foreground flex">
      <div className="flex-1">
        <div className="flex-1 bg-card shadow-lg rounded-lg p-6 mb-6">
          <div className="flex flex-col h-full">
            <h1 className="text-4xl font-bold mb-4">{task.name}</h1>
            <div className="flex flex-row gap-2">
              <p className="text-sm text-muted-foreground">{task.vendor.name}</p>
              <p className="text-sm text-muted-foreground">▪</p>
              <p className="text-sm text-muted-foreground">{task.objectives[0].type}</p>
              <p className="text-sm text-muted-foreground">▪</p>
              <p className="text-sm text-muted-foreground">{task.objectives[0].location?.name}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 flex-1 overflow-y-auto">
              <div className="col-span-2">
                <h2 className="text-2xl font-bold mt-4">Objectives</h2>
                <Accordion type="single" collapsible className="overflow-x-hidden" defaultValue={task.objectives.at(0)?.location.name}>
                  {Object.entries(groupedObjectives).map(([locationName, objectives], index) => (
                    <AccordionItem key={locationName} value={locationName}>
                      <AccordionTrigger>
                        <h2 className="text-2xl font-semibold mb-2">{locationName}</h2>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="mb-4 border border-muted rounded-lg">
                          {objectives.map((objective, index) => (
                            <li
                              key={index}
                              className="p-4 border-b last:border-none border-muted"
                            >
                              <p className="block text-xs font-light text-muted-foreground">{`Stage ${index + 1}`}</p>
                              <h2 id={toSlug(objective.name)} className="text-xl font-semibold mb-2">{objective.name}</h2>
                              <p>{objective.description}</p>
                              {objective.location && (
                                <p>
                                  <strong>Location:</strong> {objective.location.name}
                                </p>
                              )}
                              {objective.faction && (
                                <p>
                                  <strong>Faction:</strong> {objective.faction.name}
                                </p>
                              )}
                              {objective.image && (
                                <div className="relative mt-2 max-w-xs rounded-lg overflow-hidden">
                                  <Image
                                    src={objective.image}
                                    alt={objective.name}
                                    className="w-full h-full aspect-video rounded-lg object-cover"
                                    height={200}
                                    width={300}
                                  />
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="col-span-1">
                  <Accordion type="multiple" className="overflow-x-hidden">
                    <AccordionItem value="briefing">
                      <AccordionTrigger>
                        <h2 className="text-2xl font-semibold mb-2">Briefing</h2>
                      </AccordionTrigger>
                      <AccordionContent>
                        {task.briefing && (
                          <div className="mb-4">
                            <p>{task.briefing}</p>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="debriefing">
                      <AccordionTrigger>
                        <h2 className="text-2xl font-semibold mb-2">Debriefing</h2>
                      </AccordionTrigger>
                      <AccordionContent>
                        {task.debriefing && (
                          <div className="mb-4">
                            <p>{task.debriefing}</p>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/3 flex flex-col ml-6">
        <div className="sticky top-6 rounded-lg">
          <div className="relative">
              <Image 
                src={`/task_banners/${task.vendor.name.replaceAll(" ", "").toLocaleLowerCase()}_task_banner.webp`}
                alt={task.name}
                className="w-full h-auto object-cover rounded-t-lg"
                height={100}
                width={400}
                priority
              />
              <div className="absolute top-1/2 left-0 right-0 bottom-0 bg-gradient-to-t from-card"></div>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">{task.name}</h2>
              <div className="flex flex-row gap-2">
                <p className="text-sm text-muted-foreground">{task.objectives[0].type}</p>
                <p className="text-sm text-muted-foreground">▪</p>
                <p className="text-sm text-muted-foreground">{task.vendor.name}</p>
                <p className="text-sm text-muted-foreground">▪</p>
                <p className="text-sm text-muted-foreground">{task.objectives[0].location?.name}</p>
              </div>
              {task.items && task.items.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Items</h2>
                  <div className="flex flex-wrap gap-1">
                    <div className="flex gap-1">
                      {task.items.map((item, index) => (
                        <Item
                          key={index}
                          name={item.name}
                          shortName={item.shortName}
                          size={item.size}
                          imageUrl={item.image}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
      </div>
        
    </div>
  );
}
