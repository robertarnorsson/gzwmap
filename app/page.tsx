"use client";

import 'ol/ol.css';
import { useEffect, useRef } from 'react';
import { addPopup, mapView, rasterTileLayer } from '@/lib/map/map';
import { Map, Overlay } from 'ol';
import { locationOverlays, taskOverlays } from '@/lib/map/markers';

export default function Page() {
  const mapRef = useRef();
  
  useEffect(() => {
    const map = new Map({
      layers: [ rasterTileLayer ],
      view: mapView,
      controls: [],
      maxTilesLoading: 64
    })

    map.setTarget(mapRef.current)

    const popupOverlay = addPopup(map);

    taskOverlays(map, popupOverlay);
    locationOverlays(map, popupOverlay);

    map.on("click", (e) => {
      console.log(e.coordinate);
      popupOverlay.setPosition(undefined)
    })

    return () => {
      map.setTarget(undefined)
    }
  }, [])

  return (
    <div className='relative h-screen'>
      <div ref={mapRef as any}  className="h-screen w-full bg-[#0a1616]">
        
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