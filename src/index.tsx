import React from 'react';
import ReactDOM from 'react-dom/client';
import CharactersList from './CharactersList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>Game of Thrones Characters</h1>

    <CharactersList />
  </React.StrictMode>
);
