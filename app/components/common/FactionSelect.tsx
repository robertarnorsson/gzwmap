import { useData } from "~/context/DataContext"
import { useLocalStorage } from "~/context/LocalStorageContext"
import { faction } from "~/lib/types"

export const FactionSelect = () => {
  const { factions, loaded } = useData();
  const { actions } = useLocalStorage();

  function selectFaction(faction: faction) {
    actions.user.updateFaction(faction.id);
  };

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-[99999]">
      <div className="flex justify-center items-center w-full h-full">
        <div className="grid-bg border border-border p-8">
          <div className="text-center mb-4">
            <h3 className="text-lg">Select Your Faction</h3>
            <p className="text-xs text-muted-foreground">You can change this later in the settings</p>
          </div>
          <div className="flex flex-row space-x-4">
          {!loaded ? (
            <>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary animate-pulse rounded-xl"></div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary animate-pulse rounded-xl"></div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary animate-pulse rounded-xl"></div>
            </>
          ) : (
            factions.map((f) => (
              <button
                key={f.id}
                onClick={() => selectFaction(f)}
                className="relative group"
              >
                <img
                  src={`/${f.image}`}
                  alt={f.name}
                  className="w-20 h-20 md:w-24 md:h-24 cursor-pointer p-1 filter brightness-75 transition duration-200 hover:scale-110 hover:brightness-100"
                />
              </button>
            ))
          )}
        </div>
        </div>
      </div>
    </div>
  )
}