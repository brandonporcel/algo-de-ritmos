export default function filtrarPares(array: unknown[]): unknown[] {
  let map = {};
  array.forEach((elem) => {
    const el = elem as any;
    map[el] = map[el] ? map[el] + 1 : 1;
  });

  return Object.keys(map)
    .filter((el) => {
      return map[el] % 2 === 0;
    })
    .map((el) => parseInt(el));
}
