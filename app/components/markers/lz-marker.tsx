import { Marker } from "../map/Marker";
import { useSettings } from "~/context/SettingsProvider";
import { lz } from "~/lib/types";
import clsx from "clsx";
import { usePopup } from "~/context/PopupContext";

interface LZMarkerProps {
  lz: lz;
}

export const LZMarker = ({ lz }: LZMarkerProps) => {
  const { settings } = useSettings();
  const { showPopup } = usePopup();
  const selectedFaction = settings.faction;
  const isLocated = settings.lzsLocated.includes(lz.id);

  const shouldHide = !!(selectedFaction && lz.faction && lz.faction.id !== selectedFaction);

  const handleLZClick = () => {
    showPopup(lz.position, <LZPopupContent lz={lz} />, [0, -27]);
  };

  return (
    <Marker position={lz.position} hide={shouldHide} enableHoverEffect>
      <button className="group/lz relative" onClick={handleLZClick}>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-min h-min outline-none outline-offset-0 group-hover/lz:outline-[1.5px] group-hover/lz:outline-white">
            <div
              className={clsx(
                "w-[26px] h-[15px] border-2 border-black flex items-center justify-center",
                isLocated ? "bg-[#fded05]" : "bg-slate-300"
              )}
            >
              <span className="text-[9px] text-center font-bold tracking-wider text-black px-[8px]">
                LZ
              </span>
            </div>
          </div>
          <span className="bg-black text-gray-200/95 text-[8px] text-center tracking-widest px-1 py-[1px]">
            {lz.name}
          </span>
        </div>
      </button>
    </Marker>
  );
};

// Popup content component
interface LZPopupContentProps {
  lz: lz;
}

const LZPopupContent = ({ lz }: LZPopupContentProps) => {
  return (
    <div className="">
      <h2 className="text-lg font-bold">{lz.name}</h2>
      <p className="text-sm">{lz.location.name}</p>
    </div>
  );
};
