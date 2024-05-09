import { task } from "@/lib/types";
import { FirstRecon } from "@/lib/data/tasks/first-recon";
import { CacheRetrival } from "@/lib/data/tasks/cache-retrieval";
import { MedsWanted } from "@/lib/data/tasks/meds-wanted";
import { LeaveNoManBehind } from "@/lib/data/tasks/leave-no-man-behind";
import { LittleBirdDown } from "@/lib/data/tasks/little-bird-down";
import { RestoringOrder } from "@/lib/data/tasks/restoring-order";
import { RatsNest } from "@/lib/data/tasks/rats-nest";
import { LostAndFound } from "@/lib/data/tasks/lost-and-found";
import { MedicalDetective } from "@/lib/data/tasks/medical-detective";
import { HelpingHand } from "@/lib/data/tasks/helping-hand";
import { SecretCompassion } from "@/lib/data/tasks/secret-compassion";

export const Tasks: task[] = [
  FirstRecon,
  CacheRetrival,
  MedsWanted,
  LeaveNoManBehind,
  LittleBirdDown,
  RestoringOrder,
  RatsNest,
  LostAndFound,
  MedicalDetective,
  HelpingHand,
  SecretCompassion
]