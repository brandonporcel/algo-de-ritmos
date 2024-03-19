export default function girar(texto: string): string {
  let newPhrase = "";

  texto.split(" ").forEach((letra) => {
    if (letra.length < 5) {
      newPhrase = newPhrase + " " + letra;
    } else {
      console.log(letra);
      newPhrase = newPhrase + " " + letra.split("").reverse().join("");
    }
  });

  return newPhrase.trim();
}
