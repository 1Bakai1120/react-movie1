import React, { useEffect, useState } from 'react';


const App = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Параллельно загружаем жанры, фильмы в кино и популярные
        const [genresData, nowPlayingData, popularData] = await Promise.all([
          getGenres(),
          getNowPlayingMovies(),
          getPopularMovies()
        ]);

        // 2. Создаем Map-словарь вида { 28: "Action", 12: "Adventure", ... }
        const genresMap = genresData.genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});

        // Вспомогательная функция для превращения [28, 12] в ["Action", "Adventure"]
        const mapGenreIdsToNames = (genreIds) => {
          if (!genreIds || genreIds.length === 0) return ['Movie'];
          const names = genreIds
            .map((id) => genresMap[id])
            .filter(Boolean)
            .slice(0, 2); // Берем первые 2 жанра
          return names.length > 0 ? names : ['Movie'];
        };

        // 3. Форматируем фильмы "Now Playing" с НАСТОЯЩИМИ жанрами
        const formattedNowPlaying = nowPlayingData.results.map((movie) => ({
          id: movie.id,
          name: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          genre: mapGenreIdsToNames(movie.genre_ids),
        }));

        // 4. Форматируем популярные фильмы с НАСТОЯЩИМИ жанрами
        const formattedPopular = popularData.results.map((movie) => ({
          id: movie.id,
          name: movie.title,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          genre: mapGenreIdsToNames(movie.genre_ids),
        }));

        setNowPlaying(formattedNowPlaying);
        setPopular(formattedPopular);

      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      
    </div>
  );
};

export default App;