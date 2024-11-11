import { Overlay } from "ol";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useMap } from "~/context/MapContext";

interface MarkerWrapperProps {
  position: [number, number];
  hide?: boolean;
  children: ReactNode;
  enableHoverEffect?: boolean;
}

export const Marker = ({ position, hide = false, children, enableHoverEffect = false }: MarkerWrapperProps) => {
  const { map } = useMap();
  const markerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<Overlay | null>(null);
  const overlayReadyRef = useRef(false);

  useEffect(() => {
    if (!map) {
      return;
    }

    if (hide && overlayRef.current) {
      overlayRef.current.setPosition(undefined);
      map.removeOverlay(overlayRef.current);
      overlayRef.current = null;
      return;
    }

    if (!markerRef.current) {
      markerRef.current = document.createElement("div");
      markerRef.current.style.userSelect = 'none';
    }

    if (!overlayRef.current) {
      overlayRef.current = new Overlay({
        element: markerRef.current,
        positioning: "center-center",
        stopEvent: false,
      });
      map.addOverlay(overlayRef.current);
      overlayReadyRef.current = true;
    }

    if (overlayRef.current) {
      overlayRef.current.setPosition(position);
    }

    return () => {
      if (overlayRef.current) {
        map.removeOverlay(overlayRef.current);
        overlayRef.current = null;
      }
    };
  }, [map, position, hide]); // Cleaned up dependencies

  return overlayReadyRef.current && markerRef.current && !hide ? (
    createPortal(
      <div
        onMouseEnter={enableHoverEffect ? () => (markerRef.current!.parentElement!.style.zIndex = "1000") : undefined}
        onMouseLeave={enableHoverEffect ? () => (markerRef.current!.parentElement!.style.zIndex = "0") : undefined}
      >
        {children}
      </div>,
      markerRef.current
    )
  ) : null;
};
