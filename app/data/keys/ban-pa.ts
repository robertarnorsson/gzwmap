import { key, KeyTypes, MarkerType } from "~/lib/types"
import { BanPa } from "~/data/locations"

export const BPElder: key = {
  id: "K-UY985A",
  name: "Ban Pa Elder's House Key",
  shortName: "BP Elder",
  description: "A key to the Elder's house in Ban Pa.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.BANPA, MarkerType.QUESTKEY],
  questKey: true,
  location: BanPa,
  position: [23055.545303944447, 15992.634866745275]
}

export const BPHut: key = {
  id: "K-VXFWEK",
  name: "Ban Pa Fishing Hut Key",
  shortName: "BP Hut",
  description: "A key to one of the fishing huts in Ban Pa.",
  size: [1, 1],
  image: KeyTypes.SKINNYGOLDKEY,
  types: [MarkerType.KEY, MarkerType.BANPA, MarkerType.QUESTKEY],
  questKey: true,
  location: BanPa,
  position: [23081.629162565205, 16005.526257438405]
}

export const BPWare: key = {
  id: "K-DSBK1S",
  name: "Ban Pa Warehouse Key",
  shortName: "BP Ware",
  description: "A key to a warehouse in Ban Pa.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.BANPA],
  questKey: false,
  location: BanPa,
  position: [22967.383441520287, 16096.384862159823]
}