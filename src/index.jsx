import React from 'react';
import { createRoot } from 'react-dom/client';
import { ONas } from './ONas';
import { Menu } from './Menu';
import { Domov } from './Domov';
import './style.css';

const App = () => {
  return <Domov />;
};

createRoot(document.querySelector('#app')).render(<App />);
