import React from 'react';
import { createRoot } from 'react-dom/client';
import { ONas } from './ONas';
import { Domov } from './Domov';
import { Projekt } from './Projekt';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

export const App = () => (
  <>
    <nav className="menu__navigace">
      <Link className="odkaz__domov" to="/">
        <div className="menu__navigace--domov">
          <button className="btn__nav btn--domov"></button>
          Domov {''}
        </div>
      </Link>
      <Link className="odkaz__projekt" to="/oProjekte">
        <div className="menu__navigace--o__projekte">
          <button className="btn__nav btn--o__projekte"></button>O projekte
        </div>
      </Link>
      <Link className="odkaz__oNas" to="/oNas">
        <div className="menu__navigace--o__nas">
          <button className="btn__nav btn--o_nas"></button>O nás
        </div>
      </Link>
    </nav>

    <Outlet />
  </>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Domov />} />
        <Route path="oNas" element={<ONas />} />
        <Route path="oProjekte" element={<Projekt />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
