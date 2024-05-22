"use client"

import { objective, task } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const rubik = Rubik({ subsets: ["latin"] });

export function taskMarker(task: task, objective: objective) {

  return (
    <div className={cn(rubik.className, "task-marker-pin flex flex-row")}>
      <Image
        className="task-marker-image z-50 shadow-2xl m-2 cursor-pointer "
        src='/task.png'
        width={15}
        height={15}
        draggable={false}
        alt={`${task.name}, ${objective.name}`}
      />
      <p className="task-marker-text">
        {`${task.name}  ▪  ${objective.name}`}
      </p>
    </div>
  )
}

/* export const taskMarker = (task: task, objective: objective) => (


  <div className={cn(rubik.className, "task-marker-pin flex flex-row")}>
    <Image
      className="task-marker-image z-50 shadow-2xl m-2 cursor-pointer"
      src='/task.png'
      width={15}
      height={15}
      draggable={false}
      alt={`${task.name}, ${objective.name}`}
    />
    <p className="task-marker-text">
      {`${task.name}  ▪  ${objective.name}`}
    </p>
  </div>
); */