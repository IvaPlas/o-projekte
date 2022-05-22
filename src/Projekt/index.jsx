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
        <h2>O čom že ten náš projekt je?</h2>
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
          nasmeruje k riešeniu. Užívatelia by si tak nemuseli čítať dlhé manuály
          a mohli by mať stránky/vyhľadávač viac po ruke. Uľahčením prístupu k
          cieľovým informáciám by sme chceli tiež ľudí podporiť v recyklovaní.
          Na stránkach sa bude dať dočítať aj viac podrobnejších a motivujúcich
          faktov. Tiež by sme boli radi, keby sa z tohoto projektu neskôr
          vyvinula praktická aplikácia.
        </p>
        <h2>Ako na tom pracujeme</h2>
        <p>
          Chvíľu sme si dopisovali a zdieľali nápady. Mali sme jedno veľké
          stretnutie pri kávičke a skvelých avokádových chlebíčkoch, pri ktorom
          sme poskladali ako by sme boli rady, aby stránky vyzereli, čo všetko
          by mali obsahovať. Na diaľku sme brainstormovali o názve. Nedávno nám
          priradili už mentora Paľa, ktorý je tiež zo Slovenska a už sme mali
          prvé výživné stretko.Takže máme už konkrétnejšie úlohy a na ne 2
          týždne, aby sme si predpripravili, čo sa len bude dať do hackatonu -
          kde to celé zbuchneme :D.
        </p>
        <h2>Aké sú naše plány s projektom</h2>
        <p>
          Boli by sme radi, keby sa dá urobiť aj aplikácia, ktorú by bolo možno
          použiť aj v iných krajinách, že by sa iba obmieňal aktuálny obsah.
          Bolo by fajn prepojenie už s inými existujícimi platformami, ktoré
          napríklad mapujú umiestnenie košov a podobne alebo pridať vlastné
          mapy. Určite by bolo potrebná neustála aktualizácia, ktorá reaguje na
          zmeny v legislatíve. V divokejšej verzii si predstavujeme, že by bolo
          fajn appku trocha gamifikovať. Vytvoriť platformu, kde by sa ľudia
          bavili s tým, že by zaznamenávali, čo aj reálne vyhodia do košov a
          získavali by zato body. Mohli by diskutovať a zdielať zistenia.
          Vlastne by to nebola len pomôcka pre tých, ktorý sa o recykláciu
          zaujímajú, ale v nejakej atraktívnej vizuálnej podobe, by to mohlo
          prilákať k recyklovaniu aj ľudí, ktorích to dovtedy nezaujímalo.
        </p>
      </div>
    </div>
  );
};
