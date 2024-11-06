import { Marker } from "../map/Marker";
import { MapPin, MapPinCheck, MapPinCheckInside } from "lucide-react";
import { useSettings } from "~/context/SettingsProvider";
import { lz } from "~/lib/types";

interface LZMarkerProps {
  lz: lz;
}

export const LZMarker = ({ lz }: LZMarkerProps) => {
  const { settings, updateSetting } = useSettings();

  const isLocated = settings.lzsLocated.includes(lz.id);

  // Handle click to add/remove the LZ ID
  const handleLZClick = () => {
    console.log(lz.name);
    const updatedLzsLocated = isLocated
      ? settings.lzsLocated.filter(llz => llz !== lz.id)
      : [...settings.lzsLocated, lz.id];

    updateSetting('lzsLocated', updatedLzsLocated);
  };

  return (
    <Marker position={lz.position}>
      <button
        onClick={handleLZClick}
      >
        <div className="flex flex-col items-center">
          {isLocated
            ? <MapPinCheckInside />
            : <MapPin />
          }
          <p className="text-xs">{lz.name}</p>
        </div>
      </button>
    </Marker>
  );
};
