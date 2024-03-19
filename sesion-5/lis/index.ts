export default function encontrarLIS(numeros: number[]): number {
  const n = numeros.length;
  if (n === 0) return 0;

  const dp: number[] = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (numeros[i] > numeros[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}
