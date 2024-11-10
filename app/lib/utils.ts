import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getHostname() {
  if (typeof document === 'undefined') return;
  if (typeof navigator === 'undefined') return;

  const isDevelopment = window.location.hostname === 'localhost';

  if (isDevelopment) {
    return `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
  } else {
    return `${window.location.protocol}//${window.location.hostname}`
  }
}

export function copy(text: string) {
  if (typeof document === 'undefined') return;
  if (typeof navigator === 'undefined') return;

  navigator.clipboard.writeText(text);
}

export function copyMarker(id: string) {
  const [firstId, secondId] = id.split(':');
  const hostname = getHostname();

  if (firstId === null) return;

  if (typeof secondId !== 'undefined') {
    copy(`${hostname}?marker=${firstId}:${secondId}`);
  } else {
    copy(`${hostname}?marker=${firstId}`);
  }
}