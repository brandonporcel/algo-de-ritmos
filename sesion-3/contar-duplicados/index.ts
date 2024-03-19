export default function contarDuplicados(texto: string): number {
  const map = texto.split("").reduce((acc, el) => {
    acc[el.toLocaleLowerCase()] = (acc[el.toLocaleLowerCase()] || 0) + 1;
    return acc;
  }, {});

  const repetidos: unknown[] = [];

  Object.keys(map).forEach((el) => {
    if (map[el] >= 2) {
      repetidos.push(el);
    }
  });

  return repetidos.length;
}
