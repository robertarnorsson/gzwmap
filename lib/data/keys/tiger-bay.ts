import { key, KeyTypes, MarkerType } from "@/lib/types"
import { TigerBay } from "@/lib/data/locations"

export const TBUNLab: key = {
  id: "N/A",
  name: "UNLRA HQ Lab Key",
  shortName: "UNLab",
  description: "A key for the UNLRA HQ laboratory in Tiger Bay.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.TIGERBAY, MarkerType.QUESTKEY],
  questKey: true,
  location: TigerBay,
  position: [22194.564927461503, 15059.524027126856]
}

export const TBDorm: key = {
  id: "N/A",
  name: "UNLRA Dorm Container Key",
  shortName: "UNDrm",
  description: "A key for the UNLRA dorm container in Tiger Bay.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.TIGERBAY, MarkerType.QUESTKEY],
  questKey: true,
  location: TigerBay,
  position: [22193.53045591856, 13972.13789313094]
}

export const TBQr: key = {
  id: "N/A",
  name: "UNLRA Quarantine Key",
  shortName: "UNQr",
  description: "A key for the UNLRA quarantine section in Tiger Bay.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.TIGERBAY, MarkerType.QUESTKEY],
  questKey: true,
  location: TigerBay,
  position: [22078.53593289686, 14622.072463521974]
}