import { location } from "@/lib/types";

export const locationMarker = (location: location) => (
  <div>
    <p className="location-marker-text location-text-border">{location.name}</p>
  </div>
);
