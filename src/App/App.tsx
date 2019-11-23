import React, {useState} from 'react';
import './App.less';
import {Header} from "./Header/Header";
import classNames from "classnames";
import {getStorageTheme, ToggleTheme} from "./ToggleTheme/ToggleTheme";
import {Footer} from "./Footer/Footer";
import {Main} from "./Main/Main";

export const App: React.FC = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  return (
    <div className={classNames('app', theme)}>
      <Header
        toggleThemeElem={<ToggleTheme theme={theme} toggleFn={(nextTheme: string) => setTheme(nextTheme)}/>}
      />

      <Main/>

      <Footer/>
    </div>
  );
};


