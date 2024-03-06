import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Body />
      {/* <Floatcircle />  */}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;