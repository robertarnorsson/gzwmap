// React
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Openlayers
import Map from 'ol/Map';
import { MapBrowserEvent, View } from 'ol';
import { maxExtent, projection, tileExtent } from '~/lib/map';
import { getCenter } from 'ol/extent';
import { XYZ } from 'ol/source';
import { createXYZ } from 'ol/tilegrid';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import Static from 'ol/source/ImageStatic';

interface MapContextType {
  map: Map | null;
  isMapLoaded: boolean;
}

const MapContext = createContext<MapContextType | null>(null);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [map, setMap] = useState<MapContextType['map']>(null);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const mapInstance = new Map({
        layers: [
          new TileLayer({
            preload: 128,
            cacheSize: 1024,
            extent: maxExtent,
            source: new XYZ({
              url: 'https://tiles.gzwmap.com/v2/{z}/{x}/{y}',
              tileGrid: createXYZ({
                maxZoom: 6,
                minZoom: 1,
                extent: tileExtent
              }),
              projection: projection,
              tileSize: 256,
              transition: 0
            })
          }),
          new ImageLayer({
            source: new Static({
              url: 'https://gzwmap.com/assets/radiation.png',
              projection: projection,
              imageExtent: maxExtent,
            }),
          }),
        ],
        view: new View({
          center: getCenter(maxExtent),
          zoom: 3,
          projection: projection,
          enableRotation: false,
          maxZoom: 8
        }),
        controls: [],
        maxTilesLoading: 64
      });

      mapInstance.once('postrender', () => {
        setIsMapLoaded(true);
      });

      mapInstance.on('click', (event: MapBrowserEvent<UIEvent>) => {
        console.log(`${event.coordinate.at(0)}, ${event.coordinate.at(1)}`)
      })

      setMap(mapInstance);

      return () => {
        mapInstance.setTarget(undefined);
      };
    }
  }, []);

  return (
    <MapContext.Provider value={{ map, isMapLoaded }}>
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