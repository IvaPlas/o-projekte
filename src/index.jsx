import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => (
  <div class="kontejner">
    <header>
      <h1>Trefa na kôš</h1>
      <p>projekt Zuzky Nemesovej a Ivi Plašienkovej</p>
    </header>
    <div class="navigace">
      <button type="menu">O nás</button>
      <button type="menu">Trefa na kôš</button>
    </div>
    <div class="uvod">
      <h1>My dve</h1>
      <img id="my_dve" src="assets/img/zuzka_a_iva.jpg" alt="Zuzka a Iva" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
        eaque? Aliquid est nesciunt atque. Ducimus eum voluptatem necessitatibus
        consequatur! Autem, unde. Rerum consequuntur dignissimos omnis rem at id
        nemo amet?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Numquam corporis iste dolor animi, reprehenderit ipsam corrupti magni
        quaerat fuga sunt amet voluptatem! Ipsam aut rerum aspernatur doloremque
        minus atque dolore?
      </p>
    </div>
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
