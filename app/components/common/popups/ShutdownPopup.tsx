import { Link } from "@remix-run/react"
import { X } from "lucide-react"
import { useLocalStorage } from "~/context/LocalStorageContext";

export const MapShutdownPopup = () => {
  const { actions } = useLocalStorage();
  
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-[99999]">
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative grid-bg border border-border p-8 max-w-[500px]">
          <button
            className="absolute top-4 right-4"
            onClick={() => {
              actions.popup.toggleShutdown()
            }}
          >
            <X className="w-4 h-4" />
          </button>
          <div className="text-center mb-4">
            <h3 className="text-lg">This map will be shut down January 1, 2025</h3>
            <p className="text-xs mt-2">Why is this happening? This is because the map is not seeing much traffic and I have no time or motivation to maintain it. If you have the knowledge and motivation you can fork the github project and continue its development.</p>
          </div>
          <div>
            <h3 className="text-base">Some usefull links</h3>
            <div className="flex flex-col">
              <Link className="text-sm text-primary/85 underline" to='https://github.com/robertarnorsson/gzwmap'>Main map website</Link>
              <Link className="text-sm text-primary/85 underline" to='https://github.com/robertarnorsson/gzwmap-api'>API with data</Link>
              <Link className="text-sm text-primary/85 underline" to='https://github.com/robertarnorsson/gzwmap-tiles'>Tile server using cloudflare R2 buckets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}