import type { Developer } from "./types";

export default function encontrarAlMasViejo(developers: Developer[]): Developer[] {
  const mayores = [developers[0]];

  developers.forEach((el) => {
    if (el.age >= mayores[0].age) {
      mayores.push(el);
    }
  });
  mayores.shift();
  return mayores;
}
