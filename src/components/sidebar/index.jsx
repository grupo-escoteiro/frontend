import { SocialIcon } from 'react-social-icons';
import logo from '../../../public/logo.svg';
import { AnimatedLink } from '../header/components/AnimatedLink';

function Sidebar() {
  function Openbar() {
    document.querySelector('.sidebar').classList.toggle('translate-x-full');
  };
  
  return (
    <div>
      <div
        className="sidebar fixed top-0 bottom-0 right-0 p-2 w-44 overflow-y-auto
                     text-center bg-light-social-brand transition-transform duration-500 translate-x-full">
        <div className="text-lg">
          <div className="p-2 mt-1 flex justify-center items-center">
            <img
              className="w-20 h-20"
              src={logo}
              alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
            />
          </div>
          <nav className="flex justify-center">
            <ul className="flex flex-col gap-4 pt-8">
              <li>
                <AnimatedLink
                  text={'Home'}
                  to="/"
                />
              </li>
              <li>
                <AnimatedLink
                  to="/ramos"
                  text={'Ramos'}
                />
              </li>
              <li>
                <AnimatedLink
                  to="/galeria"
                  text={'Galeria'}
                />
              </li>
              <li>
                <AnimatedLink
                  to="/autenticacao/login"
                  text={'Login'}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="fixed right-2 bottom-8">
        <span 
          className="cursor-pointer hover:brightness-90 transition duration-200"
          onClick={Openbar}>
          <SocialIcon />
        </span>
      </div>
    </div>
  );
}
  
  
  

export { Sidebar };