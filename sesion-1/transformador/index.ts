type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: number;
  nombre: string;
  edad: number;
};

export default function transformador(input: Input): Output[] {
  const edades = input.edades;
  const nombres = input.nombres;
  const output: Output[] = [];

  for (let i = 0; i < nombres.length; i++) {
    output.push({
      id: i + 1,
      nombre: nombres[i],
      edad: edades[i],
    });
  }
  return output;
}
