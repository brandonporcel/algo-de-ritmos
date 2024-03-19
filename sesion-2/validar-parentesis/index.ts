export default function validarParéntesis(parentesis: string): boolean {
  const abiertos: string[] = [];
  const cerrados: string[] = [];
  parentesis.split("").forEach((el) => {
    if (el === "(") {
      abiertos.push(el);
    } else {
      cerrados.push(el);
    }
  });

  return abiertos.length === cerrados.length;
}
