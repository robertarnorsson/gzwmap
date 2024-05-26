import { Graticule, Map, Overlay, View } from "ol";
import { Extent, getCenter } from "ol/extent";
import Tile from 'ol/layer/Tile';
import Projection from "ol/proj/Projection";
import XYZ from "ol/source/XYZ";
import { createXYZ } from "ol/tilegrid";
import TileState from 'ol/TileState';

export const tileExtent: Extent = [
  0,
  0,
  32768,
  32768,
];

export const maxExtent: Extent = [
  650,
  8473,
  32116,
  24208,
];

export const projection = new Projection({
  code: 'gzw-map',
  units: 'pixels',
  extent: tileExtent,
  worldExtent: tileExtent
});

/* export const tilegrid = new TileGrid({
  extent: tileExtent,
  resolutions: [128, 64, 32, 16, 8, 4, 2, 1]
}); */

export const rasterTileLayer = new Tile({
  preload: 128,
  extent: maxExtent,
  source: new XYZ({
    url: 'https://tiles.gzwmap.com/v2/{z}/{y}/{x}',
    tileGrid: createXYZ({
      maxZoom: 7,
      minZoom: 1,
      extent: tileExtent
    }),
    projection: projection,
    tileSize: 256,
    cacheSize: 128,
    transition: 0
  })
});

export const mapView = new View({
  center: getCenter(tileExtent),
  zoom: 3,
  projection: projection,
  enableRotation: false,
  maxZoom: 8
});

export function addPopup(map: Map) {
  const popupElement = document.createElement('div');
  popupElement.className = 'marker';

  const popupOverlay = new Overlay({
    element: popupElement,
    autoPan: false,
    positioning: 'bottom-center',
    stopEvent: true,
  });

  map.addOverlay(popupOverlay);
  return popupOverlay;
}

/* const bigGridSpacing = (maxExtent[3] - maxExtent[1]) / 8

const smallGridFeatures = [];
const smallGridSpacing = bigGridSpacing / 10;

for (let x = maxExtent[0] + 300; x < maxExtent[2]; x += smallGridSpacing) {
  smallGridFeatures.push(new Feature({
    geometry: new LineString([
      [x, maxExtent[1]],
      [x, maxExtent[3]]
    ])
  }));
}

for (let y = maxExtent[1] + 300; y < maxExtent[3]; y += smallGridSpacing) {
  smallGridFeatures.push(new Feature({
    geometry: new LineString([
      [maxExtent[0], y],
      [maxExtent[2], y]
    ])
  }));
}

export const smallGridLayer = new VectorLayer({
  renderBuffer: 1000,
  source: new VectorSource({
    features: smallGridFeatures
  }),
  minZoom: 5,
  style: new Style({
    stroke: new Stroke({
      color: 'rgba(220, 220, 220, 0.8)',
      width: 0.4
    })
  })
});

// Define the big grid layer
const bigGridFeatures = [];

for (let x = maxExtent[0] + 300; x < maxExtent[2]; x += bigGridSpacing) {
  bigGridFeatures.push(new Feature({
    geometry: new LineString([
      [x, maxExtent[1]],
      [x, maxExtent[3]]
    ])
  }));
}

for (let y = maxExtent[1] + 300; y < maxExtent[3]; y += bigGridSpacing) {
  bigGridFeatures.push(new Feature({
    geometry: new LineString([
      [maxExtent[0], y],
      [maxExtent[2], y]
    ])
  }));
}

export const bigGridLayer = new VectorLayer({
  renderBuffer: 1000,
  source: new VectorSource({
    features: bigGridFeatures
  }),
  style: new Style({
    stroke: new Stroke({
      color: 'rgba(220, 220, 220, 0.6)',
      width: 0.8
    })
  })
}); */