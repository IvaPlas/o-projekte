import React from 'react';
import { createRoot } from 'react-dom/client';
import { Project } from './Project';
import { Menu } from './Menu';
import { Main } from './Main';
import './style.css';

const App = () => {
  return <Main />;
};

createRoot(document.querySelector('#app')).render(<App />);
