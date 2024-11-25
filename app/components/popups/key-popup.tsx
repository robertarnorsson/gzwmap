import { useLocalStorage } from "~/context/LocalStorageContext";
import { key } from "~/lib/types";
import { Check, Dot, Link, X } from "lucide-react";
import { copyMarker } from "~/lib/utils";
import { toast } from "~/hooks/use-toast";
import { Button } from "../ui/button";
import { Item } from "../common/Item";

// "cKey" is for custom key because the prop name "key" is a default prop in every react component 
interface KeyPopupContentProps {
  cKey: key;
}

export const KeyPopupContent = ({
  cKey: key
}: KeyPopupContentProps) => {
  const { data, actions } = useLocalStorage();
  const isCollected = data.user.collectedKeys.includes(key.id);

  const handleCollected = () => {
    if (data.user) {
      if (isCollected) {
        actions.user.removeCollectedKey(key.id);
      } else {
        actions.user.addCollectedKey(key.id);
      }
    }
  };

  return (
    <>
      <div className="group">
        <span className="text-xl font-bold text-primary text-pretty">
          {key.name}
        </span>
        <div className="flex flex-row gap-1">
          <p className="text-xs text-muted-foreground">{key.questKey ? 'For Quest' : 'Not for Quest'}</p>
          <Dot className="w-4 h-4 text-muted-foreground" />
          <p className="text-xs text-muted-foreground">{key.location.name}</p>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-xs text-primary/85 text-pretty">
          {key.description}
        </p>
      </div>
      {key && (
        <div className="mt-4">
          <span className="text-xs text-muted-foreground mb-1">
            Key
          </span>
          <Item
            name={key.name}
            shortName={key.shortName}
            image={key.image}
            size={key.size}
          />
        </div>
      )}
      <div className="flex flex-col mt-3">
        <div className="flex flex-row items-center space-x-6 mb-3">
          <div className="w-full h-[1px] bg-border" />
          <span className="text-[8px] text-border text-nowrap select-none">
            Available Actions
          </span>
          <div className="w-full h-[1px] bg-border" />
        </div>
        <div className="flex flex-row space-x-2">
          <Button
            className="w-full"
            variant='secondary'
            onClick={handleCollected}
          >
            {isCollected ? (
                <div className="flex justify-center items-center space-x-3">
                  <Check className="w-4 h-4" />
                  <span className="text-xs uppercase">Collected</span>
                </div>
              ) : (
                <div className="flex justify-center items-center space-x-3">
                  <X className="w-4 h-4" />
                  <span className="text-xs uppercase">Collect</span>
                </div>
              )
            }
          </Button>
          <Button
            size="icon"
            variant='secondary'
            onClick={() => {
              copyMarker(`${key.id}`);
              toast({
                description: "Copied to clipboard",
              });
            }}
          >
            <Link className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
};
