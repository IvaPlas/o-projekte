import React from 'react';
import './style.css';
import { Menu } from '../Menu';

export const Projekt = () => {
  return (
    <div className="Projekt">
      <Menu />
      <div className="Projekt__hlavicka">
        <h1>Trefa na kôš</h1>
        <p>projekt Zuzky Nemesovej a Ivi Plašienkovej</p>
      </div>
      <div className="Projekt__opis">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam
          vel ratione voluptatibus, accusantium fugit, iusto cupiditate,
          doloribus ex debitis minima deleniti! Illum repellat, consectetur esse
          maiores veritatis quidem accusamus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur, dolores natus eligendi cum
          labore similique! Itaque dolore assumenda tenetur corporis deserunt
          harum temporibus facere hic, molestias officiis fugiat sunt aliquid?
        </p>
      </div>
    </div>
  );
};
