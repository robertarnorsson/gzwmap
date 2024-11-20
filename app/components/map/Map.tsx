import React, { useEffect, useRef } from 'react';
import { useData } from '~/context/DataContext';
import { useMap } from '~/context/MapContext';
import { useMarkerNavigation } from '~/hooks/useMarkerNavigation';
import { Cursor } from './Cursor';
import { useSidebar } from '../ui/sidebar';

const Map: React.FC = () => {
  const { map, isMapLoaded } = useMap();
  const { isMobile } = useSidebar();
  const { loaded } = useData();
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useMarkerNavigation({ defaultZoom: 6 });

  useEffect(() => {
    if (map && mapContainerRef.current) {
      map.setTarget(mapContainerRef.current);
    }

    return () => {
      if (map) map.setTarget(undefined);
    };
  }, [map]);

  return (
    <div className="relative w-full h-full">
      {!isMapLoaded && loaded && (
        <div className="absolute inset-0 z-0 grid-bg-plus flex items-center justify-center">
          <div className='px-8 py-6 bg-background border border-border'>
            <span>Loading map...</span>
          </div>
        </div>
      )}
      {isMapLoaded && !isMobile && (
        <Cursor />
      )}
      <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} className="grid-bg-plus cursor-crosshair" />
    </div>
  );
};

export default Map;
