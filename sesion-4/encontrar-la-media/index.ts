import type { Developer } from "./types";

export default function encontrarLaMedia(developers: Developer[]): number {
  const acc = developers.reduce((acc, el) => el.age + acc, 0);
  return Math.round(acc / developers.length);
}
