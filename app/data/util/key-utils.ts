import { location, key } from "~/lib/types";
import { Keys } from "~/data/keys";

export function getAllKeysForLocation(location: location) {
  const keys: key[] = []
  Keys.forEach((key) => {
    if (key.location === location) keys.push(key);
  });
  return keys;
}