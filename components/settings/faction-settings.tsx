"use client"

import { useEffect, useState } from "react";
import { faction } from "@/lib/types";
import { Factions } from "@/lib/data/factions";
import Image from "next/image";
import SettingsCard from "./settings-card";
import { useLocalStorage } from 'usehooks-ts';

const FactionSettings = () => {
  const [faction, setFaction] = useLocalStorage<faction | null>("faction", null);

  const [selectedFaction, setSelectedFaction] = useState<faction | null>(faction);
  const [oldSelectedFaction, setOldSelectedFaction] = useState<faction | null>(faction);

  const FactionButton = ({ faction, size = 100, selectedFaction, oldSelectedFaction, setSelectedFaction }: { faction: faction, size: number, selectedFaction: faction | null, oldSelectedFaction: faction | null, setSelectedFaction: (faction: faction) => void }) => {
    const [buttonClass, setButtonClass] = useState("");

    useEffect(() => {
      const isSelected = selectedFaction?.shorthand === faction.shorthand;
      const isOldSelected = oldSelectedFaction?.shorthand === faction.shorthand;

      const baseClass = `outline outline-2 -outline-offset-2 px-0 w-[${size}px] h-[${size}px] rounded-[var(--radius)] cursor-pointer hover:bg-muted-foreground/10`;
      let finalClass = baseClass;

      if (isSelected && isOldSelected) {
        finalClass += " outline-white bg-muted-foreground/10";
      } else if (isSelected) {
        finalClass += " outline-white bg-muted-foreground/10";
      } else if (isOldSelected) {
        finalClass += " outline-border/50";
      } else {
        finalClass += " bg-transparent outline-transparent";
      }

      setButtonClass(finalClass);
    }, [selectedFaction, oldSelectedFaction, faction, size]);

    return (
      <div
        onClick={() => setSelectedFaction(faction)}
        aria-label={`Select ${faction.name}`}
        className={buttonClass}
      >
        <Image
          src={`/${faction.image}`}
          className="p-2 cursor-pointer"
          alt={faction.name}
          width={size}
          height={size}
          quality={20}
          priority
        />
      </div>
    );
  };

  const handleSave = () => {
    setFaction(selectedFaction);
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
      onClick={handleSave}
      onCancel={handleCancel}
      hasChanges={hasChanges}
    >
      <div className="flex flex-col sm:flex-row gap-16 justify-center items-center py-8">
        {Factions.map((faction) => (
          <FactionButton
            key={faction.shorthand}
            faction={faction}
            size={140}
            selectedFaction={selectedFaction}
            oldSelectedFaction={oldSelectedFaction}
            setSelectedFaction={setSelectedFaction}
          />
        ))}
      </div>
    </SettingsCard>
  );
};

export default FactionSettings;
