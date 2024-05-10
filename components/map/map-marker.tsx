import L, { LatLngTuple, Map } from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import ReactDOMServer from "react-dom/server";
import React, { useState } from "react";

interface MapMarkerProps {
  map: Map;
  position: LatLngTuple;
  iconSize?: [number, number]
  showZoom?: number;
  riseOnHover?: boolean;
  children: React.ReactNode;
  popup?: React.ReactNode;
}

export default function MapMarker({
  map,
  position,
  iconSize = [100, 30],
  showZoom,
  riseOnHover = true,
  children,
  popup
}: MapMarkerProps) {
  const [shouldRender, setShouldRender] = useState(
    map.getZoom() > (showZoom || map.getMinZoom())
  );

  useMapEvents({
    zoomend: () => {
      if (showZoom) {
        setShouldRender(map.getZoom() > (showZoom || map.getMinZoom()));
      }
    },
  });

  

  return shouldRender || !showZoom ? (
    <Marker
      riseOnHover={riseOnHover}
      position={position}
      icon={L.divIcon({
        className: "marker",
        html: ReactDOMServer.renderToString(children),
        iconSize: iconSize,
        iconAnchor: [iconSize[0]/2, iconSize[1]/2],
      })}
    >
      {popup && popup !== "" && <Popup className="map-popup">{popup}</Popup>}
    </Marker>
  ) : null;
}
