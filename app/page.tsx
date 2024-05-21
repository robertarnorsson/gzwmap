"use client";

import 'ol/ol.css';
import { useEffect, useRef } from 'react';
import { map } from '@/lib/map/map';

export default function Page() {
  const mapContainer = useRef();
  
  useEffect(() => {
    map.setTarget(mapContainer.current);

    map.on("click", (e) => {
      console.log(e.coordinate.toString());
    })

    return () => {
      map.setTarget(undefined);
    };
  })

  return (
    <div className='relative h-screen'>
      <div ref={mapContainer as any}  className="h-screen w-full bg-[#0a1616]">
        <div id="info"></div>
      </div>
      <div className="absolute bg-black/50 flex flex-row gap-2 px-2 py-0.5 bottom-1.5 right-1.5 rounded-lg z-[9998]">
        <a href="https://github.com/robertarnorsson/gzwmap" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:text-muted-foreground transition duration-300">Github</a>
        <p className="text-xs text-muted-foreground">▪</p>
        <a href="https://twitter.com/gzwmap" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:text-muted-foreground transition duration-300">Twitter</a>
        <p className="text-xs text-muted-foreground">▪</p>
        <a href="/donate" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:text-muted-foreground transition duration-300">Donate</a>
        <p className="text-xs text-muted-foreground">▪</p>
        <a href="/about" target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:text-muted-foreground transition duration-300">About</a>
      </div>
    </div>
  );
}