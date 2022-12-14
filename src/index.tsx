import React from 'react';
import ReactDOM from 'react-dom/client';
import CharactersList from './Characters/pages/CharactersList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CharacterInfo from './Characters/pages/CharacterInfo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/character/:id" element={<CharacterInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
