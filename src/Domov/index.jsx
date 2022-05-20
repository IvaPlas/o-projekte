import React from 'react';
import { Menu } from '../Menu';
import './style.css';

export const Domov = () => {
  return (
    <div className="domov">
      <Menu />
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
