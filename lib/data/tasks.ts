import { task } from "@/lib/types";
import { FirstRecon } from "@/lib/data/tasks/first-recon";
import { CacheRetrival } from "@/lib/data/tasks/cache-retrieval";
import { MedsWanted } from "@/lib/data/tasks/meds-wanted";
import { LeaveNoManBehind } from "@/lib/data/tasks/leave-no-man-behind";

export const Tasks: task[] = [
  FirstRecon,
  CacheRetrival,
  MedsWanted,
  LeaveNoManBehind
]