import { key } from "@/lib/types";
import { PopUp } from "../popup";

export const KeyPopup = (key: key, onClick: () => void) => {

  return (
    <PopUp
      id={key.id}
      onClick={onClick}
    >
      <h2 className="text-lg font-bold text-primary">{key.name}</h2>
    </PopUp>
  );
}
