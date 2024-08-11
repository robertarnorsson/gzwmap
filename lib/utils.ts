import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Keys } from "./data/keys";

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

export function getPosFromId(id: string) {
  const id_prefix = id.split("-").at(0);

  switch(id_prefix) {
    case "K": {
      const key = Keys.filter((key) => key.id === id).at(0);
      return key;
    }
  }

}