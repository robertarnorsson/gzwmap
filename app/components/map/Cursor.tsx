import { MapBrowserEvent } from 'ol';
import { useEffect, useRef, useState } from 'react';
import { useMap } from '~/context/MapContext';
import useMousePosition from '~/hooks/use-mouse-position';
import { maxExtent } from '~/lib/map';

export const Cursor = () => {
  const { map } = useMap();
  const { x, y } = useMousePosition();

  const cursorRef = useRef<HTMLDivElement | null>(null);

  const [gridNumbers, setGridNumbers] = useState<{ gridX: number; gridY: number }>({ gridX: 100, gridY: 100 });
  const [isCursorVisible, setIsCursorVisible] = useState<boolean>(false);

  const [minX, minY, maxX, maxY] = maxExtent;

  const coarseGridSizeX = (maxX - minX) / 14;
  const coarseGridSizeY = (maxY - minY) / 8;
  const fineGridSizeX = coarseGridSizeX / 10;
  const fineGridSizeY = coarseGridSizeY / 10;

  useEffect(() => {
    if (!map) return;

    const calculateGridNumbers = (mapX: number, mapY: number) => {
      const gridX = Math.floor((mapX - minX) / fineGridSizeX) + 100;
      const gridY = Math.floor((mapY - minY) / fineGridSizeY) + 100;
  
      const isOutsideBounds =
        mapX < minX || mapX > maxX || mapY < minY || mapY > maxY;
  
      setIsCursorVisible(!isOutsideBounds);
      return { gridX, gridY };
    };

    const handlePointerMove = (event: MapBrowserEvent<UIEvent>) => {
      const [mapX, mapY] = event.coordinate;
      const { gridX, gridY } = calculateGridNumbers(mapX, mapY);
      setGridNumbers({ gridX, gridY });
    };

    map.on('pointermove', handlePointerMove);

    return () => {
      map.un('pointermove', handlePointerMove);
    };
  }, [fineGridSizeX, fineGridSizeY, map, minX, minY, maxX, maxY]);

  useEffect(() => {
    if (!cursorRef.current || !isCursorVisible) return;

    const cursor = cursorRef.current;

    requestAnimationFrame(() => {
      cursor.style.transform = `translate(${x}px, ${y}px)`;
    });
  }, [isCursorVisible, x, y]);

  return (
    <div
      ref={cursorRef}
      className={`w-6 h-6 fixed pointer-events-none z-[9999] transform ${
        isCursorVisible ? '' : 'hidden'
      }`}
    >
      <div className="relative w-full h-full transform -translate-x-1/2 -translate-y-1/2">
        <span className="absolute bottom-full left-1/2 drop-shadow-[0_0_2px_rgba(0,0,0,1)] transform -translate-x-1/2 text-xs font-mono px-1 py-0.5 rounded grid-x">
          {gridNumbers.gridX}
        </span>
        <span className="absolute top-1/2 left-full drop-shadow-[0_0_2px_rgba(0,0,0,1)] transform -translate-y-1/2 text-xs font-mono px-1 py-0.5 rounded grid-y">
          {gridNumbers.gridY}
        </span>
      </div>
    </div>
  );
};
