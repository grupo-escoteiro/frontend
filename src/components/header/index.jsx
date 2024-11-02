import logo from '/logo.svg';
import avatar from '/avatar.png';
import { AnimatedLink } from './components/AnimatedLink';
import { Dropdown } from '../dropdown';
import { getAuth } from 'firebase/auth';
import { Sidebar } from '../sidebar';
import { DropdownItem } from './components/dropdownItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Settings, ShieldAlert, Star } from 'lucide-react';
import { signOutAsync } from '../../services/firebase/auth';
import { toast } from 'sonner';

function Header() {
  const { currentUser } = getAuth();
  const [ isOpen, setIsOpen ] = useState(false);

  const navigate = useNavigate();

  async function logout() {
    try {
      await signOutAsync();
      toast.success('Usuário deslogado com sucesso!');
      navigate('/');
    } catch {
      toast.error('Erro ao deslogar o usuário!');
    }
  }

  return (
    <header
      className="lg:w-full lg:bg-light-social-brand 
                 md:w-full md:bg-light-social-brand
               bg-light-social-brand">
      <div
        className="lg:max-w-[1024px] lg:mx-auto lg:py-7 lg:px-0 lg:flex lg:justify-between lg:items-center
                   md:max-w-[620px] md:mx-auto md:py-7 md:px-0 md:flex md:justify-between md:items-center
                   max-w-[320px] mx-auto"
      >
        <figure
          className="lg:flex lg:gap-2 lg:items-center lg:cursor-pointer lg:p-0 
                     md:flex md:gap-2 md:items-center md:cursor-pointer md:p-0
                     px-4 py-7 flex justify-between items-center cursor-pointer"
          title="Voltar à home"
          aria-label="Voltar à página inicial do Grupo Escoteiro Terra Da Saudade"
        >
          <img
            className="lg:w-24 lg:h-24
                       w-20 h-20"
            src={logo}
            alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
          />
          <nav className="flex items-center gap-x-5">
            <ul className="lg:hidden md:hidden">
              <li
                className="inline-block">
                {currentUser ? (
                  <>
                    <div className="lg:flex lg:justify-center">
                      <img
                        className="lg:w-12 lg:h-12 lg:rounded-full lg:object-cover lg:cursor-pointer lg:transition
                                 lg:duration-500 lg:hover:brightness-150
                                 w-12 h-12"
                        src={avatar}
                        alt="Profile"
                        onClick={() => setIsOpen(prev => !prev)}
                      />
                    </div>
                    <Dropdown
                      itemsList={[
                        {
                          id: 1,
                          trigger: () => navigate('/configuracao'),
                          component: <DropdownItem
                            text="Configurações"
                            edit="border-b border-social-gray pb-2"
                            icon={<Settings />}
                          />
                        },
                        {
                          id: 3,
                          trigger: () => navigate('/privacy'),
                          component: <DropdownItem
                            text="Privacidade"
                            edit=""
                            icon={<ShieldAlert />}
                          />
                        },
                        {
                          id: 4,
                          trigger: async () => navigate('/chat'),
                          component: <DropdownItem
                            text="Chat"
                            edit=""
                            icon={<Star />}
                          />
                        },
                        {
                          id: 5,
                          trigger: async () => await logout(),
                          component: <DropdownItem
                            text="Logout"
                            edit="text-social-red transition duration-500 hover:text-social-brand"
                            icon={<LogOut />}
                          />
                        },
                      ]}
                      visible={isOpen}
                      className="absolute right-0 transform mt-2"
                    />
                  </>
                ) : (
                  <AnimatedLink
                    to="/autenticacao/login"
                    text="Login"
                  />
                )}
              </li>
            </ul>
            <Sidebar/>
          </nav>
          <figcaption
            className="lg:text-left lg:max-w-48 lg:inline-block 
                       md:text-left md:max-w-48 md:inline-block 
                       hidden">
            Grupo <strong className="text-social-brand">Escoteiro</strong> Terra Da Saudade - 05/SP
          </figcaption>
        </figure>
        <figcaption
          className="lg:text-left lg:max-w-44 lg:hidden md:text-left md:max-w-44 md:hidden
                     text-center">
            Grupo <strong className="text-social-brand">Escoteiro</strong> Terra Da Saudade - 05/SP
        </figcaption>
        <nav
          className="lg:inline-block 
                     md:inline-block
                     hidden "
        >
          <ul
            className="lg:flex lg:items-center lg:gap-4
                       md:flex md:items-center md:gap-4">
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
            <li className="lg:relative">
              {currentUser ? (
                <>
                  <div className="lg:flex lg:justify-center">
                    <img
                      className="lg:w-12 lg:h-12 lg:rounded-full lg:object-cover lg:cursor-pointer lg:transition
                                 lg:duration-500 lg:hover:brightness-150"
                      src={avatar}
                      alt="Profile"
                      onClick={() => setIsOpen(prev => !prev)}
                    />
                  </div>
                  <Dropdown
                    itemsList={[
                      {
                        id: 1,
                        trigger: () => navigate('/configuracao'),
                        component: <DropdownItem
                          text="Configurações"
                          edit="border-b border-social-gray pb-2"
                          icon={<Settings />}
                        />
                      },
                      {
                        id: 3,
                        trigger: () => navigate('/privacy'),
                        component: <DropdownItem
                          text="Privacidade"
                          edit=""
                          icon={<ShieldAlert />}
                        />
                      },
                      {
                        id: 4,
                        trigger: async () => navigate('/chat'),
                        component: <DropdownItem
                          text="Chat"
                          edit=""
                          icon={<Star />}
                        />
                      },
                      {
                        id: 5,
                        trigger: async () => await logout(),
                        component: <DropdownItem
                          text="Logout"
                          edit="text-social-red transition duration-500 hover:text-social-brand"
                          icon={<LogOut />}
                        />
                      },
                    ]}
                    visible={isOpen}
                    className="absolute right-0 transform mt-2"
                  />
                </>
              ) : (
                <AnimatedLink
                  to="/autenticacao/login"
                  text="Login"
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
