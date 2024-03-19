export default function stringTerminaCon(
  string: string,
  final: string
): boolean {
  const finalLenght = final.length - 1;
  const lastOfString = string.slice(finalLenght);

  return final === lastOfString;
}
