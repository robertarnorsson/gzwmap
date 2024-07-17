"use client";

import { useState, useEffect } from "react";
import { faction } from "@/lib/types";
import { Factions } from "@/lib/data/factions";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SettingsCard from "./settings-card";

const FactionSettings = () => {
  const [selectedFaction, setSelectedFaction] = useState<faction>(Factions[0]);
  const [oldSelectedFaction, setOldSelectedFaction] = useState<faction>(Factions[0]);

  const FactionButton = ({ faction, size = 100 }: { faction: faction, size?: number }) => {
    const isSelected = selectedFaction?.shorthand === faction.shorthand;
    const isOldSelected = oldSelectedFaction?.shorthand === faction.shorthand;

    return (
      <div
        onClick={() => setSelectedFaction(faction)}
        aria-label={`Select ${faction.name}`}
        className={cn(
          `outline outline-2 -outline-offset-2 px-0 w-[${size}px] h-[${size}px] rounded-[var(--radius)] cursor-pointer bg-transparent outline-transparent hover:bg-muted-foreground/10`,
          isOldSelected && "outline-border/50",
          isSelected && "outline-muted-foreground bg-muted-foreground/10",
        )}
      >
        <Image
          src={`/${faction.image}`}
          className="p-2 cursor-pointer"
          alt={faction.name}
          width={size}
          height={size}
          quality={20}
        />
      </div>
    );
  };

  const handleSave = () => {
    setOldSelectedFaction(selectedFaction);
  };

  const handleCancel = () => {
    setSelectedFaction(oldSelectedFaction);
  };

  const hasChanges = selectedFaction !== oldSelectedFaction;

  return (
    <SettingsCard
      title="Faction Settings"
      description="Used to show more relevant search results based on your faction."
      onSave={handleSave}
      onCancel={handleCancel}
      hasChanges={hasChanges}
    >
      <div className="flex flex-row gap-16 justify-center items-center py-8">
        {Factions.map((faction) => (
          <FactionButton key={faction.shorthand} faction={faction} size={140} />
        ))}
      </div>
    </SettingsCard>
  );
};

export default FactionSettings;
