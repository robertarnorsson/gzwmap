import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { task } from "./types";
import { UserData } from "~/context/LocalStorageContext";
import { API_URL } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getHostname() {
  if (typeof document === 'undefined') return;

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

export function sizeToScale(size: "small" | "normal" | "large") {
  switch (size) {
    case "small":
      return 0.8
    case "normal":
      return 1
    case "large":
      return 1.2
  }
}

export function isCanceledTaskCompleted(task: task, tasks: task[], user: UserData): boolean {
  if (!task.cancelTaskId) return false;
  
  const canceledTask = tasks.find(t => t.id === task.cancelTaskId);
  if (!canceledTask) return false;

  // Filter relevant objectives based on faction
  const relevantObjectives = canceledTask.objectives.filter(obj => {
    return !obj.faction || obj.faction.id === user.faction;
  });

  // Check if all relevant objectives are completed
  return relevantObjectives.every(obj => user.completedObjectives.includes(obj.id));
}

export function detectDevice() {
  const ua = navigator.userAgent.toLowerCase();

  if (/windows phone|android|iphone|ipad|ipod/i.test(ua)) return 'Mobile';
  if (/win/i.test(ua)) return 'Windows';
  if (/mac/i.test(ua)) return 'MacOS';

  return 'Unknown';
}

export const fetchData = async <T,>(endpoint: string): Promise<T[]> => {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (!response.ok) {
    throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
  }
  return await response.json() as T[];
};