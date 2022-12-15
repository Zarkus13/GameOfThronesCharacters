import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Template from './components/Template';
import './utils/i18n';
import Home from './Home';
import CharactersList from './Characters/pages/CharactersList';
import CharacterInfo from './Characters/pages/CharacterInfo';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/*" element={<CharactersList />} />
          <Route path="/character/:id" element={<CharacterInfo />} />
        </Routes>
      </Template>
    </BrowserRouter>
  </Provider>
);
