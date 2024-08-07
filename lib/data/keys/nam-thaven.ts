import { key, KeyTypes, MarkerType } from "@/lib/types"
import { NamThaven } from "@/lib/data/locations"

export const NTDoctorsOffice: key = {
  id: "N/A",
  name: "Nam Thaven Doctor's Office Key",
  shortName: "NT Doc",
  description: "A key for the local doctor's office in Nam Thaven.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.NAMTHAVEN, MarkerType.QUESTKEY],
  questKey: true,
  location: NamThaven,
  position: [16065.50882633552, 11951.633912191932]
}

export const NTAttic: key = {
  id: "N/A",
  name: "Nam Thaven Resturant Storage Key",
  shortName: "NT Attic",
  description: "A key for the attic storage space of a resturant in Nam Thaven.",
  size: [1, 1],
  image: KeyTypes.ROUNDKEY,
  types: [MarkerType.KEY, MarkerType.NAMTHAVEN, MarkerType.QUESTKEY],
  questKey: true,
  location: NamThaven,
  position: [16313.505701775528, 12090.861535369435]
}

export const NTMotel: key = {
  id: "N/A",
  name: "Nam Thaven Motel Room Key",
  shortName: "NT Motel",
  description: "A key to one of the room in the Nam Thaven motel.",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.NAMTHAVEN],
  questKey: false,
  location: NamThaven,
  position: [16336.663947056411, 12003.923957741516]
}

export const NTLumber: key = {
  id: "N/A",
  name: "Nam Thaven Lumberyard Maintenance Room Key",
  shortName: "NT Lubmer",
  description: "No description",
  size: [1, 1],
  image: KeyTypes.SQUAREKEY,
  types: [MarkerType.KEY, MarkerType.NAMTHAVEN],
  questKey: false,
  location: NamThaven,
  position: [16692.42225467822, 12656.073327420738]
}