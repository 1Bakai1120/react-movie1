import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Upcoming', href: '/upcoming-movies' },
    { name: 'Shows', href: '#' },
    { name: 'Fanart', href: '#' },
    { name: 'Plans', href: '/pricing' },
    { name: 'Community', href: '#' },
    { name: 'Account', href: '/account' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/20 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Логотип со ссылкой на главную страницу */}
        <Link to="/" className="flex items-center space-x-1 cursor-pointer select-none">
          <span className="text-2xl sm:text-3xl font-serif text-purple-600 font-bold leading-none">
            C
          </span>
          <span className="text-lg sm:text-xl font-serif tracking-tight leading-none text-gray-100">
            ine <span className="font-serif">Sphere</span>
          </span>
        </Link>

        {/* Навигация для десктопа (md+) */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm lg:text-base font-normal text-gray-200 hover:text-purple-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Иконка поиска */}
          <button
            type="button"
            aria-label="Search"
            className="text-gray-200 hover:text-white transition-colors duration-200 p-1 focus:outline-none"
          >
            <FiSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Мобильный блок (Поиск + Гамбургер) */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            type="button"
            aria-label="Search"
            className="text-gray-200 hover:text-white p-1"
          >
            <FiSearch className="w-5 h-5" />
          </button>

          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 hover:text-white p-1 focus:outline-none"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Выпадающее мобильное меню */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 pt-2 border-t border-white/10 flex flex-col space-y-3 px-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-200 hover:text-purple-400 text-base font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;