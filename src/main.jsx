import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import MovieDetail from './pages/MovieDetail.jsx';
import Header from './components/Header.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);