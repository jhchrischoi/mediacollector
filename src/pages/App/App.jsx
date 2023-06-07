import AuthPage from '../AuthPage/AuthPage';
import NewCollectionPage from '../NewCollectionPage/NewCollectionPage';
import CollectionsIndexPage from '../CollectionsIndexPage/CollectionsIndexPage';
import CollectionDetailPage from '../CollectionDetailPage/CollectionDetailPage';

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
        <Route path="/collections/new" element={<NewCollectionPage />} />
        <Route path="/collections" element={<CollectionsIndexPage />} />
        <Route path="/collections/:collectionId" element={<CollectionDetailPage />} />

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
