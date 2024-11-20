import { Marker } from "../map/Marker";
import { location } from "~/lib/types";

interface LocationMarkerProps {
    location: location;
}

export const LocationMarker = ({ location }: LocationMarkerProps) => {

  return (
    <Marker position={location.position}>
      <div className="flex flex-col items-center">
        <p className="w-fit tracking-wider font-bold text-[12px] px-1 py-0.5 text-[#e0db95] text-center whitespace-nowrap select-none">{location.name}</p>
      </div>
    </Marker>
  );
};
