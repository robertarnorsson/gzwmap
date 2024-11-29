import { Marker } from "../map/Marker";
import { lz } from "~/lib/types";
import clsx from "clsx";
import { usePopup } from "~/context/PopupContext";
import { LZPopupContent } from "../popups/lz-popup";
import { useLocalStorage } from "~/context/LocalStorageContext";
import { useCallback, MouseEvent } from "react";

interface LZMarkerProps {
  lz: lz;
}

export const LZMarker = ({ lz }: LZMarkerProps) => {
  const { data, actions } = useLocalStorage();
  const { showPopup } = usePopup();
  const selectedFaction = actions.user.getUser().faction;
  const isLocated = actions.user.getUser().discoveredLZs.includes(lz.id);

  const shouldHide = !!(selectedFaction && lz.faction && lz.faction.id !== selectedFaction);
  

  const handleComplete = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (data.user) {
        event.preventDefault();
        if (isLocated) {
          actions.user.removeDiscoveredLZ(lz.id);
        } else {
          actions.user.addDiscoveredLZ(lz.id);
        }
      }
    },
    [data.user, isLocated, actions.user, lz.id]
  );

  const handleLZClick = () => {
    showPopup(lz.position, <LZPopupContent lz={lz} />, [0, -27]);
  };

  return (
    <Marker position={lz.position} hide={shouldHide} enableHoverEffect>
      <button
        className="group/lz relative"
        onClick={handleLZClick}
        onContextMenu={handleComplete}
      >
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