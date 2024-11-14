import { useEffect } from 'react';
import { useLocation, useNavigate } from '@remix-run/react';
import { useMap } from '~/context/MapContext';
import { getDataFromId } from '~/lib/map';
import { lz, objective, task } from '~/lib/types';
import { JSX } from 'react/jsx-runtime';
import { usePopup } from '~/context/PopupContext';
import { LZPopupContent } from '~/components/popups/lz-popup';
import { ObjectivePopupContent } from '~/components/popups/objective-popup';

interface MarkerNavigationProps {
  defaultZoom?: number;
}

export const useMarkerNavigation = ({ defaultZoom = 5 }: MarkerNavigationProps) => {
  const { map } = useMap();
  const location = useLocation();
  const navigate = useNavigate();
  const { showPopup } = usePopup();

  useEffect(() => {
    const handleNavigation = async () => {
      const params = new URLSearchParams(location.search);
      const markerParam = params.get('marker');
      const zoomParam = params.get('zoom');

      if (markerParam && map) {
        let markerId = markerParam;
        let taskId: string | null = null;

        // Check if markerParam contains a task ID
        if (markerParam.includes(':')) {
          [taskId, markerId] = markerParam.split(':');
        }

        // Fetch marker data asynchronously
        const marker = await getDataFromId(markerId);

        if (!marker) return;

        // Check if the marker has a 'position' property
        if ('position' in marker && Array.isArray(marker.position)) {
          map.getView().setCenter(marker.position);
        }

        // Handle zoom logic
        const view = map.getView();
        const minZoom = view.getMinZoom() ?? 1;
        const maxZoom = view.getMaxZoom() ?? 7;
        const zoomValue = zoomParam ? parseFloat(zoomParam) : defaultZoom;
        const clampedZoom = Math.max(minZoom, Math.min(maxZoom, zoomValue));
        view.setZoom(clampedZoom);

        // Handle popup content based on marker type
        let popupContent: JSX.Element | null = null;
        let popupOffset: [number, number] = [0, 0];
        if (markerId.startsWith('LZ')) {
          popupContent = <LZPopupContent lz={marker as lz} />;
          popupOffset = [0, -27];
        } else if (markerId.startsWith('O')) {
          const objectiveMarker = marker as objective;

          // Fetch task data if taskId is present
          let taskData: task | null = null;
          if (taskId) {
            taskData = await getDataFromId(taskId) as task | null;
          }

          if (taskData) {
            popupContent = <ObjectivePopupContent task={taskData} objective={objectiveMarker} />;
            popupOffset = [0, -20];
          }
        }

        if (popupContent) {
          if ('position' in marker && Array.isArray(marker.position)) {
            showPopup(marker.position as [number, number], popupContent, popupOffset);
          }
        }

        // Clear URL parameters
        navigate(location.pathname, { replace: true });
      }
    };

    handleNavigation();
  }, [location, map, navigate, showPopup, defaultZoom]);
};
