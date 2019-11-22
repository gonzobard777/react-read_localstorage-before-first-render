import React from "react";
import './Footer.less'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">Copiright, год</div>
      <div className="footer__lang">Язык</div>
    </footer>
  );
};
