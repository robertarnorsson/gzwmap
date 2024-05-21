import { location, objective, task } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";
import Image from "next/image";

const rubik = Rubik({ subsets: ["latin"] });

export const popupContent = (location: location) => (
  <div className={cn(rubik.className, "p-6 relative")}>
    <h2 className="text-lg font-bold text-primary">{location.name}</h2>
    <p className="text-sm text-muted-foreground">{location.objectives.length}</p>
    <div className="absolute -bottom-[12px] w-0 h-0
      left-1/2 transform -translate-x-1/2
      border-l-[20px] border-l-transparent
      border-t-[12px] border-t-background
      border-r-[20px] border-r-transparent">
    </div>
  </div>
);
