import React, { useEffect, useRef } from 'react';
import { useMap } from '~/context/MapContext';
import { useMarkerNavigation } from '~/hooks/useMarkerNavigation';

const Map: React.FC = () => {
  const { map, isMapLoaded } = useMap();
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
      {!isMapLoaded && (
        <div className="absolute inset-0 z-0 grid-bg-plus flex items-center justify-center">
          <div className='px-8 py-6 bg-background border border-border'>
            <span>Loading map...</span>
          </div>
        </div>
      )}
      <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} className="z-10 grid-bg-plus cursor-crosshair" />
    </div>
  );
};

export default Map;
