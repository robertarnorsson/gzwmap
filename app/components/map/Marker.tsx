import { Overlay } from "ol";
import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useMap } from "~/context/MapContext";

interface MarkerWrapperProps {
  position: [number, number];
  children: ReactNode;
}

export const MarkerWrapper = ({ position, children }: MarkerWrapperProps) => {
  const { map } = useMap();
  const markerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<Overlay | null>(null);
  const [overlayReady, setOverlayReady] = useState(false);

  useEffect(() => {
    if (!map) return;

    // Create marker container and overlay once
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
    }

    // Cleanup to remove overlay when unmounted
    return () => {
      if (overlayRef.current) {
        map.removeOverlay(overlayRef.current);
        overlayRef.current = null;
      }
    };
  }, [map, position]);

  // Render children in portal only when overlay is ready
  return overlayReady && markerRef.current
    ? createPortal(children, markerRef.current)
    : null;
};
