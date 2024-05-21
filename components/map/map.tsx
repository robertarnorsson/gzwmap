"use client";

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { Extent, getCenter } from 'ol/extent';
import Tile from 'ol/layer/Tile';
import { Projection } from 'ol/proj';
import XYZ from 'ol/source/XYZ';
import { useEffect, useRef } from 'react';
/* import { addTaskMarkers } from '@/components/map/task-markers'; */
import { addLocationMarkers } from '@/components/map/location-markers';
import { Tasks } from '@/lib/data/tasks';
import { TileGrid } from 'ol/tilegrid';
import { Locations } from '@/lib/data/locations';

export default function MapComponent() {
  const mapContainer = useRef();

  const extent1: number = 0;
  const extent2: number = 0;
  const extent3: number = 32768;
  const extent4: number = 32768;

  const maxExtent: Extent = [extent1, extent2, extent3, extent4];

  const projection = new Projection({
    code: 'gzw-map',
    units: 'pixels',
    extent: maxExtent,
  });
  
  const tilegrid = new TileGrid({
    extent: maxExtent,
    resolutions: [128, 64, 32, 16, 8, 4, 2, 1]
  });
  
  useEffect(() => {
    const map = new Map({
      layers: [
        new Tile({
          preload: 64,
          source: new XYZ({
            url: 'http://127.0.0.1:5000/v2/{z}/{y}/{x}',
            tileGrid: tilegrid,
            projection: projection,
            tileSize: 256,
            cacheSize: 64,
          }),
        })
      ],
      view: new View({
        center: getCenter(maxExtent),
        zoom: 1,
        projection: projection,
        resolutions: tilegrid.getResolutions(),
        enableRotation: false,
      }),
      target: mapContainer.current,
      maxTilesLoading: 50
    });

    /* addTaskMarkers(map, Tasks); */
    addLocationMarkers(map, Locations);

    map.on("click", (e) => {
      console.log(e.coordinate.toString())
    })

    return () => {
      map.setTarget(undefined);
    };
  })

  Locations.forEach((loc) => {
    console.log(loc.name)
  })

  return (
    <div ref={mapContainer as any}  className="h-screen w-full bg-[#0a1616]">

    </div>
  );
}

//https://tiles.mapgenie.io/games/gray-zone-warfare/lamang-island/default-v3