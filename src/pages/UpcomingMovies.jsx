import { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api/tmdbApi';
import { getMonthsFromRange } from '../helpers/getMonthsFromRange';
import { filterMoviesByMonths } from '../helpers/filterMoviesByMonths';

const MovieHero = () => {
  const posters = [
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80',
    'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80',
    'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80',
    'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80',
    'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&q=80',
    'https://images.unsplash.com/photo-1518676599625-583f707f1d46?w=400&q=80',
    'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&q=80',
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80',
    'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&q=80',
  ];

  return (
    <section className="relative w-full min-h-[600px] bg-black text-white overflow-hidden font-sans">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 p-2 opacity-50 pointer-events-none">
        {posters.map((src, index) => (
          <div key={index} className="w-full h-48 md:h-64 rounded-md overflow-hidden bg-gray-900">
            <img
              src={src}
              alt={`Movie poster ${index + 1}`}
              className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition duration-300"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 min-h-[600px] flex flex-col justify-between">
        <div className="max-w-2xl mt-12 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Get Ready for Action: Upcoming Blockbusters You Can't Miss!
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
            Prepare for an adrenaline-packed season with our upcoming blockbusters!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-12 border-t border-white/10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide">Upcoming Movies</h2>
        </div>
      </div>
    </section>
  );
};

const UpcomingMovies = () => {
  const [groupedMovies, setGroupedMovies] = useState({});
  const [months, setMonths] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUpcomingMovies(1)
      .then((data) => {
        const calculatedMonths = getMonthsFromRange(data.dates);
        const filtered = filterMoviesByMonths(data.results, calculatedMonths);

        setMonths(calculatedMonths);
        setGroupedMovies(filtered);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1 className="text-white text-center mt-10">Loading ...</h1>;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <MovieHero />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {months.map((month) => (
          <section key={month} className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">{month}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {groupedMovies[month]?.map((movie) => (
                <div key={movie.id || movie.title} className="p-4 bg-gray-800 rounded-lg">
                  <h3 className="font-semibold text-lg">{movie.title}</h3>
                  <p className="text-sm text-gray-400">Release: {movie.release_date}</p>
                  <p className="text-sm text-yellow-400">Rating: {movie.rating}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;