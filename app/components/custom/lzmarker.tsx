import { useState } from "react";
import { MarkerWrapper } from "../map/Marker";

interface LZMarkerProps {
  position: [number, number];
}

export const LZMarker = ({ position }: LZMarkerProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <MarkerWrapper position={position}>
      <button
        onClick={() => setClicked(!clicked)}
      >
        {clicked ? `✔️` : `❌`}
      </button>
    </MarkerWrapper>
  );
};
