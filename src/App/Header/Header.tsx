import './Header.less';
import React from "react";
import {AnchorButton, Switch} from "@blueprintjs/core";

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const {useDarkTheme, onToggleDark} = props;

  const handleDarkSwitchChange = () => onToggleDark(!useDarkTheme);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">Лого</div>
        <div className="header__middle">
          <Switch
            checked={useDarkTheme}
            label="Use dark theme"
            innerLabel="off"
            innerLabelChecked="on"
            onChange={handleDarkSwitchChange}
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
  onToggleDark: (useDark: boolean) => void;
  useDarkTheme: boolean;
}
