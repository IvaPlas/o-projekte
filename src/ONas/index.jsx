import React from 'react';
import './style.css';
import { Menu } from '../Menu';

export const ONas = () => {
  return (
    <div className="ONas">
      <header className="ONas__hlavicka">
        <h1>O nás</h1>
      </header>
      <Menu />
      <div className="ONas__uvod">
        <img id="my__dve" src="assets\img\zuzka_a_iva.jpg" alt="Zuzka a Iva" />
        <p className="ONas__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          eaque? Aliquid est nesciunt atque. Ducimus eum voluptatem
          necessitatibus consequatur! Autem, unde. Rerum consequuntur
          dignissimos omnis rem at id nemo amet?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Numquam corporis iste dolor animi,
          reprehenderit ipsam corrupti magni quaerat fuga sunt amet voluptatem!
          Ipsam aut rerum aspernatur doloremque minus atque dolore?
        </p>
      </div>
    </div>
  );
};
