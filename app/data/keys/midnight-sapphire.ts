import { key, KeyTypes, MarkerType } from "~/lib/types"
import { MidnightSapphire } from "~/data/locations"

export const MSLusia: key = {
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

export const MSKate: key = {
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

export const MSAnnaJana: key = {
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

export const MSElenaGar: key = {
  id: "K-G9D4N5",
  name: "Villa Elena Garage Key",
  shortName: "ElenaGar",
  description: "A key to the garage of Villa Elena in the Midnight Sapphire Resort.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.MIDNIGHTSAPPHIRE],
  questKey: false,
  location: MidnightSapphire,
  position: [16932.68522871777, 21335.172149040653]
}

export const MSGCStor: key = {
  id: "K-FSRATW",
  name: "Golf Club Storage Key",
  shortName: "GCStor",
  description: "A key to the Midnight Sapphire Golf Club storage room.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.MIDNIGHTSAPPHIRE],
  questKey: false,
  location: MidnightSapphire,
  position: [16156.494969625115, 21679.905040246424]
}

export const MSHOfc: key = {
  id: "K-BE2Q9V",
  name: "Midnight Sapphire Hotel Office Key",
  shortName: "MSH Ofc",
  description: "A key to one of the offices in the Midnight Sapphire Hotel.",
  size: [1, 1],
  image: KeyTypes.SKINNYGOLDKEY,
  types: [MarkerType.KEY, MarkerType.MIDNIGHTSAPPHIRE],
  questKey: false,
  location: MidnightSapphire,
  position: [16497.390942816866, 21678.799682811532]
}

export const MSSupply: key = {
  id: "K-G9DK40",
  name: "Hotel Supply Closet Key",
  shortName: "MS Supply",
  description: "A key to a supply closet in the Midnight Sapphire Hotel.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.MIDNIGHTSAPPHIRE, MarkerType.QUESTKEY],
  questKey: true,
  location: MidnightSapphire,
  position: [16506.510256003225, 21683.78939723673]
}