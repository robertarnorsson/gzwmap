import { Map, Feature, Overlay } from 'ol';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';
import { objective, task } from '@/lib/types';
import { taskPopup } from '@/components/old/map/task-popup';
import ReactDOMServer from "react-dom/server";
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

export const addTaskMarkers = (map: Map, tasks: task[]) => {
  if (!tasks || tasks.length === 0) {
    console.error('No tasks provided or tasks array is empty.');
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

  tasks.forEach((task) => {
    task.objectives.forEach((objective) => {
      const offsetPosition = applyOffset(objective.position, offset);

      const marker = new Feature({
        geometry: new Point(offsetPosition),
        task: task,
        objective: objective,
      });

      marker.setStyle(new Style({
        image: new Icon({
          anchor: [0.5, 0.5],
          src: '/task.png',
          scale: 0.25,
        }),
      }));

      vectorSource.addFeature(marker);
    });
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
    renderBuffer: 1200,
  });

  map.addLayer(vectorLayer);

  map.on('click', (event) => {
    const feature = map.forEachFeatureAtPixel(event.pixel, (feature) => feature);
    
    if (feature?.get('task')) {
      const coordinates = (feature.getGeometry() as Point).getCoordinates();
      const featTask = feature.get('task') as task;
      const featObjective = feature.get('objective') as objective;

      popupElement.innerHTML = ReactDOMServer.renderToString(taskPopup(featTask, featObjective));
      popupOverlay.setPosition(coordinates);
    } else {
      popupOverlay.setPosition(undefined);
    }
  });

  const info = document.getElementById('info');
  let currentFeature: any = undefined;

  const displayFeatureInfo = (pixel: any, target: any) => {
    const feature = target.closest('.ol-control')
      ? undefined
      : map.forEachFeatureAtPixel(pixel, function (feature) {
          return feature;
        });
    if (info) {
      if (feature) {
        info.style.left = pixel[0] + 'px';
        info.style.top = pixel[1] + 'px';
        if (feature !== currentFeature) {
          info.style.visibility = 'visible';
          const task = feature.get('task') || "Not found";
          info.innerText = task.name;
        }
      } else {
        info.style.visibility = 'hidden';
      }
        }
    currentFeature = feature;
  };

  map.on('pointermove', (evt) => {
    if (evt.dragging && info) {
      info.style.visibility = 'hidden';
      currentFeature = undefined;
      return;
    }

    const pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel, evt.originalEvent.target);
  })
};
