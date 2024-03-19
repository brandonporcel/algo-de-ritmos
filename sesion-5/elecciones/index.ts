interface Registro {
  id: string;
  voto: string;
  nombre: string;
}

export default function unificarVotos(mesas: Registro[][], parametro: keyof Registro): Registro[] {
  // const arr = new Set();
  const items2 = mesas.flat();

  const newArray: Registro[] = [];
  for (let i = 0; i < items2.length; i++) {
    const el = items2[i];
    const isDuplicate = items2.slice(0, i).some((prevEl) => prevEl.id === el.id);
    if (!isDuplicate) {
      newArray.push(el); // Si no es un duplicado, agrega el elemento al nuevo array
    }
  }

  return newArray;
}
