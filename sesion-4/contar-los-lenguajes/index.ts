import type { Developer } from "./types";

export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
  const a = developers.reduce((acc, dev) => {
    acc[dev.language] = (acc[dev.language] || 0) + 1;
    return acc;
  }, {});
  return a;
}
