import React from 'react';
import './style.css';

export const Domov = () => {
  return (
    <div className="domov">
      <header className="domov__hlavicka">
        <h1>Vitajte na našich mikrostránkach</h1>
      </header>
      <p className="domov__text">
        Chceli by sme Vám v skratke predstaviť náš projekt, ktorý chystáme v
        rámci akadémie Czechitas. Môžete sa dozvedieť aj o nás, inšpiráciách a
        čo za tým všetkým je.
      </p>
    </div>
  );
};
