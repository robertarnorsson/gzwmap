import { Overlay } from "ol";

export function openPopup(popup: Overlay) {
  popup.getElement()!.classList.remove("visible");
  popup.setPosition(undefined);
}

export function closePopup(popup: Overlay) {
  popup.getElement()!.classList.remove("visible");
  popup.setPosition(undefined);
}