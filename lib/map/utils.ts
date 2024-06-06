import { Overlay } from "ol";
import { Root, createRoot } from "react-dom/client";

export function openPopup(popup: Overlay, coordinates: [number, number], content: React.ReactNode) {
  const popupElement = popup.getElement()!;
  let root: Root | null = (popupElement as any).__reactRoot;

  if (!root) {
    root = createRoot(popupElement);
    (popupElement as any).__reactRoot = root;
  }

  root.render(content);
  popup.setPosition(coordinates);
  popupElement.classList.add("visible");
}

export function closePopup(popup: Overlay) {
  popup.getElement()!.classList.remove("visible");
  popup.setPosition(undefined);
}