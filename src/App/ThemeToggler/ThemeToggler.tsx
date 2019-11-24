import {Classes, Switch} from "@blueprintjs/core";
import React from "react";
import './ThemeToggler.less';

export const ThemeToggler: React.FC<IToggleThemeProps> = (props: IToggleThemeProps) => {
  const {theme, toggleFn} = props;
  updateStorageTheme(theme);
  return (
    <div className="theme-toggler">
      <Switch
        checked={isDarkTheme(theme)}
        innerLabel="dark"
        innerLabelChecked="light"
        onChange={toggleFn.bind(null, getNextTheme(theme))}
      />
    </div>
  );
};

interface IToggleThemeProps {
  theme: string;
  toggleFn: (nextTheme: string) => void;
}

const DARK_THEME = Classes.DARK;
const LIGHT_THEME = '';
const isDarkTheme = (theme: string) => theme === DARK_THEME;
const getNextTheme = (theme: string) => isDarkTheme(theme) ? LIGHT_THEME : DARK_THEME;

const THEME_LOCAL_STORAGE_KEY = 'theme';
export const getStorageTheme = (): string => localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || LIGHT_THEME;
const updateStorageTheme = (theme: string) => localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
