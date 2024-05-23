import { item } from "@/lib/types";
import { Gunny, Handshake, LabRat, Turncoat } from "@/lib/data/vendors";

export const GPSTracker: item = {
  id: "IT-001",
  name: "GPS Tracker",
  description: "A device that uses satellite signals to determine and record the precise location of an object or person. Commonly used for vehicle tracking or personal safety.",
  vendor: Gunny
}

export const CameraWiretap: item = {
  id: "IT-002",
  name: "Camera Wiretap",
  description: "A device that can be used to tap into any survaillance stream.",
  vendor: Handshake
}

export const BoxOfSupplies: item = {
  id: "IT-003",
  name: "Box of Supplies",
  description: "A box full of various items intended to bring relief to the locals.",
  vendor: LabRat
}

export const SampleCollectionKit: item = {
  id: "IT-004",
  name: "Sample Collection Kit",
  description: "This kit is used to safely collect various samples.",
  vendor: LabRat
}

export const PoisonVial: item = {
  id: "IT-005",
  name: "Poison Vial",
  description: "Contains a potent water-solluable toxin.",
  vendor: Turncoat
}