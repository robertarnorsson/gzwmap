import clsx from "clsx";
import { Check, Link, X } from "lucide-react";
import { useSettings } from "~/context/SettingsProvider";
import { lz } from "~/lib/types";
import { copy } from "~/lib/utils";

interface LZPopupContentProps {
  lz: lz;
}

export const LZPopupContent = ({ lz }: LZPopupContentProps) => {
  const { settings, updateSetting } = useSettings();
  const isLocated = settings.lzsLocated.includes(lz.id);

  const handleChange = () => {
    const updatedValue = isLocated
      ? settings.lzsLocated.filter(id => id !== lz.id)
      : [...settings.lzsLocated, lz.id];

    updateSetting('lzsLocated', updatedValue);
  };

  return (
    <>
      <h2 className="text-lg font-bold">{lz.name}</h2>
      <p className="text-sm">{lz.location.name}</p>
      
      <div className="flex flex-col mt-6 space-y-2">
        <div className="flex flex-row items-center space-x-6">
          <div className="w-full h-[1px] bg-border" />
          <span className="text-[8px] text-border text-nowrap select-none">Available Actions</span>
          <div className="w-full h-[1px] bg-border" />
        </div>
        <div className="flex flex-row space-x-2">
          <button
            className={clsx(
              "bg-primary/10 w-full p-2.5",
              isLocated && "bg-primary/20"
            )}
            onClick={handleChange}
          >
            {isLocated
              ? <div className="flex justify-center items-center space-x-4">
                  <Check className="w-4 h-4" />
                  <span className="text-xs uppercase">Located</span>
                </div>
              : <div className="flex justify-center items-center space-x-4">
                  <X className="w-4 h-4" />
                  <span className="text-xs uppercase">Locate</span>
                </div>
            }
          </button>
          <button
            className="bg-primary/10 p-2.5"
            onClick={() => {
              if (typeof document === 'undefined') return;
              if (typeof window === 'undefined') return;

              copy(`https://${window.location.hostname}?marker=${lz.id}&zoom=6`);
            }}
          >
            <Link className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
