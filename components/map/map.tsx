"use client";

import { MapContainer, TileLayer, useMapEvents } from "react-leaflet"
import L, { CRS, LatLngBoundsExpression, LatLngExpression, Map } from "leaflet"
import MapMarkers from "./markers";
import "leaflet/dist/leaflet.css"
import { useSearchParams } from "next/navigation";
import { Tasks } from "@/lib/data/tasks";
import { useEffect, useState } from "react";

export default function MapComponent({ setMapRef }: { setMapRef: (value: L.Map | null) => void }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);
  
  const MapEvents = () => {
    const map = useMapEvents({
      click(e) {
        console.log(`${e.latlng.lat}, ${e.latlng.lng}`);
      }
    });
    return false;
  }

  function formatParam(param: string | null | undefined) {
    if (typeof param === "string") {
      return param
      .replaceAll(" ", "-")
      .replaceAll("'", "")
      .toLowerCase()
      .trim()
    } else {
      return null
    }
  }

  const params = useSearchParams();

  const factionParam = params.get("faction");
  const taskParam = params.get("task");
  const objectiveParam = params.get("objective");

  const task = Tasks.find((task) => formatParam(task.name) === formatParam(taskParam));
  const objective = task?.objectives.find((objective) => (formatParam(objective.name) === formatParam(objectiveParam)) && (formatParam(objective.faction?.shorthand) === formatParam(factionParam)))

  const paramPosition = objective?.position as LatLngExpression;

  const centerPosition = [0.7521535241589289, -0.7050094818702314] as LatLngExpression
  const maxBounds = [[0.3662, -0.0985], [1.049, -1.308]] as LatLngBoundsExpression

  return (
    <MapContainer
      className="map"
      ref={(ref) => setMapRef(ref)}
      attributionControl={false}
      renderer={L.canvas()}
      zoomControl={false}
      crs={L.CRS.EPSG3395 as CRS}
      center={paramPosition || centerPosition}
      maxBoundsViscosity={10}
      zoom={paramPosition && 15 || 12}
      zoomSnap={0}
      zoomDelta={100}
      zoomAnimation
      minZoom={9}
      maxZoom={15}
      inertiaDeceleration={2500}
      wheelDebounceTime={200}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      boxZoom={true}
      fadeAnimation={true}
      bounceAtZoomLimits={false}
    >
      <TileLayer
        className="tile-map"
        bounds={maxBounds}
        tileSize={256}
        keepBuffer={isMobile ? 0 : 24}
        updateWhenZooming={!isMobile}
        updateInterval={isMobile ? 400 : 10}
        url="https://tiles.gzwmap.com/v1/{z}/{y}/{x}"
        updateWhenIdle={isMobile}
      />
      <MapEvents />
      <MapMarkers />
    </MapContainer>
  )
}

//https://tiles.mapgenie.io/games/gray-zone-warfare/lamang-island/default-v3