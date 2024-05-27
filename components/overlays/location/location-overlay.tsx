import { location } from "@/lib/types";

export const locationMarker = (location: location) => (
  <div className="py-2 cursor-pointer">
    <p className="location-marker-text location-text-border select-none">{location.name}</p>
  </div>
);
