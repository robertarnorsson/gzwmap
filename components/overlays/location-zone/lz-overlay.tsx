"use client"

import { lz } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const lzMarker = (lz: lz) => {

  return (
    <div className='lz-marker-pin'>
      <Image className='lz-marker-icon' src='/lz.jpg' draggable={false} unoptimized={true} width={22} height={12} alt={lz.name}></Image>
      <span className={cn(
        inter.className,
        'lz-marker-text marker-text'
      )}>{lz.name}</span>
    </div>
  )
}
