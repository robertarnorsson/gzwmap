import { task } from "@/lib/types";
import { FirstRecon } from "@/lib/data/tasks/first-recon";
import { CacheRetrival } from "@/lib/data/tasks/cache-retrieval";
import { MedsWanted } from "@/lib/data/tasks/meds-wanted";
import { LeaveNoManBehind } from "@/lib/data/tasks/leave-no-man-behind";
import { LittleBirdDown } from "@/lib/data/tasks/little-bird-down";
import { RestoringOrder } from "@/lib/data/tasks/restoring-order";
import { RatsNest } from "@/lib/data/tasks/rats-nest";
import { LostAndFound } from "./tasks/lost-and-found";

export const Tasks: task[] = [
  FirstRecon,
  CacheRetrival,
  MedsWanted,
  LeaveNoManBehind,
  LittleBirdDown,
  RestoringOrder,
  RatsNest,
  LostAndFound
]