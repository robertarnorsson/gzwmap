import clsx from "clsx";
import { Check, Link, X } from "lucide-react";
import { toast } from "~/hooks/use-toast";
import { lz } from "~/lib/types";
import { copyMarker } from "~/lib/utils";
import { useLocalStorage } from "~/context/LocalStorageContext";

interface LZPopupContentProps {
  lz: lz;
}

export const LZPopupContent = ({ lz }: LZPopupContentProps) => {
  const { data, actions } = useLocalStorage();
  const userSettings = data.user;
  const isLocated = userSettings?.discoveredLZs.includes(lz.id);

  const handleChange = () => {
    if (userSettings) {
      if (isLocated) {
        actions.user.removeDiscoveredLZ(lz.id);
      } else {
        actions.user.addDiscoveredLZ(lz.id);
      }
    }
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
              copyMarker(`${lz.id}`);
              toast({
                description: 'Copied to clipboard'
              });
            }}
          >
            <Link className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
