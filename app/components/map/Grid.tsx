import { useEffect } from "react";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Style, Stroke } from "ol/style";
import { Feature } from "ol";
import { LineString } from "ol/geom";
import { useMap } from "~/context/MapContext";
import { maxExtent } from "~/lib/map";

export const GridOverlay = () => {
  const { map } = useMap();

  const [minX, minY, maxX, maxY] = maxExtent;

  const coarseGridSizeX = (maxX - minX) / 14; // Calculate coarse grid size for X-axis
  const coarseGridSizeY = (maxY - minY) / 8; // Calculate coarse grid size for Y-axis

  const fineGridSizeX = coarseGridSizeX / 10; // Fine grid size based on coarse grid X
  const fineGridSizeY = coarseGridSizeY / 10; // Fine grid size based on coarse grid Y

  const gridColor = "#C2C2C290";

  useEffect(() => {
    if (!map) return;

    // Function to create grid lines
    const createGridLines = (gridSizeX: number, gridSizeY: number) => {
      const features = [];

      // Generate vertical grid lines
      for (let x = minX; x <= maxX; x += gridSizeX) {
        features.push(new Feature(new LineString([[x, minY], [x, maxY]])));
      }

      // Generate horizontal grid lines
      for (let y = minY; y <= maxY; y += gridSizeY) {
        features.push(new Feature(new LineString([[minX, y], [maxX, y]])));
      }

      return features;
    };

    // Coarse grid layer
    const coarseGridSource = new VectorSource({
      features: createGridLines(coarseGridSizeX, coarseGridSizeY),
    });

    const coarseGridLayer = new VectorLayer({
      source: coarseGridSource,
      style: new Style({
        stroke: new Stroke({
          color: gridColor,
          width: 1,
        }),
      }),
      updateWhileAnimating: true,
      updateWhileInteracting: true,
      minZoom: 0,
      maxZoom: 5,
    });

    // Fine grid layer
    const fineGridSource = new VectorSource({
      features: createGridLines(fineGridSizeX, fineGridSizeY),
    });

    const fineGridLayer = new VectorLayer({
      source: fineGridSource,
      style: new Style({
        stroke: new Stroke({
          color: gridColor,
          width: 1,
        }),
      }),
      updateWhileAnimating: true,
      updateWhileInteracting: true,
      minZoom: 5,
      maxZoom: 9,
    });

    map.addLayer(coarseGridLayer);
    map.addLayer(fineGridLayer);

    return () => {
      map.removeLayer(coarseGridLayer);
      map.removeLayer(fineGridLayer);
    };
  }, [map, coarseGridSizeX, coarseGridSizeY, fineGridSizeX, fineGridSizeY, minX, minY, maxX, maxY]);

  return null;
};
