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
import ImageShowcase from "../menu/image-showcase";

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
            <div className="grid grid-cols-1 gap-6 flex-1 overflow-y-auto">
              <div className="col-span-2">
                <h1 className="text-3xl font-bold mt-4">Objectives</h1>
                <Accordion
                  type="single"
                  collapsible
                  className="overflow-x-hidden"
                  defaultValue={task.objectives.at(0)?.location.name}
                >
                  {Object.entries(groupedObjectives).map(
                    ([locationName, objectives], index) => (
                      <AccordionItem key={index} value={locationName}>
                        <AccordionTrigger>
                          <h2 className="text-2xl font-semibold">
                            {locationName}
                          </h2>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="rounded-lg">
                            {objectives.map((objective, index) => (
                              <li
                                key={index}
                                className="p-4 border-b last:border-none flex flex-row items-start"
                              >
                                <div className="flex flex-1 flex-col justify-around">
                                  <div>
                                    <p className="block text-xs font-light text-muted-foreground">
                                      {`Stage ${index + 1}`}
                                    </p>
                                    <h2
                                      id={toSlug(objective.name)}
                                      className="text-xl font-semibold"
                                    >
                                      {objective.name}
                                    </h2>
                                    <div className="flex flex-row gap-2">
                                      <p className="text-xs text-muted-foreground">
                                        {objective.type}
                                      </p>
                                      <p className="text-xs text-muted-foreground">▪</p>
                                      <p className="text-xs text-muted-foreground">
                                        {task.vendor.name}
                                      </p>
                                      <p className="text-xs text-muted-foreground">▪</p>
                                      <p className="text-xs text-muted-foreground">
                                        {objective.location?.name}
                                      </p>
                                    </div>
                                    <p>{objective.description}</p>
                                  </div>
                                  <div>
                                    {objective.items && (
                                      <div className="flex flex-wrap mt-2 gap-1">
                                        <div className="flex gap-1">
                                          {objective.items.map((item, index) => (
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
                                    )}
                                    {objective.key && (
                                      <div className="flex flex-wrap mt-2 gap-1">
                                        <div className="flex gap-1">
                                          <Item
                                              key={index}
                                              name={objective.key.name}
                                              shortName={objective.key.shortName}
                                              size={objective.key.size}
                                              imageUrl={objective.key.image}
                                            />
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {objective.image && (
                                  <div className="relative h-[180px] ml-4 max-w-xs rounded-lg overflow-hidden">
                                    <ImageShowcase
                                      url={objective.image}
                                      alt={objective.name}
                                    />
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  )}
                </Accordion>

                <div className="col-span-1">
                  <h1 className="text-3xl font-bold mt-16">Information</h1>
                  <Accordion type="multiple" className="overflow-x-hidden">
                    <AccordionItem value="briefing">
                      <AccordionTrigger>
                        <h2 className="text-2xl font-semibold">
                          Briefing
                        </h2>
                      </AccordionTrigger>
                      <AccordionContent>
                        {task.briefing && (
                          <div className="p-4">
                            <p>{task.briefing}</p>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="debriefing">
                      <AccordionTrigger>
                        <h2 className="text-2xl font-semibold">
                          Debriefing
                        </h2>
                      </AccordionTrigger>
                      <AccordionContent>
                        {task.debriefing && (
                          <div className="p-4">
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
              src={`/task_banners/${task.vendor.name
                .replaceAll(" ", "")
                .toLocaleLowerCase()}_task_banner.webp`}
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
            <p className="text-sm text-muted-foreground">
              {task.vendor.name}
            </p>
            {task.items ? task.items.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mt-3 mb-2">Items</h2>
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
            ) : (
              <div className="flex h-24 justify-center items-center">
                <p className="text-muted-foreground">No items needed</p>
              </div>
            )}
            {task.key && task.key.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mt-3 mb-2">{task.key.length == 1 ? "Key" : "Keys"}</h2>
                <div className="flex flex-wrap gap-1">
                  <div className="flex gap-1">
                    {task.key.map((key, index) => (
                      <Item
                        key={index}
                        name={key.name}
                        shortName={key.shortName}
                        size={key.size}
                        imageUrl={key.image}
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
