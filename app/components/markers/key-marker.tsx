import { memo, useCallback, MouseEvent } from "react";
import { Marker } from "../map/Marker";
import { usePopup } from "~/context/PopupContext";
import { useLocalStorage } from "~/context/LocalStorageContext";
import { key } from "~/lib/types";
import { KeyPopupContent } from "../popups/key-popup";
import { KeyRound } from "lucide-react";

// "cKey" is for custom key because the prop name "key" is a default prop in every React component 
interface KeyMarkerProps {
  cKey: key;
}

export const KeyMarker = memo(({ cKey: key }: KeyMarkerProps) => {
  const { data, actions } = useLocalStorage();
  const { showPopup } = usePopup();

  const selectedFaction = data.user.faction;
  const shouldHide = !!(selectedFaction && key.faction && key.faction.id !== selectedFaction);
  const isCollected = data.user.collectedKeys.includes(key.id);

  const handleClick = useCallback((position: [number, number]) => {
    showPopup(position, <KeyPopupContent cKey={key} />, [0, -20]);
  }, [showPopup, key]);

  const handleCollected = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (data.user) {
      event.preventDefault();
      if (isCollected) {
        actions.user.removeCollectedKey(key.id);
      } else {
        actions.user.addCollectedKey(key.id);
      }
    }
  }, [data.user, isCollected, actions.user, key.id]);

  // Utility function to render a marker for a position
  const renderMarker = (position: [number, number]) => (
    <Marker position={position} hide={shouldHide} enableHoverEffect>
      <button
        className="group/key relative p-1.5"
        onClick={() => handleClick(position)}
        onContextMenu={handleCollected}
      >
        <div className={isCollected ? 'bg-lime-200' : 'bg-yellow-500'}>
          <div className="flex justify-center items-center w-3 h-3 border border-black relative overflow-hidden group-hover/key:outline group-hover/key:outline-white group-hover/key:outline-[1.5px]">
            <KeyRound strokeWidth={4} className="w-2 h-2 text-black" />
          </div>
        </div>
        <div className="absolute bottom-1/2 left-6 transform translate-y-6 group-hover/key:translate-y-1/2 grid-bg border border-border text-primary text-xs px-2 py-1 shadow-lg opacity-0 group-hover/key:opacity-100 transition-all text-nowrap pointer-events-none">
          <span className="text-xs text-primary/85">{key.name}</span>
        </div>
      </button>
    </Marker>
  );

  // Check if key.position is a single position or an array of positions
  if (Array.isArray(key.position[0])) {
    // key.position is an array of positions
    return (
      <>
        {(key.position as [number, number][]).map((pos, index) => (
          <div key={index}>{renderMarker(pos)}</div>
        ))}
      </>
    );
  }

  // key.position is a single position
  return renderMarker(key.position as [number, number]);
});

KeyMarker.displayName = "KeyMarker";
