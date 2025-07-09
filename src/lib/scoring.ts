export function calculateScore(values: number[]): number {
  const sum = values.reduce((acc, v) => acc + v, 0);
  const max = values.length * 10;
  return Math.round((sum / max) * 100);
}
