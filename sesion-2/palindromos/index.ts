export default function posiblePalindromo(num: number): boolean {
  if (num.toString().length === 1) return true;

  const a: Record<string, number> = num
    .toString()
    .split("")
    .reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});

  const impares = Object.values(a).reduce((acc, el) => {
    if (el % 2 !== 0) return acc + 1;

    return acc;
  }, 0);

  if (impares === 0) return true;
  return impares % 2 !== 0;
}
