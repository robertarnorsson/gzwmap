"use client";

import 'ol/ol.css';
import { useEffect, useRef } from 'react';
import { addPopup, mapView, rasterTileLayer } from '@/lib/map/map';
import { Map, Overlay } from 'ol';
import { factionOverlays, locationOverlays, lzOverlays, taskOverlays } from '@/lib/map/markers';
import { debounce } from 'ts-debounce';
import SideMenu from '@/components/menu/side-menu';
import { SearchMenu } from '@/components/menu/search-menu';

export default function Page() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | undefined>(undefined);
  const popupOverlayRef = useRef<Overlay | undefined>(undefined);

  useEffect(() => {
    const map = new Map({
      layers: [rasterTileLayer],
      view: mapView,
      controls: [],
      maxTilesLoading: 256,
    });

    map.setTarget(mapRef.current as HTMLDivElement);
    mapInstanceRef.current = map;

    const popupOverlay = addPopup(map);
    popupOverlayRef.current = popupOverlay;

    taskOverlays(map, popupOverlay);
    lzOverlays(map, popupOverlay);
    factionOverlays(map, popupOverlay);
    locationOverlays(map, popupOverlay);
    /* poiOverlays(map, popupOverlay); */

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
      map.setTarget(undefined);
    };
  }, []);

  return (
    <div className='relative h-screen'>
      <div ref={mapRef} className="map h-screen w-full bg-background z-0"></div>
      <SideMenu map={mapInstanceRef.current} popupOverlay={popupOverlayRef.current} />
      <SearchMenu map={mapInstanceRef.current} popupOverlay={popupOverlayRef.current} />
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
