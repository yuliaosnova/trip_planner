export function sortByDate<T extends { startDate: Date }>(arr: T[]): T[] {
  return arr.sort((a, b) => (b.startDate > a.startDate ? 1 : -1));
}
