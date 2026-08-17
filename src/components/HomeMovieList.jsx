import React, { useRef, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import Title from './Title'

// Импорт стилей Swiper
import 'swiper/css'
import { Link } from 'react-router-dom'

const HomeMovieList = (props) => {
  const { name, movieList, genresList = [] } = props
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  // Создаем словарь { id: name } для быстрого поиска жанра
  const genresMap = useMemo(() => {
    return genresList.reduce((acc, genre) => {
      acc[genre.id] = genre.name
      return acc
    }, {})
  }, [genresList])

  // Функция для получения названий жанров по массиву ID
  const getGenreNames = (item) => {
    // 1. Если данные приходят напрямую от TMDB (массив genre_ids)
    if (item.genre_ids && Array.isArray(item.genre_ids)) {
      const names = item.genre_ids
        .map((id) => genresMap[id])
        .filter(Boolean)
        .slice(0, 2) // Берем максимум первые 2 жанра, чтобы не ломать верстку

      if (names.length > 0) return names.join(' • ')
    }

    // 2. Фолбэк: если жанр передан как строка/массив в самом объекте
    if (Array.isArray(item.genre)) return item.genre.join(' • ')
    if (typeof item.genre === 'string') return item.genre

    return 'Movie'
  }

  return (
    <div className="bg-black text-white p-6 relative">
      {/* Заголовок */}
      <Title name={name} />

      {/* Слайдер Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={6}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Привязываем кастомные кнопки навигации к Swiper
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 3, spaceBetween: 16 },
          768: { slidesPerView: 4, spaceBetween: 16 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
          1280: { slidesPerView: 6, spaceBetween: 20 },
        }}
        className="w-full my-4"
      >
        {movieList.map((item, index) => {
          // Определяем картинку и заголовок (для универсальности TMDB)
          const poster = item.poster_path 
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}` 
            : item.image

          const title = item.title || item.name

          return (
            <SwiperSlide key={item.id || index}>
              <div className="flex flex-col gap-2 cursor-pointer group">
                {/* Обложка фильма */}
                <Link to={`/movie/${item.id}`}>
                <div className="overflow-hidden rounded-2xl aspect-[3/4] bg-neutral-800">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={poster}
                    alt={title}
                  />
                </div>

                {/* Название */}
                <h3 className="font-medium text-base text-gray-100 truncate mt-1">
                  
                    {item.name}
                  
                </h3>

                {/* Жанры (динимически подставляем из API) */}
                <p className="text-xs text-purple-400 font-medium truncate">
                  {getGenreNames(item)}
                </p>
                </Link>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      {/* Кнопки навигации */}
      <div className="flex justify-end gap-3 mt-4 pr-2">
        <button
          ref={prevRef}
          className="w-12 h-12 rounded-full border border-purple-900/60 bg-purple-950/30 hover:bg-purple-900/50 text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <LuChevronLeft className="w-6 h-6" />
        </button>
        <button
          ref={nextRef}
          className="w-12 h-12 rounded-full border border-purple-900/60 bg-purple-950/30 hover:bg-purple-900/50 text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <LuChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default HomeMovieList