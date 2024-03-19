export default function encontrarImpar(numeros: number[]): number {
  const map2: Record<string, number> = {};

  for (let num of numeros) {
    map2[num] = (map2[num] || 0) + 1;
  }

  let impar = 0;
  for (let num of Object.keys(map2)) {
    if (map2[num] % 2 !== 0) {
      impar = Number(num);
      break;
    }
  }

  return impar;
}
