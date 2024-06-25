import { lz } from "@/lib/types";
import { PopUp } from "../popup";

export const LZPopup = (lz: lz, onClick: () => void) => {

  return (
    <PopUp
      id={lz.id}
      onClick={onClick}
    >
      <h2 className="text-lg font-bold text-primary">{lz.name}</h2>
    </PopUp>
  );
}
