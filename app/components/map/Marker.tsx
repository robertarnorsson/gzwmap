import { Overlay } from "ol";
import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useMap } from "~/context/MapContext";

interface MarkerWrapperProps {
  position: [number, number];
  hide?: boolean;
  children: ReactNode;
}

export const Marker = ({ position, hide = false, children }: MarkerWrapperProps) => {
  const { map } = useMap();
  const markerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<Overlay | null>(null);
  const [overlayReady, setOverlayReady] = useState(false);

  useEffect(() => {
    if (!map) {
      return;
    }

    if (hide) {
      // Remove overlay if hide is true
      if (overlayRef.current) {
        map.removeOverlay(overlayRef.current);
        overlayRef.current = null;
      }
      return;
    }

    // Create marker container and overlay if not already created
    if (!markerRef.current) {
      markerRef.current = document.createElement("div");
    }

    if (!overlayRef.current) {
      overlayRef.current = new Overlay({
        element: markerRef.current,
        positioning: "center-center",
        stopEvent: false,
      });
      overlayRef.current.setPosition(position);
      map.addOverlay(overlayRef.current);

      // Set overlay as ready once initialized
      setOverlayReady(true);
    } else {
      // Update position if overlay already exists and hide is false
      overlayRef.current.setPosition(position);
    }

    // Cleanup function
    return () => {
      if (overlayRef.current) {
        map.removeOverlay(overlayRef.current);
        overlayRef.current = null;
      }
    };
  }, [map, position, hide]); // Include `hide` as a dependency

  // Render children in portal only when overlay is ready and hide is false
  return overlayReady && markerRef.current && !hide
    ? createPortal(children, markerRef.current)
    : null;
};
