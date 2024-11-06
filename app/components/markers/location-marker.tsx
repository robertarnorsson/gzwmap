import { Marker } from "../map/Marker";
import { location } from "~/lib/types";

interface LocationMarkerProps {
    location: location;
}

export const LocationMarker = ({ location }: LocationMarkerProps) => {

  return (
    <Marker position={location.position}>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold">{location.name}</p>
      </div>
    </Marker>
  );
};
