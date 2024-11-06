// Map.tsx
import React, { useEffect, useRef } from 'react';
import { useMap } from '~/context/MapContext';

const Map: React.FC = () => {
  const { map } = useMap();
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (map && mapContainerRef.current) {
      map.setTarget(mapContainerRef.current);
    }

    return () => {
      if (map) map.setTarget(undefined);
    };
  }, [map]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} className='z-10' />;
};

export default Map;
