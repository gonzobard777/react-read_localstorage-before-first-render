import './Header.less';
import React from "react";
import {AnchorButton, Switch} from "@blueprintjs/core";

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const {isDarkTheme, onToggleTheme} = props;
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">Лого</div>
        <div className="header__middle">
          <Switch
            label="Dark theme"
            innerLabel="off"
            innerLabelChecked="on"
            checked={isDarkTheme}
            onChange={onToggleTheme.bind(null, !isDarkTheme)}
          />
        </div>
        <div className="header__user">
          <AnchorButton
            minimal={true}
            rightIcon="log-in"
          >Log in</AnchorButton>
        </div>
      </div>
    </header>
  );
};

interface IHeaderProps {
  onToggleTheme: (isDarkTheme: boolean) => void;
  isDarkTheme: boolean;
}
