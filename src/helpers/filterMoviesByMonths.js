export const MONTHS_RU = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

export function filterMoviesByMonths(moviesList = [], targetMonths = []) {
  const result = {};

  targetMonths.forEach(month => {
    result[month] = [];
  });

  moviesList.forEach(movie => {
    if (!movie.release_date) return;

    const [, monthNum] = movie.release_date.split('-').map(Number);
    const monthName = MONTHS_RU[monthNum - 1];

    if (targetMonths.includes(monthName)) {
      result[monthName].push({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        rating: movie.vote_average,
        poster_path: movie.poster_path
      });
    }
  });

  return result;
}