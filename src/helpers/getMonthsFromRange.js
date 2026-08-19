import { MONTHS_RU } from './filterMoviesByMonths';

export function getMonthsFromRange(range) {
  if (!range || !range.minimum || !range.maximum) return [];

  const [startYear, startMonth] = range.minimum.split('-').map(Number);
  const [endYear, endMonth] = range.maximum.split('-').map(Number);

  const months = new Set();

  let currentYear = startYear;
  let currentMonth = startMonth;

  while (
    currentYear < endYear ||
    (currentYear === endYear && currentMonth <= endMonth)
  ) {
    months.add(MONTHS_RU[currentMonth - 1]);

    currentMonth++;
    if (currentMonth > 12) {
      currentMonth = 1;
      currentYear++;
    }
  }

  return Array.from(months);
}