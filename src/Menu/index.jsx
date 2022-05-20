import React from 'react';
import './style.css';

export const Menu = () => {
  return (
    <>
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
    </>
  );
};
