import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailByID } from '../api/tmdbApi';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Используем id из URL
    getMovieDetailByID(id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-white p-6">Загрузка...</div>;
  }

  if (!movie) {
    return <div className="text-white p-6">Фильм не найден.</div>;
  }

  // Формируем ссылки для изображений TMDB
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const releaseYear = new Date(movie.release_date).getFullYear();
  const genresText = movie.genres.map((g) => g.name).join(' • ');

  return (
    <div className="relative  min-h-screen bg-[#0d0c11] text-white">
      {/* Backdrop / Баннер */}
      <div
        className="relative h-[680px] bg-contain bg-center flex items-end p-8"
        style={{ backgroundImage: `linear-gradient(to top, #0d0c11 10%, transparent 100%), url(${backdropUrl})` }}
      >
        <div className="max-w-4xl space-y-3">
          <span className="text-gray-300 text-sm font-semibold">{releaseYear}</span>
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-gray-400 text-sm">{genresText}</p>

          {/* Кнопки действий */}
          <div className="flex items-center gap-4 pt-2">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2.5 rounded-lg transition">
              Watch Now
            </button>
            <button className="bg-gray-800/80 hover:bg-gray-700 border border-gray-600 text-white px-4 py-2.5 rounded-lg text-sm transition">
              + Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="max-w-5xl mx-auto px-8 py-6 space-y-8">
        {/* Synopsis / Описание */}
        <section className="space-y-2">
          <h2 className="text-2xl font-bold">Synopsis</h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            {movie.overview}
          </p>
        </section>

        {/* Дополнительная информация */}
        <section className="flex gap-8 text-sm text-gray-400 border-t border-gray-800 pt-4">
          <div>
            <span className="block font-semibold text-white">Runtime</span>
            {movie.runtime} min
          </div>
          <div>
            <span className="block font-semibold text-white">Rating</span>
            ★ {movie.vote_average.toFixed(1)} / 10
          </div>
          <div>
            <span className="block font-semibold text-white">Tagline</span>
            {movie.tagline || 'N/A'}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieDetail;
