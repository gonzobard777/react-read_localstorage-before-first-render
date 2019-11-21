import React, {useState} from 'react';
import './App.less';
import {Header} from "./Header/Header";
import classNames from "classnames";
import {getStorageTheme, ToggleTheme} from "./ToggleTheme/ToggleTheme";

export const App: React.FC = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = (nextTheme: string) => setTheme(nextTheme);

  return (
    <div className={classNames('app', theme)}>
      <Header
        themeSwitcher={<ToggleTheme theme={theme} toggleFn={toggleTheme}/>}
      />

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


