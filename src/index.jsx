import React from 'react';
import { createRoot } from 'react-dom/client';
import { Project } from './Project';
import './style.css';

const App = () => <Project />;

createRoot(document.querySelector('#app')).render(<App />);
