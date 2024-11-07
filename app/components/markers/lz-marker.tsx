import { Marker } from "../map/Marker";
import { useSettings } from "~/context/SettingsProvider";
import { lz } from "~/lib/types";
import clsx from "clsx";
import { useEffect, useMemo } from "react";

interface LZMarkerProps {
  lz: lz;
}

export const LZMarker = ({ lz }: LZMarkerProps) => {
  const { settings, updateSetting } = useSettings();
  const selectedFaction = settings.faction;
  const isLocated = settings.lzsLocated.includes(lz.id);

  const shouldHide = !!(selectedFaction && lz.faction && lz.faction.id !== selectedFaction);

  const handleLZClick = () => {
    console.log(lz.name);
    const updatedLzsLocated = isLocated
      ? settings.lzsLocated.filter((llz) => llz !== lz.id)
      : [...settings.lzsLocated, lz.id];

    updateSetting("lzsLocated", updatedLzsLocated);
  };

  return (
    <Marker position={lz.position} hide={shouldHide}>
      <button className="group/marker" onClick={handleLZClick}>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-min h-min outline-none outline-offset-0 group-hover/marker:outline-1 group-hover/marker:outline-white">
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
