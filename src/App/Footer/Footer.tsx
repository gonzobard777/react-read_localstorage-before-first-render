import React from "react";
import './Footer.less'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="app__adaptive-container">
        <div className="footer__copyright">Copiright, год</div>
        <div className="footer__middle">
          middle
        </div>
        <div className="footer__lang">Язык</div>
      </div>
    </footer>
  );
};
