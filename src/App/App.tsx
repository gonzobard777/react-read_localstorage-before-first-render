import React, {useState} from 'react';
import './App.less';
import {Header} from "./Header/Header";
import classNames from "classnames";
import {Classes} from "@blueprintjs/core";

export const App: React.FC = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const handleToggleTheme = (isDarkTheme: boolean) => {
    const nextTheme = isDarkTheme ? DARK_THEME : LIGHT_THEME;
    setTheme(nextTheme);
    setStorageTheme(nextTheme);
  };

  return (
    <div className={classNames('app', theme)}>
      <Header
        onToggleTheme={handleToggleTheme}
        isDarkTheme={theme === DARK_THEME}
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


const DARK_THEME = Classes.DARK;
const LIGHT_THEME = "";
const THEME_LOCAL_STORAGE_KEY = "theme";
const getStorageTheme = (): string => localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || LIGHT_THEME;
const setStorageTheme = (themeName: string) => localStorage.setItem(THEME_LOCAL_STORAGE_KEY, themeName);

