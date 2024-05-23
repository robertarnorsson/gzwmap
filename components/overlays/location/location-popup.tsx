import { location } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const locationPopup = (location: location) => (
  <div className={cn(rubik.className, "p-6 relative marker-text")}>
    <h2 className="text-lg font-bold text-primary">{location.name}</h2>
    <div className="flex flex-row gap-2">
      <p className="text-xs text-muted-foreground">{`${location.objectives.length} objectives`}</p>
      <p className="text-xs text-muted-foreground">▪</p>
      <p className="text-xs text-muted-foreground">{`${location.pois.length} pois`}</p>
    </div>
    <div className="absolute -bottom-[15px] w-0 h-0
      left-1/2 transform -translate-x-1/2
      border-l-[25px] border-l-transparent
      border-t-[15px] border-t-background
      border-r-[25px] border-r-transparent">
    </div>
  </div>
);
