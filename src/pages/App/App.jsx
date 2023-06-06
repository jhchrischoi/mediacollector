import AuthPage from '../AuthPage/AuthPage';
import NewMoviePage from '../NewMoviePage/NewMoviePage';
import MoviesIndexPage from '../MoviesIndexPage/MoviesIndexPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';

import NewMediaPage from '../NewMediaPage/NewMediaPage';
import MediaIndexPage from '../MediaIndexPage/MediaIndexPage';
import MediaDetailPage from '../MediaDetailPage/MediaDetailPage';

import HomePage from '../HomePage/HomePage';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ? 
      <>
      <NavBar setUser={ setUser } user={user}></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/new" element={<NewMoviePage />} />
        <Route path="/movies" element={<MoviesIndexPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailPage />} />

        <Route path="/media/new" element={<NewMediaPage />} />
        <Route path="/media" element={<MediaIndexPage />} />
        <Route path="/media/:mediaId" element={<MediaDetailPage />} />
      </Routes>
      </>
      :
      <AuthPage setUser={setUser}></AuthPage>}
    </main>
  );
}
