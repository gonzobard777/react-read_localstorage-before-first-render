import React, {useState} from 'react';
import './App.less';
import {Header} from "./Header/Header";
import classNames from "classnames";
import {getStorageTheme, ToggleTheme} from "./ToggleTheme/ToggleTheme";
import {Footer} from "./Footer/Footer";

export const App: React.FC = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  return (
    <div className={classNames('app', theme)}>
      <Header
        toggleThemeElem={<ToggleTheme theme={theme} toggleFn={(nextTheme: string) => setTheme(nextTheme)}/>}
      />

      <main>
        Данные
      </main>

      <Footer/>
    </div>
  );
};


