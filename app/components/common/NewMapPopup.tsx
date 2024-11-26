import { X } from "lucide-react";
import { useLocalStorage } from "~/context/LocalStorageContext"

export const NewMapPopup = () => {
  const { actions } = useLocalStorage();

  return (
    <div className="absolute bottom-4 right-4 max-w-80 z-[99990]">
      <button
        className="absolute top-4 right-4"
        onClick={() => {
          actions.popup.toggleNewMap()
        }}
      >
        <X className="w-4 h-4" />
      </button>
      <div className="grid-bg border p-4">
        <h3 className="text-lg font-semibold">Welcome to the new map</h3>
        <p className="text-sm text-muted-foreground">The map has gone through huge changes and been fully rewritten. We have added the ability to mark tasks as complete, mark LZs as discovered and mark keys as collected. There is still much to be done like a search and more statistics to see how far you have progressed in the game. Hope you enjoy and share the map with your friends.</p>
      </div>
    </div>
  )
}