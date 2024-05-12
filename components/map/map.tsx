import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet"
import L, { CRS, LatLngBoundsExpression } from "leaflet"
import MapMarkers from "./markers";
import "leaflet/dist/leaflet.css"

export default function Map() {
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        console.log(`${e.latlng.lat}, ${e.latlng.lng}`);
      }
    });
    return false;
  }

  const maxBounds = [[0.3662, -0.0985], [1.049, -1.308]] as LatLngBoundsExpression

  return (
    <MapContainer
      className="map"
      attributionControl={false}
      zoomControl={false}
      crs={L.CRS.EPSG3395 as CRS}
      center={[0.7521535241589289, -0.7050094818702314]}
      maxBoundsViscosity={10}
      zoom={12}
      zoomSnap={0}
      zoomDelta={1}
      zoomAnimation
      minZoom={9}
      maxZoom={15}
      trackResize
      doubleClickZoom={true}
      scrollWheelZoom={true}
      boxZoom={false}
      bounceAtZoomLimits={false}
    >
      <TileLayer
        className="tile-map"
        bounds={maxBounds}
        tileSize={256}
        keepBuffer={24}
        url="https://tiles.gzwmap.com/{z}/{y}/{x}"
        updateWhenIdle={false}
      />
      <MapEvents />
      <MapMarkers />
    </MapContainer>
  )
}

//https://tiles.mapgenie.io/games/gray-zone-warfare/lamang-island/default-v3