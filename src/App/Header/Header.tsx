import './Header.less';
import React, {ReactElement} from "react";
import {AnchorButton} from "@blueprintjs/core";

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => (
  <header className="header">
    <div className="app__adaptive-container">
      <div className="header__logo">Лого</div>
      <div className="header__middle">
        {props.toggleThemeElem}
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

interface IHeaderProps {
  toggleThemeElem: ReactElement;
}
