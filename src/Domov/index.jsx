import React from 'react';
import { Menu } from '../Menu';
import './style.css';

export const Domov = () => {
  return (
    <div className="domov">
      <div className="Menu__navigace">
        <div className="Menu__navigace--domov">
          <button className="btn__nav btn--domov"></button>
          <p>Domov</p>
        </div>
        <div className="Menu__navigace--o__projekte">
          <button className="btn__nav btn--o__projekte"></button>
          <p>O projekte</p>
        </div>
        <div className="Menu__navigace--o__nas">
          <button className="btn__nav btn--o_nas"></button>
          <p>O nás</p>
        </div>
      </div>
      <header className="domov__hlavicka">
        Vitajte na našich mikrostránkach
      </header>
      <p>
        Chceli by sme Vám v skratke predstaviť náš projekt, ktorý chystáme v
        rámci akadémie Czechitas. Môžete sa dozvedieť aj o nás, inšpiráciách a
        čo za tým všetkým je.
      </p>
    </div>
  );
};
