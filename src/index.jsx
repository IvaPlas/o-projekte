import React from 'react';
import { createRoot } from 'react-dom/client';
import { ONas } from './ONas';
import { Menu } from './Menu';
import { Domov } from './Domov';
import { Projekt } from './Projekt';
import './style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <div className="Menu__navigace">
        <Link to="/Menu__navigace--domov">
          <div className="Menu__navigace--domov">
            {' '}
            |<button className="btn__nav btn--domov"></button>
            <p>Domov</p>
          </div>
        </Link>

        <Link to="/Menu__navigace--o__projekte">
          <div className="Menu__navigace--o__projekte">
            <button className="btn__nav btn--o__projekte"></button>
            <p>O projekte</p>
          </div>
        </Link>

        <Link to="/Menu__navigace--o__nas">
          <div className="Menu__navigace--o__nas">
            <button className="btn__nav btn--o_nas"></button>
            <p>O nás</p>
          </div>
        </Link>

        {/*<a href="">Domov <i class=""></i></a>
<a href="">O projekte</a>
<a href="">O nás</a>*/}
      </div>
      <Outlet />
    </>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/Menu__navigace" element={<Menu />}>
        <Route path="/Menu__navigace--domov" element={<Domov />} />
        <Route path="/Menu__navigace--o__nas" element={<ONas />} />
        <Route path="/Menu__navigace--o__projekte" element={<Projekt />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
