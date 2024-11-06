import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MapBrowserEvent, Overlay } from "ol";
import { useMap } from "~/context/MapContext";
import { usePopup } from "~/context/PopupContext";

export const Popup = () => {
  const { popupPosition, popupContent, hidePopup } = usePopup();
  const { map } = useMap();
  const popupRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<Overlay | null>(null);
  const [overlayReady, setOverlayReady] = useState(false);

  useEffect(() => {
    if (!map || !popupPosition || !popupContent) return;

    if (!popupRef.current) {
      popupRef.current = document.createElement("div");
    }

    if (!overlayRef.current) {
      overlayRef.current = new Overlay({
        element: popupRef.current,
        positioning: "bottom-center",
        stopEvent: true,
      });
      map.addOverlay(overlayRef.current);
      setOverlayReady(true);
    }

    overlayRef.current.setPosition(popupPosition);

    return () => {
      if (overlayRef.current) {
        map.removeOverlay(overlayRef.current);
        overlayRef.current = null;
      }
    };
  }, [map, popupPosition, popupContent]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMapClick = (event: MapBrowserEvent<any>) => {
      if (popupRef.current && !popupRef.current.contains(event.originalEvent.target)) {
        hidePopup();
      }
    };

    if (map && popupPosition && popupContent) {
      map.on("click", handleMapClick);
    }

    return () => {
      if (map) {
        map.un("click", handleMapClick);
      }
    };
  }, [map, popupPosition, popupContent, hidePopup]);

  return overlayReady && popupRef.current && popupPosition && popupContent
    ? createPortal(
        <div className="bg-background/60 backdrop-blur-md p-4 shadow-md relative mb-[6px]">
          {popupContent}
          <div className="absolute bottom-[-7.5px] left-1/2 transform -translate-x-1/2 w-4 h-2 bg-background/60 backdrop-blur-md"
            style={{
              clipPath: 'polygon(50% 100%, 0 0, 100% 0)'
            }}
          />
        </div>,
        popupRef.current
      )
    : null;
};