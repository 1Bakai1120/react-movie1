import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Моковые данные для баннера
const movies = [
  {
    id: 1,
    year: '2022',
    title: 'The Batman',
    duration: '2 hr 56 min',
    genres: ['Action', 'Drama'],
    description:
      'Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.',
    bgImage:
      'https://a-static.besthdwallpaper.com/batman-in-frount-of-good-sunrise-wallpaper-2880x1080-102678_89.jpg', // Замените на нужный кадр
  },
  {
    id: 2,
    year: '2023',
    title: 'Oppenheimer',
    duration: '3 hr 00 min',
    genres: ['Biography', 'Drama', 'History'],
    description:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    bgImage:
      'https://www.meewella.com/critic/images/film/20230725-oppenheimer.jpeg',
  },
  {
    id: 3,
    year: '2021',
    title: 'Dune',
    duration: '2 hr 35 min',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    description:
      "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    bgImage:
      'https://bloodknife.com/wp-content/uploads/2021/10/dune-bk.jpeg',
  },
];

const HomeBanner = () => {
  return (
    <div className="relative w-full h-[85vh] min-h-[550px] bg-black text-white">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${movie.bgImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </div>
            <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex flex-col justify-end pb-24">
              <div className="max-w-xl space-y-4">
                <span className="text-gray-400 text-sm font-medium">
                  {movie.year}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                  {movie.title}
                </h1>
                <div className="flex items-center space-x-2 text-sm text-gray-300 font-medium">
                  <span>{movie.duration}</span>
                  <span>•</span>
                  <span>{movie.genres.join(' • ')}</span>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
                  {movie.description}
                </p>
                <div className="flex items-center space-x-3 pt-3">
                  <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-200">
                    <FaPlay className="w-3 h-3" />
                    <span>Play Now</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg font-medium backdrop-blur-md transition-colors duration-200">
                    <FaPlay className="w-3 h-3" />
                    <span>Watch Trailer</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-lg font-medium backdrop-blur-md transition-colors duration-200">
                    <FiBookmark className="w-4 h-4" />
                    <span>Add to Wishlist</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-swiper-pagination absolute bottom-6 left-0 right-0 z-20 flex gap-3 justify-center items-center space-x-3" />
      </Swiper>
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d8b4fe; /* Светло-фиолетовый */
          opacity: 0.7;
          margin: 0 !important;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #8b5cf6; /* Ярко-фиолетовый акцент */
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default HomeBanner;