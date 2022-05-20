import React from 'react';
import { createRoot } from 'react-dom/client';
import { ONas } from './ONas';
import { Menu } from './Menu';
import { Domov } from './Domov';
import { Projekt } from './Projekt';
import './style.css';

const App = () => {
  return <Projekt />;
};

createRoot(document.querySelector('#app')).render(<App />);
