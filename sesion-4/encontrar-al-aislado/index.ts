export default function buscarAislado(numeros: number[]): number {
  const primeros = numeros.slice(0, 3);

  let mayoriaEsPar = false;
  if (numeros.length === 3) {
    const primero = primeros[0] % 2 === 0;
    const segundo = primeros[1] % 2 === 0;
    mayoriaEsPar = primero && segundo;
    if (!mayoriaEsPar) {
      const tercero = primeros[2] % 2 === 0;
      mayoriaEsPar = tercero;
    }
  } else {
    mayoriaEsPar = primeros.every((el) => el % 2 === 0);
    if (!mayoriaEsPar) {
      const ultimos = numeros.slice(3);
      mayoriaEsPar = ultimos.every((el) => el % 2 === 0);
    }
  }

  const aislado = numeros.find((el) => (mayoriaEsPar ? el % 2 !== 0 : el % 2 === 0));

  return aislado!;
}
