import React from 'react';
import './style.css';
import { Menu } from '../Menu';

export const Projekt = () => {
  return (
    <div className="Projekt">
      <header className="Projekt__hlavicka">
        <h1>Trefa na kôš</h1>
        <p>projekt Zuzky Nemesovej a Ivi Plašienkovej</p>
      </header>
      <Menu />
      <div className="Project__opis"></div>
    </div>
  );
};
