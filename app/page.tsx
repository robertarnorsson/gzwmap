"use client";

import { SearchMenu } from '@/components/menu/search-menu';
import dynamic from 'next/dynamic';
import { LegacyRef, useMemo, useRef, useState } from 'react';
import SidePanel from '@/components/menu/side-menu';
import { Map } from 'leaflet';

export default function Page() {
  const [mapRef, setMapRef] = useState<L.Map | null>(null);

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
      <Map setMapRef={setMapRef} />
      <SearchMenu mapRef={mapRef} />
      <SidePanel mapRef={mapRef} />
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