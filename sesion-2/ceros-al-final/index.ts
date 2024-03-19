export default function moverCeros(array: unknown[]): unknown[] {
  const sinCeros: unknown[] = [];
  const newArr = array.filter((el) => {
    if (el === 0) {
      sinCeros.push(el);
    }

    return el !== 0;
  });

  return newArr.concat(sinCeros);
}
