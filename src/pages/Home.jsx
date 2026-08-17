import React, { useEffect, useState } from 'react';
import HomeBanner from "../components/HomeBanner";
import HomeMovieList from "../components/HomeMovieList";
import { getNowPlayingMovies, getPopularMovies, getGenres } from '../api/tmdbApi';

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [genresData, nowPlayingData, popularData] = await Promise.all([
          getGenres(),
          getNowPlayingMovies(),
          getPopularMovies()
        ]);

        // Создаем словарь жанров
        const genresMap = genresData.genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});

        const mapGenreIdsToNames = (genreIds) => {
          if (!genreIds || genreIds.length === 0) return ['Movie'];
          const names = genreIds
            .map((id) => genresMap[id])
            .filter(Boolean)
            .slice(0, 2);
          return names.length > 0 ? names : ['Movie'];
        };

        setNowPlaying(
          nowPlayingData.results.map((movie) => ({
            id: movie.id,
            name: movie.title,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            genre: mapGenreIdsToNames(movie.genre_ids),
          }))
        );

        setPopular(
          popularData.results.map((movie) => ({
            id: movie.id,
            name: movie.title,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            genre: mapGenreIdsToNames(movie.genre_ids),
          }))
        );
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <HomeBanner />
      <HomeMovieList name="Now Playing" movieList={nowPlaying} />
      <HomeMovieList name="Popular Movies" movieList={popular} />
    </div>
  );
};

export default Home;