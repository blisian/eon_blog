/* Footer.js */
import React from 'react';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Footer(){
  return (
    <footer>
      
      <div style={{ height: '2000px' }}></div> {/* 2000px의 빈 여백 */}
      <p>푸터 입니다.</p>
      
      <ScrollToTopButton/>
    </footer>
  );
};

