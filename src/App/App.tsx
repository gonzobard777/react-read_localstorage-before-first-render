import React from 'react';
import './App.less';
import {Header} from "./Header/Header";

export const App: React.FC = () => {
  return (
    <div className="app  ">
      <Header/>

      {/*<main>*/}
      {/*  Данные*/}
      {/*</main>*/}

      {/*<footer>*/}
      {/*  <div>Copiright, год</div>*/}
      {/*  <div>пусто</div>*/}
      {/*  <div className="footer__lang">Язык</div>*/}
      {/*</footer>*/}
    </div>
  );
};
