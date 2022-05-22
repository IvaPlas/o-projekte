import React from 'react';
import './style.css';

export const ONas = () => {
  return (
    <div className="oNas">
      <div className="oNas__hlavicka">
        <h1>O nás</h1>
      </div>

      <div className="oNas__text">
        <p>
          Sme dievčatá zo Slovenska, obe momentálne žijúce v Prahe. Tá nám
          otvorila dvere k pesterejšiemu kultúrnemu životu, ale aj pracovným
          príležitostiam. U každej z nás bola cesta do Prahy trochu iná a hoci
          sa na rodnú hruď radi vraciame a ťahá nás tam najmä príroda, sme tu
          spokojné. Pracovných možností je síce veľa, ale nie každá pracovná
          pozícia je pre nás vyhovujúca.
        </p>
        <p>
          Zuzka je skôr samostatná osobnosť žijúca si svoje vlastné sny, so
          širokým prehľadom a možnosťami uplatnenia sa. Vyskúšala už všelijakú
          prácu, od kreatívnej činnosti na vlastných nohách až po finančné
          pozície v korporátoch aj neziskovom sektore. Jej zápal pre
          sebavzdelávanie na jej CV-čku vidieť už z diaľky. Množstvo
          absolvovaných kurzov svedčí o tom, že stále hľadá v čom by jej
          kreativita mohla vynikúť. <br />
          Iva to má s rozbehom kariéry trochu zložitejšie. Má tri deti a je s
          nimi doma už celkom dlho. Vyštudovala paleontológiu, obor síce
          zaujímavý, avšak na dnešnom pracovnom trhu prakticky
          neuplatniteľný...a vlastne už tú školu skončila s prvým mláďaťom na
          rukách. Počas materskej však v sebe objavila tvorivého ducha a
          nesmiernu chuť niečo pekné a praktické produkovať. Ako to tak býva, na
          sklonku materskej "dovolenky" sa dostala k otázke, čo ďalej a ako
          tento svoj motor využiť na dnešnom trhu práce. Oči jej pritom zastali
          na opakovane vyskakujúcej reklame na kurzy Czechitas, ktoré na vstupe
          do IT podporujú práve ženy, ktoré rozmýšľajú podobne ako my dve. Zuzka
          v práci v korporátoch nevidela žiadnu perspektívu a začala sa obzerať
          po možnosti sa lepšie kvalifikovať. Tiež natrafila na kurzy Czechitas
          a niečo, čo pred 10 rokmi bolo ešte nemysliteľné - študovať IT bez
          matematiky ;), zrazu vyzeralo ako skvelá príležitosť. Práca s
          počítačom už dnes nie je nič výnimočné a výhody ponúkajúce pracovné
          pozície v IT sú až vysnené. Preto sme sa obe rozhodli pre kurz
          Digitálna akadémia web, ktorý organizuje Czechitas, na ktorom sme sa
          stretli.
        </p>
        <p>
          Spojilo nás spoločné nadšenie pre tvorenie rukami, pre jogu a starosť
          o životné prostredie. Po pár rozhovoroch sme sa rozhodli spoločne
          pustiť do záverečného projektu. A tak pomaly vzniká "Trefa na kôš".
        </p>
        <hr />
      </div>

      <footer className="oNas__kontakt">
        <h3>Ak by vás zaujímali ďalšie naše výtvory, tu ich nájdete:</h3>
        <div className="oNas__kontakt--odkazy">
          <div>
            <p>
              <strong>Zuzka:</strong>
            </p>
            <a href="https://github.com/Zuzike">https://github.com/Zuzike </a>
          </div>
          <div>
            <p>
              <strong>Ivka:</strong>
            </p>
            <a href="https://github.com/IvaPlas">https://github.com/IvaPlas </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
