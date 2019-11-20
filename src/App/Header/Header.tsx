import './Header.less';
import React from "react";
import {AnchorButton} from "@blueprintjs/core";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">Лого</div>
        <div className="header__middle">пусто</div>
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
