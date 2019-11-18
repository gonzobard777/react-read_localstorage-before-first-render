import React from 'react';
import './App.less';
import {AnchorButton} from "@blueprintjs/core";

export const App: React.FC = () => {
  return (
    <div className="app  ">
      <header>
        <div>Лого</div>
        <div>пусто</div>
        <div className="header__user">
          <AnchorButton
            minimal={true}
            rightIcon="log-in"
          >Log in</AnchorButton>
        </div>
      </header>

      <main>
        Данные
      </main>

      <footer>
        <div>Copiright, год</div>
        <div>пусто</div>
        <div className="footer__lang">Язык</div>
      </footer>
    </div>
  );
};
