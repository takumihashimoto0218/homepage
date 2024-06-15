import React, { CSSProperties } from 'react';

const footerStyle: CSSProperties = {
  backgroundColor: 'white',
  color: 'black',
  padding: '10px',
  textAlign: 'center',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      &copy; 2024 takumi hashimoto
    </footer>
  );
};

export default Footer;
