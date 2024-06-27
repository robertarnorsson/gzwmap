"use client";

import { task, objective } from "@/lib/types";
import Image from "next/image";
import { useMemo } from "react";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Item } from "../comp/item";

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

  const allSameLocation = useMemo(() => {
    const locations = new Set(task.objectives.map((obj) => obj.location.name));
    return locations.size === 1;
  }, [task.objectives]);

  return (
    <div className="container mx-auto p-6 bg-background text-foreground flex">
      <div className="flex-1 bg-card shadow-lg rounded-lg p-6 mb-6">
        <div className="flex flex-col h-full">
          <h1 className="text-4xl font-bold mb-4">{task.name}</h1>
          <div className="grid grid-cols-1 gap-6 flex-1 overflow-y-auto">
            <div className="col-span-2">
              {allSameLocation ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    {task.objectives[0].location.name}
                  </h2>
                  <ul className="mb-4 border border-muted rounded-lg">
                    {task.objectives.map((objective, index) => (
                      <li
                        key={objective.id}
                        className="p-4 border-b last:border-none border-muted"
                      >
                        <strong className="block">{`Stage ${index + 1}`}</strong>
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
                              layout="responsive"
                              width={300}
                              height={200}
                              objectFit="cover"
                              className="rounded-lg"
                            />
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Accordion type="single" collapsible>
                  {Object.entries(groupedObjectives).map(([locationName, objectives]) => (
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
                              <strong className="block">{`Stage ${index + 1}`}</strong>
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
                                    layout="responsive"
                                    width={300}
                                    height={200}
                                    objectFit="cover"
                                    className="rounded-lg"
                                  />
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))
                }
                </Accordion>
              )}

              <div className="col-span-1">
                <Accordion type="single" collapsible>
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
                </Accordion>
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

      <div className="md:w-1/3 flex flex-col ml-6">
        <div className="sticky top-6 bg-card p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">{task.name}</h2>
          <p>
            <strong>Type:</strong> {task.objectives[0].type}
          </p>
          <p>
            <strong>Given By:</strong> {task.vendor.name}
          </p>
          <p>
            <strong>Location:</strong> {task.objectives[0].location?.name}
          </p>
          {/* <h3 className="text-xl font-semibold mt-4">Rewards</h3>
          <ul>
            <li>2x AKMN</li>
            <li>1000 Experience</li>
            <li>150 Reputation</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
