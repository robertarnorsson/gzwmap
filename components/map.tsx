import { MapContainer, TileLayer, useMapEvents } from "react-leaflet"
import L, { CRS, ImageOverlay, LatLngBoundsExpression } from "leaflet"
import "leaflet/dist/leaflet.css"
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import LZMarker from "./lz-marker";
import POIMarker from "./poi-marker";

export default function MyMap() {
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
      maxZoom={15}
      doubleClickZoom={false}
      scrollWheelZoom={true}
    >
      <TileLayer className="tile-map"
        url="https://tiles.mapgenie.io/games/gray-zone-warfare/lamang-island/default-v1/{z}/{y}/{x}.jpg"
      />
      <MapEvents />
      <LZMarker
        name="ALPHA 1"
        position={[0.9031536725764605, -0.40756702423095703]}
      />
      <LZMarker
        name="ALPHA 2"
        position={[0.9218588479058658, -0.49163818359375006]}
      />
      <LZMarker
        name="ALPHA 3"
        position={[0.8684646034375607, -0.47863483428955084]}
      />
      <LZMarker
        name="INDIA 1"
        position={[0.7080742020067341, -0.40727573620937385]}
      />
      <LZMarker
        name="INDIA 2"
        position={[0.6840415200129121, -0.4398393630981446]}
      />
      <LZMarker
        name="JULIET 1"
        position={[0.6831126690399042, -0.48999574199418483]}
      />
      <LZMarker
        name="JULIET 2"
        position={[0.6060933744878431, -0.5085313332785059]}
      />
      <LZMarker
        name="JULIET 3"
        position={[0.5906823044423134, -0.45434474945068365]}
      />
      <LZMarker
        name="KILO 1"
        position={[0.5364673701387217, -0.44769910018049647]}
      />
      <LZMarker
        name="KILO 2"
        position={[0.5321498355892613, -0.41644493828086665]}
      />
      <LZMarker
        name="GOLF 1"
        position={[0.8825908269282846, -0.6198692321777345]}
      />
      <LZMarker
        name="GOLF 2"
        position={[0.8572327055572856, -0.5890560150146485]}
      />
      <LZMarker
        name="HOTEL 1"
        position={[0.9463525409309237, -0.6605100631713867]}
      />
      <LZMarker
        name="HOTEL 2"
        position={[0.883670811207371, -0.6673336029052734]}
      />
      <LZMarker
        name="HOTEL 3"
        position={[0.900907316974989, -0.7487869262695314]}
      />
      <LZMarker
        name="FOXTROT 1"
        position={[0.9553378378784053, -0.764751434326172]}
      />
      <LZMarker
        name="FOXTROT 2"
        position={[0.9492468458991019, -0.8151340484619141]}
      />
      <LZMarker
        name="CHARLIE 1"
        position={[0.948823878029034, -0.934514906546864]}
      />
      <LZMarker
        name="CHARLIE 2"
        position={[0.8669526191449345, -0.9667968750000001]}
      />
      <LZMarker
        name="CHARLIE 3"
        position={[0.8710997745961968, -0.9132814407348634]}
      />
      <LZMarker
        name="ECHO 1"
        position={[0.7697082486471709, -0.9804001624634506]}
      />
      <LZMarker
        name="ECHO 2"
        position={[0.7336807224896637, -0.9617659776084622]}
      />
      <LZMarker
        name="DELTA 1"
        position={[0.6055474861847417, -0.8880179867538085]}
      />
      <LZMarker
        name="DELTA 2"
        position={[0.6779019943276287, -0.9139480958377445]}
      />
      <LZMarker
        name="DELTA 3"
        position={[0.641774495761992, -0.9739915803704526]}
      />
      <LZMarker
        name="LIMA 1"
        position={[0.5837737812689557, -0.9365964264898732]}
      />
      <LZMarker
        name="LIMA 2"
        position={[0.5503121549891202, -0.9200093144439083]}
      />
      <LZMarker
        name="BRAVO 1"
        position={[0.5114152317539321, -0.7335181370487321]}
      />
      <LZMarker
        name="BRAVO 2"
        position={[0.5529314673851344, -0.6610552240322409]}
      />
      <LZMarker
        name="BRAVO 3"
        position={[0.5837737812689557, -0.7014497204265348]}
      />
      <POIMarker
        name="Pha Lang"
        position={[0.9042339000010519, -0.44763438237420244]}
      />
      <POIMarker
        name="Midnight Sapphire"
        position={[0.926783519622124, -0.6973743438720704]}
      />
      <POIMarker
        name="Hunter's Paradise"
        position={[0.9710188518207048, -0.798482894897461]}
      />
      <POIMarker
        name="Kiu Vongsa"
        position={[0.9165021796068686, -0.9450817108154298]}
      />
      <POIMarker
        name="Sawmill"
        position={[0.7507440764255938, -0.9621191024780275]}
      />
      <POIMarker
        name="Fort Narith"
        position={[0.6213558113436232, -0.938558578491211]}
      />
      <POIMarker
        name="YBL-1"
        position={[0.5658970463920925, -0.9308722466465681]}
      />
      <POIMarker
        name="Nam Thaven"
        position={[0.5390121827373863, -0.7022666931152345]}
      />
      <POIMarker
        name="Blue Lagoon"
        position={[0.5179565396467, -0.4330579549372882]}
      />
      <POIMarker
        name="Tiger Bay"
        position={[0.6364332864547015, -0.4724550247192383]}
      />
      <POIMarker
        name="Ban Pa"
        position={[0.6889664829421054, -0.4114723205566406]}
      />
      <POIMarker
        name="Pha Lang Airfield"
        position={[0.8646630417659631, -0.6118011474609376]}
      />
    </MapContainer>
  )
}