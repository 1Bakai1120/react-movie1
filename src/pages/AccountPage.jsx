import React, { useState } from 'react';
import { 
  FaFacebookF, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaRegEnvelope, 
  FaLock, 
  FaRegUser 
} from 'react-icons/fa';
import bgMovies from '../assets/images/bg-movie.jpg';

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);

  // Состояния полей
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', { email, password, rememberMe });
    } else {
      console.log('Signup:', { userName, email, password, confirmPassword, agreeTerms });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      {/* 1. Яркий фоновый рисунок на весь экран */} 
      <div 
        className="fixed inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: `url('${bgMovies}')`,
        }}
      />
      
      {/* 2. Легкое затемнение для читаемости интерфейса */}
      <div className="fixed inset-0 z-0 pointer-events-none" />

      {/* 3. Основной контент */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between p-6 lg:flex-row lg:px-20 lg:py-12">
        
        {/* Левый блок */}
        <div className=" items-center space-x-1 cursor-pointer select-none ">
          <span className="text-2xl sm:text-6xl font-serif text-purple-600 font-bold leading-none">
            C
          </span>
          <span className="text-lg sm:text-5xl font-serif tracking-tight leading-none text-gray-100">
            ine <span className="font-serif">Sphere</span>
          </span>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The world's Largest Movie Library
          </h1>
        </div>

        {/* Правый блок: Прозрачная Glassmorphism карточка */}
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-black/10 p-8 backdrop-blur-md shadow-2xl transition-all duration-300">
          
          {/* Переключатель Login | Signup */}
          <div className="mb-2 flex items-center justify-center text-2xl font-bold">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`transition-colors ${
                isLogin ? 'text-white' : 'text-purple-500 hover:text-purple-200 font-light'
              }`}
            >
              Login
            </button>
            <span className="mx-3 font-light text-purple-300/50">|</span>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`transition-colors ${
                !isLogin ? 'text-white' : 'text-purple-500 hover:text-purple-200 font-light'
              }`}
            >
              Signup
            </button>
          </div>

          <p className="mb-6 text-center text-xs text-gray-200">
            {isLogin 
              ? 'Log in to watch your favourite shows' 
              : 'Register Now to watch your favourite shows'}
          </p>

          {/* Социальные кнопки (для Login) */}
          {isLogin && (
            <>
              <div className="mb-6 flex gap-4">
                <button 
                  type="button" 
                  className="flex flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/10 py-2.5 transition-all hover:bg-white/20 active:scale-95"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"/>
                    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
                    <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12s.7 2.3 1.9 4.7l3.7-2.9z"/>
                    <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"/>
                  </svg>
                </button>

                <button 
                  type="button" 
                  className="flex flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/10 py-2.5 transition-all hover:bg-white/20 active:scale-95"
                >
                  <FaFacebookF className="h-4 w-4 text-white" />
                </button>
              </div>

              <div className="relative mb-6 flex items-center justify-center">
                <div className="w-full border-t border-white/20" />
                <span className="absolute rounded-full bg-black/50 px-3 py-0.5 text-xs text-gray-200 backdrop-blur-md">
                  Or
                </span>
              </div>
            </>
          )}

          {!isLogin && (
            <div className="mb-4 text-center text-xs font-medium text-gray-200">
              Or
            </div>
          )}

          {/* Форма */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* User Name */}
            {!isLogin && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="User Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-purple-400/40 bg-black/40 px-4 py-3 pr-10 text-sm text-white placeholder-gray-300 outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                <FaRegUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-purple-400/40 bg-black/40 px-4 py-3 pr-10 text-sm text-white placeholder-gray-300 outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
              <FaRegEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-purple-400/40 bg-black/40 px-4 py-3 pr-10 text-sm text-white placeholder-gray-300 outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
              <FaLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-purple-400/40 bg-black/40 px-4 py-3 pr-10 text-sm text-white placeholder-gray-300 outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                <FaLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
              </div>
            )}

            {/* Чекбокс-кружок */}
            <div className="flex items-center space-x-2 pt-1">
              {isLogin ? (
                <label className="flex cursor-pointer items-center space-x-2 text-xs text-gray-200">
                  <div 
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`flex h-4 w-4 items-center justify-center rounded-full border transition-all ${
                      rememberMe ? 'border-purple-500 bg-purple-600' : 'border-gray-400 bg-black/50'
                    }`}
                  >
                    {rememberMe && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </div>
                  <span>Remember Me</span>
                </label>
              ) : (
                <label className="flex cursor-pointer items-center space-x-2 text-[11px] text-gray-200">
                  <div 
                    onClick={() => setAgreeTerms(!agreeTerms)}
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                      agreeTerms ? 'border-purple-500 bg-purple-600' : 'border-gray-400 bg-black/50'
                    }`}
                  >
                    {agreeTerms && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </div>
                  <span>
                    I agree to the <a href="#" className="font-semibold text-white underline">privacy policy</a> & <a href="#" className="font-semibold text-white underline">Terms and conditions</a>
                  </span>
                </label>
              )}
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-purple-600 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/40 transition-all hover:bg-purple-500 active:scale-[0.98]"
            >
              {isLogin ? 'LOGIN' : 'Sign Up'}
            </button>
          </form>

          {/* Иконки соцсетей снизу */}
          <div className="mt-8 flex justify-center space-x-4">
            <a 
              href="#" 
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
            >
              <FaTwitter className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}