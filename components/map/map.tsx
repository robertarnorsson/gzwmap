import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet"
import L, { CRS, LatLngBoundsExpression } from "leaflet"
import MapMarkers from "./markers";
import "leaflet/dist/leaflet.css"

export default function Map() {
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        console.log(`${e.latlng.lat}, ${e.latlng.lng}`);
      },
    });
    return false;
  }

  const maxBounds = [[0.3662, -0.0985], [1.049, -1.308]] as LatLngBoundsExpression

  return (
    <MapContainer
      id="map-bg"
      className="map"
      attributionControl={false}
      zoomControl={false}
      crs={L.CRS.EPSG3395 as CRS}
      center={[0.7521535241589289, -0.7050094818702314]}
      maxBounds={maxBounds}
      maxBoundsViscosity={10}
      zoom={12}
      zoomSnap={0.2}
      minZoom={12}
      maxZoom={15.4}
      doubleClickZoom={true}
      scrollWheelZoom={true}
    >
      <TileLayer className="tile-map"
        url="https://tiles.mapgenie.io/games/gray-zone-warfare/lamang-island/default-v1/{z}/{y}/{x}.jpg"
      />
      <MapEvents />
      <MapMarkers />
    </MapContainer>
  )
}