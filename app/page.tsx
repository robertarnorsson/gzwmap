"use client";

import InfoMenu from '@/components/menu/info-menu';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function Page() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/map/map'), { 
      loading: () => (
        <div className='w-full h-full flex justify-center items-center'>
          <p>Loading map</p>
        </div>
      ),
      ssr: false,
    }
  ), [])

  return (
    <div className='relative h-screen'>
      <Map />
      <div className="absolute bg-black/50 flex flex-row gap-2 px-2 py-0.5 bottom-1.5 right-1.5 rounded-lg z-[9998]">
        <a href="https://github.com/robertarnorsson/gzwmap" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:text-muted-foreground transition duration-300">Github</a>
        <p className="text-xs text-muted-foreground">▪</p>
        <a href="/donate" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:text-muted-foreground transition duration-300">Donate</a>
        <p className="text-xs text-muted-foreground">▪</p>
        <a href="/about" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:text-muted-foreground transition duration-300">About</a>
      </div>
    </div>
  );
}