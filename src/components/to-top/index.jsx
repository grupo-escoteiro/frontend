import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

function ToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const buttonOffset = (900 / 1000) * viewportHeight;

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  function handleResize() {
    setViewportHeight(window.innerHeight);
  }

  useEffect(() => {
    // Adiciona o evento de scroll e resize
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Atualiza a altura da viewport ao montar
    setViewportHeight(window.innerHeight);

    // Remove os eventos ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`
        fixed bottom-6 right-6 rounded-full bg-social-brand hover:brightness-90
        cursor-pointer text-social-white p-3 transition duration-200
        ${scrollPosition >= buttonOffset ? 'inline-block' : 'hidden'}
      `}
      onClick={handleClick}
    >
      <ArrowUp />
    </div>
  );
}

export { ToTop };
