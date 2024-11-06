import { MarkerType, item } from "~/lib/types";
import { Gunny, Handshake, LabRat, Turncoat } from "~/data/vendors";

export const GPSTracker: item = {
  id: "I-3CAOWP",
  name: "GPS Tracker",
  shortName: "Tracker",
  description: "A device that uses satellite signals to determine and record the precise location of an object or person. Commonly used for vehicle tracking or personal safety.",
  size: [1, 1],
  image: "/items/tools/marker.png",
  types: [MarkerType.ITEM, MarkerType.TOOL, MarkerType.GUNNY],
  vendor: Gunny
}

export const CameraWiretap: item = {
  id: "I-NLRFZ7",
  name: "Camera Wiretap",
  shortName: "Wiretap",
  description: "A device that can be used to tap into any survaillance stream.",
  size: [1, 1],
  image: "/items/tools/wiretap.png",
  types: [MarkerType.ITEM, MarkerType.TOOL, MarkerType.HANDSHAKE],
  vendor: Handshake
}

export const BoxOfSupplies: item = {
  id: "I-O5VEHR",
  name: "Box of Supplies",
  shortName: "Supplies",
  description: "A box full of various items intended to bring relief to the locals.",
  size: [2, 2],
  image: "/items/tools/supplies.png",
  types: [MarkerType.ITEM, MarkerType.TOOL, MarkerType.LABRAT],
  vendor: LabRat
}

export const SampleCollectionKit: item = {
  id: "I-5ZTRVC",
  name: "Sample Collection Kit",
  shortName: "Kit",
  description: "This kit is used to safely collect various samples.",
  size: [1, 1],
  image: "/items/tools/kit.png",
  types: [MarkerType.ITEM, MarkerType.TOOL, MarkerType.LABRAT],
  vendor: LabRat
}

export const PoisonVial: item = {
  id: "I-ULCZX9",
  name: "Poison Vial",
  shortName: "Poison",
  description: "Contains a potent water-solluable toxin.",
  size: [1, 1],
  image: "/items/tools/poison.png",
  types: [MarkerType.ITEM, MarkerType.TOOL, MarkerType.TURNCOAT],
  vendor: Turncoat
}