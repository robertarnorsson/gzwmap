import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MapBrowserEvent, Overlay } from "ol";
import { useMap } from "~/context/MapContext";
import { usePopup } from "~/context/PopupContext";

export const Popup = () => {
  const { popupPosition, popupContent, popupOffset, hidePopup } = usePopup();
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
        offset: popupOffset, // Use the custom offset here
        element: popupRef.current,
        positioning: "bottom-center",
        stopEvent: true,
      });
      map.addOverlay(overlayRef.current);
      setOverlayReady(true);
    } else {
      overlayRef.current.setOffset(popupOffset); // Update offset if already created
    }

    overlayRef.current.setPosition(popupPosition);

    return () => {
      if (overlayRef.current) {
        map.removeOverlay(overlayRef.current);
        overlayRef.current = null;
      }
    };
  }, [map, popupPosition, popupContent, popupOffset]);

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
        <div className="grid-background border border-border min-w-80 p-4 shadow-md relative">
          {popupContent}
          <div className="absolute -bottom-[13px] left-1/2 transform -translate-x-1/2">
          <svg
            width="24"
            height="12"
            viewBox="0 0 24 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="12,10 2,2 22,2"
              style={{ fill: "hsl(var(--background))", stroke: "hsl(var(--border))" }}
            />
          </svg>
          </div>
        </div>,
        popupRef.current
      )
    : null;
};
