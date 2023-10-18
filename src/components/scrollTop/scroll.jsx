import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifique a posição de rolagem atual
      if (window.pageYOffset > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          style={{
            position: 'fixed',
            padding: '1rem',
            fontSize: '11px',
            bottom: '40px',
            right: '40px',
            backgroundColor: '#291663',
            color: '#fff',
            textAlign: 'center',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: '0.5s',
          }}
        >
          <img src="./arrow-up.svg" alt="Botão para rolar para o topo" />
        </button>
      )}
    </>
  );
}
