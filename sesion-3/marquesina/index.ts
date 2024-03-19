export default function marquesina(texto: string): string[] {
  const finalArr = [rotarUnaVez(texto)];

  for (let i = 0; i < texto.length - 1; i++) {
    finalArr.push(rotarUnaVez(finalArr[i]));
  }
  return finalArr;
}

function rotarUnaVez(cadena: string) {
  return cadena.slice(1) + cadena[0];
}
