// Твой JWT Read Access Token от TMDB
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzU5ZjNjMjg0Mzc3ZTQ2MGNiOTJiM2Y3NTNlZTg3YyIsIm5iZiI6MTc4NjUwOTMyMS44NzIsInN1YiI6IjZhN2JmODA5OGE2MGZmMDJhYmZiZjEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1UjHOI0Nx0GyK7rvv6f4JVfrk8xTgsYZu3P8SXN25Mc';

const BASE_URL = 'https://api.themoviedb.org/3';

// Кастомная функция fetch с предустановленными заголовками
const fetchFromTMDB = async (endpoint, params = {}) => {
  // Преобразуем объект с параметрами (например language, page) в URL-строку
  const queryParams = new URLSearchParams({
    language: 'en-US', // Язык по умолчанию (можно поменять на 'ru-RU')
    ...params,
  }).toString();

  const url = `${BASE_URL}${endpoint}?${queryParams}`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_TOKEN}`, // Автоматическая подстановка токена
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

// Экспортируем готовые функции для конкретных эндпоинтов
export const getNowPlayingMovies = (page = 1) => {
  return fetchFromTMDB('/movie/now_playing', { page });
};

export const getPopularMovies = (page = 1) => {
  return fetchFromTMDB('/movie/popular', { page });
};

// Получение списка всех жанров фильмов от TMDB
export const getGenres = () => {
  return fetchFromTMDB('/genre/movie/list');
};

export const getMovieDetailByID = (id, page = 1) => {
  return fetchFromTMDB('/movie/' + id, { page });
};