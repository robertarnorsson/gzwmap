import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface PopupContextType {
  popupPosition: [number, number] | null;
  popupContent: ReactNode | null;
  popupOffset: [number, number];
  showPopup: (position: [number, number], content: ReactNode, offset?: [number, number]) => void;
  hidePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [popupPosition, setPopupPosition] = useState<[number, number] | null>(null);
  const [popupContent, setPopupContent] = useState<ReactNode | null>(null);
  const [popupOffset, setPopupOffset] = useState<[number, number]>([0, -20]);

  const showPopup = useCallback((position: [number, number], content: ReactNode, offset: [number, number] = [0, -20]) => {
    setPopupPosition(position);
    setPopupContent(content);
    setPopupOffset(offset);
  }, []);

  const hidePopup = useCallback(() => {
    setPopupPosition(null);
    setPopupContent(null);
  }, []);

  return (
    <PopupContext.Provider value={{ popupPosition, popupContent, popupOffset, showPopup, hidePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
