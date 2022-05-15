import React from 'react';
import './style.css';

export const Menu = () => {
  return (
    <div className="main__navigace">
      <button className="btn__nav btn--domov"></button>
      <p>Domov</p>
      <button className="btn__nav btn--projekt"></button>
      <p>O projekte</p>
      <button className="btn__nav btn--my"></button>
      <p>O nás</p>
      {/*<a href="">Domov <i class=""></i></a>
  <a href="">O projekte</a>
<a href="">O nás</a>*/}
    </div>
  );
};
