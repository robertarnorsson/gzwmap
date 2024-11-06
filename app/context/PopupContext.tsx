import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface PopupContextType {
  popupPosition: [number, number] | null;
  popupContent: ReactNode | null;
  showPopup: (position: [number, number], content: ReactNode) => void;
  hidePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [popupPosition, setPopupPosition] = useState<[number, number] | null>(null);
  const [popupContent, setPopupContent] = useState<ReactNode | null>(null);

  const showPopup = useCallback((position: [number, number], content: ReactNode) => {
    setPopupPosition(position);
    setPopupContent(content);
  }, []);

  const hidePopup = useCallback(() => {
    setPopupPosition(null);
    setPopupContent(null);
  }, []);

  return (
    <PopupContext.Provider value={{ popupPosition, popupContent, showPopup, hidePopup }}>
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
