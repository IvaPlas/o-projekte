import React from 'react';
import { createRoot } from 'react-dom/client';
import { Project } from './Project';

const App = () => <Project />;

createRoot(document.querySelector('#app')).render(<App />);
