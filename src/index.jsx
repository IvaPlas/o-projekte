import React from 'react';
import { createRoot } from 'react-dom/client';
import { ONas } from './ONas';
import { Menu } from './Menu';
import { Domov } from './Domov';
import { Projekt } from './Projekt';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

export const App = () => (
  <nav>
    <Link to="/domov">Domov</Link>
    <Link to="/oProjekte">O projekte</Link>
    <Link to="/oNas">O nás</Link>

    <Outlet />
  </nav>
);
{
  /*
  return (
    <>
      <Domov />
    </>
  );
  {
    /*<Domov />
    <ONas />
    <Projekt />
  </>*/
}

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="domov" element={<Domov />} />
        <Route path="oNas" element={<ONas />} />
        <Route path="oProjekte" element={<Projekt />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
