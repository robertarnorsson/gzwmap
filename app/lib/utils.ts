import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copy(text: string) {
  if (typeof document === 'undefined') return;
  if (typeof navigator === 'undefined') return;

  navigator.clipboard.writeText(text);
}