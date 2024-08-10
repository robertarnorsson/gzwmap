import { key, KeyTypes, MarkerType } from "@/lib/types"
import { BlueLagoon } from "@/lib/data/locations"

export const BLStrg: key = {
  id: "K-L0RBD3",
  name: "Blue Lagoon Resturant Storage Key",
  shortName: "BL Strg",
  description: "A key to a storage room in the Blue Lagoon.",
  size: [1, 1],
  image: KeyTypes.SKINNYGOLDKEY,
  types: [MarkerType.KEY, MarkerType.BLUELAGOON, MarkerType.QUESTKEY],
  questKey: true,
  location: BlueLagoon,
  position: [22554.86603645881, 12113.842134573713]
}

export const BLShack: key = {
  id: "K-BV6KFK",
  name: "Blue Lagoon Shack Key",
  shortName: "BL Shack",
  description: "A key to the back room of an old shack in the Blue Lagoon.",
  size: [1, 1],
  image: KeyTypes.SKINNYKEY,
  types: [MarkerType.KEY, MarkerType.BLUELAGOON, MarkerType.QUESTKEY],
  questKey: true,
  location: BlueLagoon,
  position: [22799.5950195818, 11971.518927656503]
}