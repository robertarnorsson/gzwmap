import { Map, Feature, Overlay } from 'ol';
import { Point } from 'ol/geom';
import { Fill, Stroke, Style, Text } from 'ol/style';
import { location } from '@/lib/types';
import { popupContent } from '@/components/map/location-popup';
import ReactDOMServer from "react-dom/server";
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

export const addLocationMarkers = (map: Map, locations: location[]) => {
  if (!locations || locations.length === 0) {
    console.error('No locations provided or locations array is empty.');
    return;
  }

  const vectorSource = new VectorSource();
  const offset: [number, number] = [0, 0];

  const applyOffset = (position: [number, number], offset: [number, number]): [number, number] => {
    return [position[0] + offset[0], position[1] + offset[1]];
  };

  const popupElement = document.createElement('div');
  popupElement.className = 'marker';

  const popupOverlay = new Overlay({
    element: popupElement,
    autoPan: true,
    positioning: 'bottom-center',
    stopEvent: false,
  });

  map.addOverlay(popupOverlay);

  locations.forEach((location) => {
    const offsetPosition = applyOffset(location.position, offset);

    const marker = new Feature({
      geometry: new Point(offsetPosition),
      location: location,
    });

    marker.setStyle(new Style({
      text: new Text({
        text: location.name,
        font: 'bold 14px KodeMono, monospace',
        fill: new Fill({ color: '#e0db95' }),
        stroke: new Stroke({
          color: '#000',
          width: 2,
        }),
        overflow: true,
        padding: [0, 2, 0, 2],
        backgroundFill: new Fill({ color: 'transparent' }),
      })
    }));

    vectorSource.addFeature(marker);
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
    renderBuffer: 1200,
  });

  map.addLayer(vectorLayer);

  map.on('click', (event) => {
    const feature = map.forEachFeatureAtPixel(event.pixel, (feature) => feature);
    
    if (feature?.get('location')) {
      const coordinates = (feature.getGeometry() as Point).getCoordinates();
      const featLocation = feature.get('location') as location;
      
      popupElement.innerHTML = ReactDOMServer.renderToString(popupContent(featLocation));
      popupOverlay.setPosition(coordinates);
    } else {
      popupOverlay.setPosition(undefined);
    }
  });
};
