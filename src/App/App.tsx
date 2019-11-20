import React, {useState} from 'react';
import './App.less';
import {Header} from "./Header/Header";
import classNames from "classnames";
import {Classes} from "@blueprintjs/core";

export const App: React.FC = () => {
  const [themeName, setThemeName] = useState(getTheme());

  const handleToggleDark = (useDark: boolean) => {
    const nextThemeName = useDark ? DARK_THEME : LIGHT_THEME;
    setTheme(nextThemeName);
    setThemeName(nextThemeName);
  };

  return (
    <div className={classNames('app', themeName)}>
      <Header
        onToggleDark={handleToggleDark}
        useDarkTheme={themeName === DARK_THEME}
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
const THEME_LOCAL_STORAGE_KEY = "theme-name";

const getTheme = (): string => localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || LIGHT_THEME;
const setTheme = (themeName: string) => localStorage.setItem(THEME_LOCAL_STORAGE_KEY, themeName);

