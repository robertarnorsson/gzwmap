import { Difficulties } from "@/lib/data/difficulty";
import { difficulty } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Difficulty({ difficulty, className }: { difficulty: difficulty, className?: string }) {
  const level= difficulty.level;
  const difficultyAmount = Difficulties.length;

  return (
    <div className={cn(
      className,
      "flex flex-row gap-0.5"
    )}>
      {Difficulties.map((difficulty) => {
        return (
          <div key={difficulty.level} className={cn(
            "w-[5px] h-[5px] rounded-full",
            difficulty.level <= level
              ? "bg-primary"
              : "bg-primary/60"
          )}>

          </div>
        )
      })}
    </div>
  );
}
