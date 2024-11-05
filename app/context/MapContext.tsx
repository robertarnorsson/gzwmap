// React
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Openlayers
import Map from 'ol/Map';
import { View } from 'ol';
import {  maxExtent, projection, rasterTileLayer } from '~/lib/map-values';
import { getCenter } from 'ol/extent';

interface MapContextType {
  map: Map | null;
}

const MapContext = createContext<MapContextType | null>(null);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [map, setMap] = useState<MapContextType['map']>(null);

  useEffect(() => {
    // Initialize the map only once
    const mapInstance = new Map({
      layers: [
        rasterTileLayer
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