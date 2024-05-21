import { objective, task } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";
import Image from "next/image";

const rubik = Rubik({ subsets: ["latin"] });

export const taskMarker = (task: task, objective: objective) => (
  <div className="task-marker-pin flex felx-row">
    <Image className="shadow-2xl m-2" src='/task.png' width={15} height={15} draggable={false} alt={`${task.name}, ${objective.name}`} ></Image>
    <p className="task-marker-text">{task.name} - {objective.name}</p>
  </div>
);
