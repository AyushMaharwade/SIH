import React from 'react';
import FooterLogo from './FooterLogo';
import FooterText from './FooterText';
import FooterButtons from './FooterButtons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <FooterLogo />
      </div>
      <div className="footer-text">
        <FooterText />
      </div>
      <div className="footer-buttons">
        <FooterButtons />
      </div>
    </footer>
  );
}

export default Footer;
