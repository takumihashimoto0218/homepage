import React, { CSSProperties } from 'react';
import Link from 'next/link';

const Header = () => {
  const headerStyle: CSSProperties = {
    background: 'black',
    color: 'white',
    padding: '20px',
    fontSize: '40px',
    textAlign: 'center',
    letterSpacing: '2px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={headerStyle}>
      <Link href="/">株式会社Nextech</Link>
    </div>
  );
};

export default Header;
