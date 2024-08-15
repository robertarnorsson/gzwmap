import { key, KeyTypes, MarkerType } from "@/lib/types"
import { TigerBay } from "@/lib/data/locations"

export const TBUNLab: key = {
  id: "K-ORR1EF",
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
  id: "K-V9Q0YC",
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
  id: "K-JP69O8",
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

export const TBPier: key = {
  id: "K-BDDJWK",
  name: "Pier Storage Key",
  shortName: "Pier",
  description: "A key to a storage shed located on the pier near the UNLRA camp in Tiger Bay.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.TIGERBAY],
  questKey: false,
  location: TigerBay,
  position: [22085.87535912263, 14682.726045079686]
}

export const TBUNMed: key = {
  id: "K-L4WRO3",
  name: "UNLRA Medical Container Key",
  shortName: "UNMed",
  description: "A key to an UNLRA medical shipping container in Tiger Bay.",
  size: [1, 1],
  image: KeyTypes.BLUETHICKKEY,
  types: [MarkerType.KEY, MarkerType.TIGERBAY],
  questKey: false,
  location: TigerBay,
  position: [22016.158633435578, 14800.250827426311]
}

export const TBUNCon: key = {
  id: "K-WQYYIA",
  name: "UNLRA Equipment Container Key",
  shortName: "UNCon",
  description: "A key to an UNLRA equipment shipping container in Tiger Bay.",
  size: [1, 1],
  image: KeyTypes.BLUETHICKKEY,
  types: [MarkerType.KEY, MarkerType.TIGERBAY],
  questKey: false,
  location: TigerBay,
  position: [22097.413847541422, 15069.368698417393]
}

export const TBCArm: key = {
  id: "K-HTGGP3",
  name: "Tiger Bay Central Armory Key",
  shortName: "TBC Arm",
  description: "A key to an improvised armory inside Tiger Bay Central.",
  size: [1, 1],
  image: KeyTypes.SQUAREGOLDKEY,
  types: [MarkerType.KEY, MarkerType.TIGERBAY],
  questKey: false,
  location: TigerBay,
  position: [[21677.122515838113, 14539.532972702702], [21681.163914904057, 14534.819887601992]]
}

export const TBLookout: key = {
  id: "K-1HWOZ4",
  name: "Improvised Bandit Lookout Key",
  shortName: "Lookout",
  description: "A key to a house used by the bandits to keep eyes on Tiger Bay Central.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.TIGERBAY],
  questKey: false,
  location: TigerBay,
  position: [21814.330084439844, 14556.066274338593]
}