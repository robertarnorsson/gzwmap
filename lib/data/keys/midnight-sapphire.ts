import { key, KeyTypes, MarkerType } from "@/lib/types"
import { MidnightSapphire } from "@/lib/data/locations"

export const Lusia: key = {
  id: "K-E5W79V",
  name: "Villa Lusia Key",
  shortName: "Lusia",
  description: "A key to the Villa Lusia in the Midnight Sapphire Resort.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.MIDNIGHTSAPPHIRE, MarkerType.QUESTKEY],
  questKey: true,
  location: MidnightSapphire,
  position: [16647.853692874898, 22126.752115446772]
}

export const Kate: key = {
  id: "K-6BJ1A2",
  name: "Villa Katherine Key",
  shortName: "Kate",
  description: "A key to Villa Katherine in the Midnight Sapphire Resort.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.MIDNIGHTSAPPHIRE, MarkerType.QUESTKEY],
  questKey: true,
  location: MidnightSapphire,
  position: [16911.497994909118, 21436.177290410324]
}

export const AnnaJana: key = {
  id: "K-5C4OVU",
  name: "Villa Anna Jana Key",
  shortName: "Anna Jana",
  description: "A key to Villa Anna Jana in the Midnight Sapphire Resort.",
  size: [1, 1],
  image: KeyTypes.SQUAREGOLDKEY,
  types: [MarkerType.KEY, MarkerType.MIDNIGHTSAPPHIRE, MarkerType.QUESTKEY],
  questKey: true,
  location: MidnightSapphire,
  position: [16624.65308557322, 21312.663810223024]
}