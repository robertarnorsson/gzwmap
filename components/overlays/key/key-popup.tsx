import { key } from "@/lib/types";
import { PopUp } from "../popup";
import { Item } from "@/components/comp/item";

export const KeyPopup = (key: key, onClick: () => void) => {

  return (
    <PopUp
      id={key.id}
      onClick={onClick}
    >
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-xl font-bold text-primary text-pretty">{key.name}</span>
          <div className="flex flex-row gap-2">
            <p className="text-xs text-muted-foreground">{key.location.name}</p>
            <p className="text-xs text-muted-foreground">▪</p>
            <p className="text-xs text-muted-foreground">{key.questKey ? "Quest Key" : "Not Quest Key"}</p>
          </div>
        </div>
        <div>
          <span className="text-sm text-primary text-pretty font-semibold">Description</span>
          <p className="text-xs text-primary/85 text-pretty">{key.description}</p>
        </div>
        <div className="flex gap-1">
          <Item key={key.id}
            name={key.name}
            shortName={key.shortName || key.name}
            imageUrl={key.image}
            size={key.size}
          />
        </div>
      </div>
    </PopUp>
  );
}
