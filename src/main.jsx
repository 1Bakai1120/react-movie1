import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import MovieDetail from './pages/MovieDetail.jsx';
import Header from './components/Header.jsx';
import './index.css';
import UpcomingMovies from './pages/UpcomingMovies.jsx';
import AccountPage from './pages/AccountPage.jsx';
import PricingPlans from './pages/PricingPlans.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/upcoming-movies" element={<UpcomingMovies />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/pricing" element={<PricingPlans />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);