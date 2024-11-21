import { useEffect, useState } from 'react';
import { Point } from 'ol/geom';
import { Feature } from 'ol';
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import { Style, Text, Fill, Stroke } from 'ol/style';
import { useMap } from '~/context/MapContext';
import { maxExtent } from '~/lib/map';

export const Cursor = () => {
  const { map } = useMap();

  const [isCursorVisible, setIsCursorVisible] = useState<boolean>(true);

  const [minX, minY, maxX, maxY] = maxExtent;
  const coarseGridSizeX = (maxX - minX) / 14;
  const coarseGridSizeY = (maxY - minY) / 8;
  const fineGridSizeX = coarseGridSizeX / 10;
  const fineGridSizeY = coarseGridSizeY / 10;

  useEffect(() => {
    if (!map) return;

    // Create a source and layer for the cursor
    const cursorSource = new VectorSource();
    const cursorLayer = new VectorLayer({
      source: cursorSource,
      updateWhileAnimating: true,
      updateWhileInteracting: true,
      style: (feature) => {
        const type = feature.get('type');
        return [
          new Style({
            text: new Text({
              text: type === 'gridX' ? `${feature.get('gridX')}` : `${feature.get('gridY')}`,
              font: 'bold 12px "Geist Mono", monospace',
              offsetY: type === 'gridX' ? -20 : 0,
              offsetX: type === 'gridY' ? 20 : 0,
              fill: new Fill({
                color: 'rgba(255, 255, 255, 0.8)',
              }),
              textAlign: type === 'gridY' ? 'left' : 'center',
              textBaseline: type === 'gridY' ? 'middle' : 'bottom',
            }),
            stroke: new Stroke({
              color: 'rgba(100, 100, 100, 0.8)',
              width: 1.5,
            })
          }),
        ]
      }      
    });

    if (isCursorVisible) {
      map.addLayer(cursorLayer);
    }

    // Create two features for gridX and gridY
    const gridXFeature = new Feature({
      geometry: new Point([0, 0]),
      type: 'gridX',
    });
    const gridYFeature = new Feature({
      geometry: new Point([0, 0]),
      type: 'gridY',
    });
    cursorSource.addFeatures([gridXFeature, gridYFeature]);

    const calculateGridNumbers = (mapX: number, mapY: number) => {
      const gridX = Math.floor((mapX - minX) / fineGridSizeX) + 100;
      const gridY = Math.floor((mapY - minY) / fineGridSizeY) + 100;

      const isOutsideBounds = mapX < minX || mapX > maxX || mapY < minY || mapY > maxY;

      setIsCursorVisible(!isOutsideBounds);

      return { gridX, gridY };
    };

    const handlePointerMove = (event: any) => {
      const [mapX, mapY] = event.coordinate;

      // Calculate grid numbers
      const { gridX, gridY } = calculateGridNumbers(mapX, mapY);

      // Update the gridX feature
      gridXFeature.setGeometry(new Point([mapX, mapY]));
      gridXFeature.setProperties({ gridX });

      // Update the gridY feature
      gridYFeature.setGeometry(new Point([mapX, mapY]));
      gridYFeature.setProperties({ gridY });
    };

    map.on('pointermove', handlePointerMove);
    map.on('change:view', handlePointerMove)

    return () => {
      map.un('pointermove', handlePointerMove);
      map.un('change:view', handlePointerMove);
      map.removeLayer(cursorLayer);
    };
  }, [map, minX, minY, maxX, maxY, fineGridSizeX, fineGridSizeY]);

  return null;
};
