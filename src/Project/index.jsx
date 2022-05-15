import React from 'react';
import img from './img/photo1.jpg';

export const Project = () => {
  return (
    <div className="kontejner">
      <header>
        <h1>Trefa na kôš</h1>
        <p>projekt Zuzky Nemesovej a Ivi Plašienkovej</p>
      </header>
      {/*<div className="navigace">
        <button type="menu">O nás</button>
        <button type="menu">O projekte</button>
  </div>*/}
      <div className="uvod">
        <h1>My dve</h1>
        <img id="my_dve" src={img} alt="Zuzka a Iva" />
        <p>
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
