import React from 'react';
import './style.css';

export const Projekt = () => {
  return (
    <div className="projekt">
      <div className="projekt__hlavicka">
        <h1>Trefa na kôš</h1>
        <p className="projekt__hlavicka--text">
          projekt Zuzky Nemesovej a Ivi Plašienkovej
        </p>
      </div>
      <div className="projekt__opis">
        <h2>O čom je náš projekt</h2>
        <p>
          Natrafili sme na skvelo vypracovanú príručku "Alchýmia triedenia
          komunálneho odpadu" k recyklácii odpadov na Slovensku, ktorú vytvorili
          dve študentky v spolupráci s Inštitútom cirkulárnej ekonomiky a
          organizáciou zodpovednosti výrobcov NATUR-PACK. Príručka je dostupná
          iba v .pdf formáte a preto nás napadlo vytvoriť interaktívnejšiu,
          online verziu. Asi to poznáte, že aj ako svedomití recyklátori, často
          dlho rozmýšľame, kam náš “odpad” správne vytriediť a nakoniec si ani
          nie sme istí, či sme nenarobili viac škody než úžitku. Preto by sme
          chceli, aby stránky fungovali ako <strong>vyhľadávač</strong>, ktorý
          po zadaní názvu toho, čo chceme vyhodiť, nás na základe kľúčových slov
          nasmeruje k správnej odpadovej nádobe. Užívatelia by si tak nemuseli
          čítať dlhé manuály a mohli by mať stránky/vyhľadávač viac po ruke.
          Uľahčením prístupu k cieľovým informáciám by sme chceli tiež podporiť
          ľudí v recyklovaní. Na stránkach sa bude dať dočítať aj viac
          podrobnejších a motivujúcich faktov. Boli by sme rady, keby sa z
          tohoto projektu neskôr vyvinula praktická aplikácia.
        </p>
        <h2>Ako na tom pracujeme</h2>
        <p>
          Chvíľu sme si dopisovali a zdieľali nápady. Mali sme jedno veľké
          stretnutie pri kávičke a skvelých avokádových chlebíčkoch, pri ktorom
          sme poskladali svoje predstavy o tom, ako by sme asi chceli aby
          stránky vyzerali a čo všetko by mali obsahovať. Na diaľku sme
          brainstormovali o názve. Nedávno sme sa spojili s našim mentorom
          Paľom, ktorý je tiež zo Slovenska, a máme za sebou prvé výživné
          stretko. Takže máme už konkrétnejšie úlohy a na ne dva týždne, aby sme
          si predpripravili čo sa len dá do víkendového hackatonu, kde to celé
          zbúchame :D.
        </p>
        <h2>Aké sú naše plány s projektom</h2>
        <p>
          Rady by sme časom projekt rozšírili na aplikáciu, ktorú by bolo možno
          použiť aj v iných krajinách, s obsahom ktorý by sme mohli aktualizovať
          a vedel by tak reagovať na zmeny v legislatíve. Projekt by sme mohli
          prepojiť s už existujícimi platformami, ktoré napríklad mapujú
          umiestnenie košov a podobne, alebo pridať vlastné mapy. V divokejšej
          verzii si predstavujeme, že by bolo zaujímavé aplikáciu trochu
          gamifikovať. Vytvoriť platformu, kde by sa ľudia bavili tým, že by
          zaznamenávali čo aj reálne vyhodia do košov a získavali by zato body.
          Mohli by diskutovať a zdieľať svoje zistenia. Nebola by to len pomôcka
          pre tých, ktorí sa o recykláciu zaujímajú, ale v nejakej atraktívne
          vizuálnej podobe, by aplikácia mohla motivovať k recyklácií aj ľudí,
          ktorých dovtedy nezaujímala.
        </p>
      </div>
    </div>
  );
};
