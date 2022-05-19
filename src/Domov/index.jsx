import React from 'react';
import { Menu } from '../Menu';
import './style.css';

export const Domov = () => {
  return (
    <div className="domov">
      <header className="domov__hlavicka">
        Vitajte na našich mikrostránkach
      </header>
      <p>
        Chceli by sme Vám v skratke predstaviť náš projekt, ktorý chystáme v
        rámci akadémie Czechitas. Môžete sa dozvedieť aj o nás, inšpiráciách a
        čo za tým všetkým je.
      </p>
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
