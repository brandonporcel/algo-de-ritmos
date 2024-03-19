export default function urinalesLibres(urinales: string): number {
  const split = urinales.split("");

  let contador = 0;
  let newWord = structuredClone(split);

  const error = split.find(
    (el, i, arr) => (el === "1" && arr[i - 1] === "1") || (el === "1" && arr[i + 1] === "1"),
  );
  if (error) {
    return -1;
  }

  for (let i = 0; i < split.length; i++) {
    if (i === 0 && split[i + 1] === "0" && split[0] === "0") {
      newWord[i] = "1";
      contador += 1;
    } else if (
      i === split.length - 1 &&
      newWord[i - 1] === "0" &&
      newWord[split.length - 1] === "0"
    ) {
      newWord[i] = "1";
      contador += 1;
    } else {
      if (newWord[i - 1] === "0" && newWord[i + 1] === "0" && newWord[i] === "0") {
        newWord[i] = "1";
        contador += 1;
      }
    }
  }
  console.log("contador", contador);
  return contador;
}
