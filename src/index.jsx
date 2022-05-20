import React from 'react';
import { createRoot } from 'react-dom/client';
import { ONas } from './ONas';
import { Domov } from './Domov';
import { Projekt } from './Projekt';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

export const App = () => (
  <nav className="menu__navigace">
    <div className="menu__navigace--domov">
      <button className="btn__nav btn--domov"></button>

      <Link className="odkaz__domov" to="/domov">
        Domov {''}
      </Link>
    </div>
    <div className="menu__navigace--o__projekte">
      <button className="btn__nav btn--o__projekte"></button>

      <Link className="odkaz__projekt" to="/oProjekte">
        O projekte
      </Link>
    </div>
    <div className="menu__navigace--o__nas">
      <button className="btn__nav btn--o_nas"></button>

      <Link className="odkaz__oNas" to="/oNas">
        O nás
      </Link>
    </div>

    <Outlet />
  </nav>
);

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
