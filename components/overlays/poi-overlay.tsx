import { poi } from "@/lib/types";

export const poiMarker = (poi: poi) => (
  <div>
    <p className="poi-marker-text poi-text-border select-none">{poi.name}</p>
  </div>
);
