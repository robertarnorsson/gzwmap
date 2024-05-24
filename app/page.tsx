"use client";

import 'ol/ol.css';
import { useEffect, useRef, useState } from 'react';
import { addPopup, mapView, rasterTileLayer } from '@/lib/map/map';
import { Map } from 'ol';
import { factionOverlays, locationOverlays, lzOverlays, poiOverlays, taskOverlays } from '@/lib/map/markers';

export default function Page() {
  const mapRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const mapZoomLevelRef = useRef(0);

  useEffect(() => {
    const map = new Map({
      layers: [
        rasterTileLayer,
      ],
      view: mapView,
      controls: [],
      maxTilesLoading: 64,
    })

    map.setTarget(mapRef.current)

    const popupOverlay = addPopup(map);

    taskOverlays(map, popupOverlay);
    lzOverlays(map, popupOverlay);
    factionOverlays(map, popupOverlay);
    locationOverlays(map, popupOverlay);
    poiOverlays(map, popupOverlay);

    map.getOverlays().forEach((overlay) => {
      const element = overlay.getElement();
      if (element && element.children.item(0)?.classList.contains("task-marker-pin")) {
        element.addEventListener('mouseenter', () => {
          element.parentElement!.style.zIndex = "1000";
        });
        element.addEventListener('mouseleave', () => {
          element.parentElement!.style.zIndex = '0';
        });
      }
    })

    map.on("click", (e) => {
      console.log(e.coordinate);
      popupOverlay.getElement()!.classList.remove("visible")
      setTimeout(() => {
        if (!popupOverlay.getElement()!.classList.contains("visible"))
        popupOverlay.setPosition(undefined)
      }, 200)
    })

    return () => {
      map.setTarget(undefined)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className='relative h-screen'>
      <div ref={mapRef as any}  className="map h-screen w-full bg-background z-0">
        
      </div>
      <div className="absolute bg-black/50 flex flex-row gap-2 px-2 py-0.5 bottom-1.5 right-1.5 rounded-lg z-10">
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