import type { Developer } from "./types";

export default function pedirDetalles(developers: Developer[]): Developer[] {
  for (let dev of developers) {
    for (let prop of Object.keys(dev)) {
      if (dev[prop] === null) {
        dev["question"] = `Hi, could you please provide your ${prop}.`;
      }
    }
  }
  const developersConNullValues = developers.filter((dev) => {
    return Object.values(dev).some((value) => value === null);
  });

  return developersConNullValues;
}
