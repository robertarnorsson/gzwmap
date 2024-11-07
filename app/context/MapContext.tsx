// React
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Openlayers
import Map from 'ol/Map';
import { View } from 'ol';
import {  maxExtent, projection, tileExtent } from '~/lib/map';
import { getCenter } from 'ol/extent';
import Tile from 'ol/layer/Tile';
import { XYZ } from 'ol/source';
import { createXYZ } from 'ol/tilegrid';

interface MapContextType {
  map: Map | null;
}

const MapContext = createContext<MapContextType | null>(null);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [map, setMap] = useState<MapContextType['map']>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const mapInstance = new Map({
        layers: [
          new Tile({
            preload: 128,
            cacheSize: 256,
            extent: maxExtent,
            source: new XYZ({
              url: 'https://tiles.gzwmap.com/{z}/{x}/{y}',
              tileGrid: createXYZ({
                maxZoom: 7,
                minZoom: 1,
                extent: tileExtent
              }),
              projection: projection,
              tileSize: 256,
              cacheSize: 256,
              transition: 100
            })
          })
        ],
        view: new View({
          center: getCenter(maxExtent),
          zoom: 4,
          projection: projection,
          enableRotation: false,
          maxZoom: 9
        }),
        controls: [],
        maxTilesLoading: 64,
      });

      setMap(mapInstance);

      return () => {
        // Clean up map on unmount
        mapInstance.setTarget(undefined);
      };
    }
  }, []);

  return (
    <MapContext.Provider value={{ map }}>
      {children}
    </MapContext.Provider>
  );
}

export const useMap = (): MapContextType => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
};