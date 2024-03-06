import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중 여부를 나타내는 상태 변수 추가

  // Scroll 이벤트 감지하여 버튼의 표시 여부 결정
  const handleScroll = () => {
    if (!isScrolling && window.scrollY >= 200) { // 스크롤 중이 아니고 스크롤이 200px 이상인 경우에만 버튼 표시
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 페이지가 로드될 때 한 번만 실행
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 페이지 최상단으로 스크롤
  const scrollToTop = () => {
    setIsScrolling(true); // 스크롤 중임을 나타내는 상태 변수 설정
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // 부드러운 스크롤 완료 후 스크롤 중 상태를 해제
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // 부드러운 스크롤이 완료될 시간(1초) 설정
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: '2px solid black', // 테두리 추가
        zIndex: '1',
      }}
      className={`scrollToTopButton ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      {/* 버튼 내부에 윗화살표 모양 */}
      <span
        style={{
          fontSize: '28px', // 아이콘 크기 조정
        }}
      >
        &uarr;
      </span>
    </div>
  );
};

export default ScrollToTopButton;
