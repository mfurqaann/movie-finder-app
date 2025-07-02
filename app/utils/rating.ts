export function getPercentage(vote: number) {
  return Math.min(100, (vote / 10) * 100);
}

export function getColor(vote: number) {
  if (vote >= 7) return "#22c55e"; 
  if (vote >= 5) return "#facc15";
  return "#ef4444";
}
