import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Tasks } from "./data/tasks";
import { Option } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toSlug(input: string) {
  const slugString = input
    .toLocaleLowerCase()
    .replaceAll(",", "")
    .replaceAll("- ", "")
    .replaceAll("-", "")
    .replaceAll("'", "")
    .replaceAll("/", "")
    .replaceAll("/ ", "")
    .replaceAll(" ", "-")

  return slugString;
}

export function tasksToOption(): Option[] {
  return Tasks.flatMap((task) => ({
      value: task.name,
      label: task.name,
    })
  );
}