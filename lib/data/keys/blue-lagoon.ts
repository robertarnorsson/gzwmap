import { key, KeyTypes, MarkerType } from "@/lib/types"
import { BlueLagoon } from "@/lib/data/locations"

export const BLStrg: key = {
  id: "N/A",
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