import ImageShowcase from "@/components/menu/image-showcase";
import { objective, task } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";
import Image from "next/image";

const rubik = Rubik({ subsets: ["latin"] });

export const taskPopup = (task: task, objective: objective) => (
  <div className={cn(rubik.className, "p-6 relative marker-text")}>
    <h2 className="text-lg font-bold text-primary">{task.name}</h2>
    <div className="flex flex-row gap-2">
      <p className="text-xs text-muted-foreground">{task.vendor.name}</p>
      <p className="text-xs text-muted-foreground">▪</p>
      <p className="text-xs text-muted-foreground">{objective.faction?.shorthand || "All Factions"}</p>
      <p className="text-xs text-muted-foreground">▪</p>
      <p className="text-xs text-muted-foreground">{objective.type}</p>
    </div>
    <p className="pt-4 text-sm text-primary text-pretty font-semibold">{objective.name}</p>
    <p className="text-xs text-primary/85 text-pretty">{objective.description}</p>
    {objective.image && (
      <ImageShowcase
        url={objective.image}
        trigger={
          <Image className='mt-4' quality={100} draggable={false} src={objective.image} width={260} height={100} alt={`${task.name} - ${objective.name}`}></Image>
        }
      />
    )}
    {task.note && (
      <div className="flex flex-row gap-2 pt-2">
        <p className="text-xs text-gray-500">Notes</p>
      </div>
    )}
    {task.note && (
      <p className="pt-2 text-blue-500/85">{task.note}</p>
    )}
    <div className="absolute -bottom-[15px] w-0 h-0
      left-1/2 transform -translate-x-1/2
      border-l-[25px] border-l-transparent
      border-t-[15px] border-t-background
      border-r-[25px] border-r-transparent">
    </div>
  </div>
);