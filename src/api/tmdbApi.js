const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzU5ZjNjMjg0Mzc3ZTQ2MGNiOTJiM2Y3NTNlZTg3YyIsIm5iZiI6MTc4NjUwOTMyMS44NzIsInN1YiI6IjZhN2JmODA5OGE2MGZmMDJhYmZiZjEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1UjHOI0Nx0GyK7rvv6f4JVfrk8xTgsYZu3P8SXN25Mc';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchFromTMDB = async (endpoint, params = {}) => {
  const queryParams = new URLSearchParams({
    language: 'en-US',
    ...params,
  }).toString();

  const url = `${BASE_URL}${endpoint}?${queryParams}`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('TMDB API Error:', error);
    throw error;
  }
};

export const getNowPlayingMovies = (page = 1) => fetchFromTMDB('/movie/now_playing', { page });
export const getPopularMovies = (page = 1) => fetchFromTMDB('/movie/popular', { page });
export const getGenres = () => fetchFromTMDB('/genre/movie/list');
export const getMovieDetailByID = (id) => fetchFromTMDB(`/movie/${id}`);
export const getUpcomingMovies = (page = 1) => fetchFromTMDB('/movie/upcoming', { page });