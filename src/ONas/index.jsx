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
          Sme dievčatá zo Slovenska, obe momentálne žijúce v Prahe. Praha nám
          otvorila dvere k pesterejšiemu kultúrnemu životu ale aj pracovným
          príležitostiam. U každej z nás bola cesta do Prahy trochu iná a hoci
          sa na rodnú hruď radi vraciame a ťahá nás tam najmä príroda, sme tu
          spokojné. Pracovných možností je síce veľa, ale nie každá pracovná
          pozícia je pre nás vyhovujúca.
          <br />
          Zuzka je skôr samostatná osobnosť žijúca si svoje vlastné sny, so
          širokým prehľadom a možnosťami uplatnenia sa. Vyskúšala už všelijakú
          prácu, od ..... až po ...... Jej zápal pre sebavzdelávanie na jej
          CV-čku vidieť už z diaľky. Množstvo absolvovaných kurzov svedčí o tom,
          že stále hľadá v čom by jej kreativita mohla vynikúť. Iva to má s
          rozbehom kariéry trochu zložitejšie. Má tri deti a je s nimi doma už
          dlho. Na materskú sa dostala hňeď po skončení vysokej školy, ktorá
          možnosti uplatnenia sa na pracovnom trhu prakticky nemá,a čo si
          budeme..vlastne aj tú školu skončila už s prvým mláďaťom na rukách.
          Počas materskej v sebe objavila tvorivého ducha a nesmiernu chuť niečo
          pekné a praktické produkovať.
          <br />
          Ako to tak býva, Iva sa na sklonku materskej "dovolenky" dostala k
          otázke, ako tento svoj motor využiť na dnešnom trhu práce. Oči jej
          pritom zastali na opakovane vyskakujúcej reklame na kurzy Czechitas,
          ktoré na vstupe do IT podporujú práve ženy, ktoré rozmýšľajú podobne
          ako my obe. Zuzka........(ako si sa dostala ku kruzu czechitas, nieco
          ako mam ja ze po materske..ablablab, jednu vetu).............. Práca s
          počítačom už dnes nie je nič výnimočné a výhody ponúkajúce pracovné
          pozície v IT sú až vysnené. Preto sme sa obe rozhodli pre kurz
          Digitálna akadémia web, ktorý organizuje Czechitas, na ktorom sme sa
          stretli.
          <br />
          Spojilo nás spoločné nadšenie pre tvorenie rukami, pre jogu a starosť
          o životné prostredie. Po pár rozhovoroch sme sa rozhodli spoločne
          pustiť do záverečného projektu. A tak pomaly vzniká "Trefa na kôš".
        </p>
      </div>
    </div>
  );
};
