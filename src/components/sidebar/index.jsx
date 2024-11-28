import logo from '/logo.svg';
import { AnimatedLink } from '../header/components/AnimatedLink';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';

const navItems = [
  { text: 'Home', to: '/' },
  { text: 'Ramos', to: '/ramos' },
  { text: 'Galeria', to: '/galeria' },
  { text: 'Noticias', to: '/noticias' },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen(prev => !prev);
    document.querySelector('.sidebar').classList.toggle('translate-x-full');
  }, []);
  
  return (
    <aside
      className="lg:hidden 
                 md:hidden
                 max-w-[320px] mx-auto"
    >
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
        className={`sidebar fixed top-0 bottom-0 right-0 px-4 py-6 w-screen text-center bg-light-social-brand 
                    z-40 transition-transform duration-500 flex flex-col shadow-default
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="text-lg flex-grow">
          <div className="flex justify-start items-center gap-x-2">
            <img
              className="w-20 h-20"
              src={logo}
              alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
            />
            <div className="text-left max-w-44">
              <h2 className="font-semibold">
                Grupo <span className="text-social-brand">Escoteiro</span> Terra da Saudade
              </h2>
            </div>
          </div>
          <nav className="flex flex-col items-start pt-4 px-2 gap-y-6">
            <ul className="flex flex-col items-start gap-y-6 pt-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <AnimatedLink
                    text={item.text}
                    to={item.to}
                  />
                </li>
              ))}
            </ul>
            <div className="w-full">
              <Link
                className={`
                  flex justify-center items-center bg-social-brand text-social-white
                  font-semibold px-10 py-1 rounded-md shadow-lg
                  hover:text-social-black hover:bg-transparent hover:border-social-brand
                  border transition-colors cursor-pointer
                  `}
                type="button"
                to={'/autenticacao/cadastrar'}
              >
                Cadastre-se
              </Link>
            </div>
          </nav>
        </div>
        <div className="text-sm text-gray-600 pb-4 border-t border-social-gray">
          © 2024 Todos os direitos reservados.
        </div>
      </div>
    </aside>
  );
}