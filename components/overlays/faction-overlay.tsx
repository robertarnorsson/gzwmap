"use client"

import { faction } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const factionMarker = (faction: faction) => (
  <div className='marker-pin marker-pin-img'>
    <Image className='faction-marker-img' src={`/${faction.image}`} draggable={false} unoptimized={true} width={22} height={12} alt={faction.name}></Image>
    <span className={cn(
      inter.className,
      'faction-marker-text marker-text'
    )}>{faction.name}</span>
  </div>
);
