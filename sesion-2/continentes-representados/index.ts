type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

export default function continentesRepresentados(array: Registry[]): boolean {
  let continentes = new Set();
  array.map((el) => continentes.add(el.continent));

  return [...continentes].length === 5;
}
