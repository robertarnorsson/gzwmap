import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toSlug(input: string) {
  const slugString = input
    .toLocaleLowerCase()
    .replaceAll(",", "")
    .replaceAll("- ", "")
    .replaceAll("-", "")
    .replaceAll("/", "")
    .replaceAll("/ ", "")
    .replaceAll(" ", "-")

  return slugString;
}