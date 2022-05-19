import React from 'react';
import { createRoot } from 'react-dom/client';
import { Project } from './Project';
import { Menu } from './Menu';
import './style.css';

const App = () => {
  return (
    <div className="main">
      <div className="main__obsah">
        <h1>Vitajte na našich mikrostránkach</h1>
        <p>
          Chceli by sme Vám v skratke predstaviť náš projekt, ktorý chystáme v
          rámci akadémie Czechitas. Môžete sa dozvedieť aj o nás, inšpiráciách a
          čo za tým všetkým je.
        </p>
      </div>
      <Menu />

      {/* <div className="main__navigace">
        <button className="btn__nav btn--domov"></button>
        <p>Domov</p>
        <button className="btn__nav btn--projekt"></button>
        <p>O projekte</p>
        <button className="btn__nav btn--my"></button>
        <p>O nás</p>
        <a href="">Domov <i class=""></i></a>
        <a href="">O projekte</a>
  <a href="">O nás</a>
      </div>*/}
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
