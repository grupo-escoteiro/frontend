import logo from '../../../public/logo.svg';
import { AnimatedLink } from '../header/components/AnimatedLink';
import { useState, useCallback } from 'react';

const navItems = [
  { text: 'Home', to: '/' },
  { text: 'Ramos', to: '/ramos' },
  { text: 'Galeria', to: '/galeria' },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen(prev => !prev);
    document.querySelector('.sidebar').classList.toggle('translate-x-full');
  }, []);
  
  return (
    <aside className="lg:hidden md:hidden">
      <button
        className="z-50 relative cursor-pointer transition-all ease-in-out duration-200
                   text-4xl bg-transparent border-none p-0"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <div className="relative w-8 h-8">
          <i
            className={`fa-solid fa-xmark absolute inset-0 transition-all duration-500
                        ease-in-out transform ${isOpen ? 'opacity-100 rotate-0' : 
                        'opacity-0 -rotate-90'}`}
          ></i>
          <i
            className={`fa-solid fa-bars absolute inset-0 transition-all duration-500 
                        ease-in-out transform ${isOpen ? 'opacity-0 rotate-90' : 
                        'opacity-100 rotate-0'}`}
          ></i>
        </div>
      </button>
      <div
        className={`sidebar fixed top-0 bottom-0 right-0 p-2 w-2/3 text-center bg-light-social-brand 
                    z-40 transition-transform duration-500 flex flex-col
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="text-lg flex-grow">
          <div className="p-2 mt-1 flex justify-center items-center">
            <img
              className="w-20 h-20"
              src={logo}
              alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
            />
          </div>
          <nav className="flex justify-center items-center">
            <ul className="flex flex-col gap-4 pt-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  <AnimatedLink
                    text={item.text}
                    to={item.to}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="text-sm text-gray-600 pb-4 border-t border-social-gray">
          © 2024 Todos os direitos reservados.
        </div>
      </div>
    </aside>
  );
}