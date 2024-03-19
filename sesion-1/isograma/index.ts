export default function esIsograma(string: string): boolean {
  const set = new Set();
  string.split("").forEach((el) => set.add(el.toLocaleLowerCase()));

  return [...set].join("").length === string.length;
}
