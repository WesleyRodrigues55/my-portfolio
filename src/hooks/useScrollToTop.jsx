import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const scrollToTopHandler = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', scrollToTopHandler);

    return () => {
      window.removeEventListener('scroll', scrollToTopHandler);
    };
  }, [showScroll]); // adiciona showScroll para atualizar corretamente

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FiChevronUp
      className="scrollToTop"
      onClick={backToTop}
      style={{
        height: 45,
        width: 45,
        borderRadius: 50,
        right: 50,
        bottom: 50,
        position: 'fixed',  // importante para posicionar no canto da tela
        cursor: 'pointer',
        display: showScroll ? 'flex' : 'none',
        padding: 5,
        backgroundColor: '#eee', // ou qualquer cor para destacar
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 5px rgba(0,0,0,0.3)',
        zIndex: 1000,
      }}
    />
  );
};

export default ScrollToTop;
