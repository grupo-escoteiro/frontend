import avatar from '/avatar.png';
import { AnimatedLink } from './components/AnimatedLink';
import { Dropdown } from '../dropdown';
import { getAuth } from 'firebase/auth';
import { Sidebar } from '../sidebar';
import { DropdownItem } from './components/dropdownItem';
import { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogOut, Settings, ShieldAlert, Star, LockKeyhole } from 'lucide-react';
import { signOutAsync } from '../../services/firebase/auth';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ReactFlagsSelect from 'react-flags-select';
import { ThemeContext } from '../../contexts/theme';

function Header() {
  const { getLogo } = useContext(ThemeContext);

  const { t } = useTranslation();

  const { currentUser } = getAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const routesWithProfileHighlight = ['/configuracao', '/privacy', '/chat', '/admin'];

  const isOnHighlightedPage = routesWithProfileHighlight.includes(location.pathname);

  async function logout() {
    try {
      await signOutAsync();
      toast.success(t('header.logoutSucess'));
      navigate('/');
    } catch {
      toast.error('header.logoutError');
    }
  }

  function handleLanguageSelection(code) {
    switch (code) {
      case 'US':
        i18next.changeLanguage('en');
        break;
      case 'ES':
        i18next.changeLanguage('es');
        break;
      default:
        i18next.changeLanguage('pt-BR');
        break;
    }
  }

  return (
    <header
      className="lg:w-full lg:bg-light-social-brand lg:dark:bg-dark-social-background lg:pb-0 md:w-full
           md:bg-light-social-brand 
           md:dark:bg-dark-social-background 
           md:dark:text-dark-social-white md:pb-0 bg-light-social-brand pb-8">
      <div
        className="lg:max-w-[1024px] lg:mx-auto lg:py-7 lg:px-0 lg:flex 
              lg:justify-between lg:items-center md:max-w-[620px] md:mx-auto 
              md:py-7 md:px-0 md:flex md:justify-between md:items-center max-w-[320px] mx-auto"
      >
        <figure
          className="lg:flex lg:gap-2 lg:items-center lg:cursor-pointer 
                lg:p-0 md:flex md:gap-2 md:items-center md:cursor-pointer 
                md:p-0 px-0 py-7 flex justify-between items-center cursor-pointer"
          title="Voltar à home"
          aria-label="Voltar à página inicial do Grupo Escoteiro Terra Da Saudade"
        >
          <img
            className="lg:w-24 lg:h-24 w-20 h-20"
            src={getLogo()}
            alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas." />
          <nav
            className="flex items-center gap-x-5 
            lg:dark:text-dark-social-white lg:dark:bg-dark-social-background 
            md:dark:text-dark-social-white md:dark:bg-dark-social-background" >
            <ul className="lg:hidden md:hidden">
              <li className="inline-block">
                {currentUser ? (
                  <>
                    <div className="lg:flex lg:justify-center lg:items-center">
                      <img
                        className={`lg:w-12 lg:h-12 rounded-full object-cover 
                          cursor-pointer transition duration-500 hover:brightness-150 
                          md:w-12 md:h-12 w-12 h-12 ${isOnHighlightedPage ? 'ring ring-social-brand' : ''
                          }`}
                        src={avatar}
                        alt="Profile"
                        onClick={() => setIsOpen((prev) => !prev)}
                      />
                    </div>
                    <Dropdown
                      itemsList={[
                        {
                          id: 1,
                          trigger: () => navigate('/configuracao'),
                          component: (
                            <DropdownItem
                              text={t('header.firstText')}
                              edit="border-b border-social-gray pb-2"
                              icon={<Settings />}
                            />
                          ),
                        },
                        {
                          id: 2,
                          trigger: () => navigate('/privacy'),
                          component: <DropdownItem text={t('header.secondText')} edit="" icon={<ShieldAlert />} />,
                        },
                        {
                          id: 3,
                          trigger: async () => navigate('/chat'),
                          component: <DropdownItem text={t('header.thirdText')} edit="" icon={<Star />} />,
                        },
                        {
                          id: 5,
                          trigger: async () => await logout(),
                          component: (
                            <DropdownItem
                              text={t('header.forthText')}
                              edit="text-social-red transition duration-500 hover:text-social-brand"
                              icon={<LogOut />}
                            />
                          ),
                        },
                      ]}
                      visible={isOpen}
                      className="absolute right-0 transform mt-2"
                    />
                  </>
                ) : (
                  <AnimatedLink to="/autenticacao/login" text={t('header.fifithText')} />
                )}
              </li>
            </ul>
            <Sidebar />
          </nav>
          <figcaption
            className="lg:text-left lg:max-w-48 lg:inline-block md:text-left md:max-w-48 md:hidden hidden">
            {t('header.firstFig')} <strong className="text-social-brand">
              {t('header.firstStrong')}</strong> {t('header.firstTerra')}
          </figcaption>
        </figure>
        <figcaption
          className="lg:text-left lg:max-w-44 lg:hidden 
          lg:dark:text-dark-social-white md:text-left md:max-w-44 md:hidden text-center">
          {t('header.secondFig')} <strong className="text-social-brand">
            {t('header.secondStrong')}</strong> {t('header.secondTerra')}
        </figcaption>
        <nav
          className="lg:inline-block md:inline-block hidden 
            lg:dark:text-dark-social-white md:dark:text-dark-social-white">
          <ul className="lg:flex lg:items-center lg:gap-4 md:flex md:items-center md:gap-4">
            <li>
              <AnimatedLink text={t('header.animatedText')} to="/" />
            </li>
            <li>
              <AnimatedLink text={t('header.animatedSecondText')} to="/noticias" />
            </li>
            <li>
              <AnimatedLink to="/ramos" text={t('header.animatedThirdText')} />
            </li>
            <li>
              <AnimatedLink to="/galeria" text={t('header.animatedForthText')} />
            </li>
            <li className="lg:relative">
              {currentUser ? (
                <>
                  <div className="lg:flex lg:justify-center">
                    <img
                      className={`lg:w-12 lg:h-12 rounded-full object-cover
                        cursor-pointer transition duration-500 hover:brightness-150 
                        md:w-12 md:h-12 w-12 h-12 ${isOnHighlightedPage ?
                          'ring-2 ring-social-brand' : ''
                        }`}
                      src={avatar}
                      alt="Profile"
                      onClick={() => setIsOpen((prev) => !prev)}
                    />
                  </div>
                  <Dropdown
                    itemsList={[
                      {
                        id: 1,
                        trigger: () => navigate('/configuracao'),
                        component: (
                          <DropdownItem
                            text={t('header.firstDropdownText')}
                            edit="border-b border-social-gray pb-2"
                            icon={<Settings />}
                          />
                        ),
                      },
                      {
                        id: 2,
                        trigger: () => navigate('/privacy'),
                        component: <DropdownItem
                          text={t('header.secondDropdownText')}
                          edit=""
                          icon={<ShieldAlert />} />,
                      },
                      {
                        id: 3,
                        trigger: async () => navigate('/chat'),
                        component: <DropdownItem
                          text={t('header.thirdDropdownText')}
                          edit=""
                          icon={<Star />} />,
                      },
                      {
                        id: 4,
                        trigger: async () => navigate('/admin'),
                        component: <DropdownItem
                          text={t('header.forthDropdownText')}
                          edit=""
                          icon={<LockKeyhole />} />,
                      },
                      {
                        id: 5,
                        trigger: async () => await logout(),
                        component: (
                          <DropdownItem
                            text={t('header.fifithDropdownText')}
                            edit="text-social-red transition duration-500 hover:text-social-brand"
                            icon={<LogOut />}
                          />
                        ),
                      },
                    ]}
                    visible={isOpen}
                    className="absolute right-0 transform mt-2"
                  />
                </>
              ) : (
                <AnimatedLink to="/autenticacao/login" text={t('header.seventhDropdownText')} />
              )}
            </li>
            <li>
              <ReactFlagsSelect
                showSelectedLabel={true}
                selectButtonClassName="flags"
                countries={['US', 'ES', 'BR']}
                placeholder={t('header.languageText')}
                onSelect={handleLanguageSelection}
              />
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="lg:hidden
                   md:flex md:justify-center md:max-w-[620px] md:mx-auto md:pb-8
                   hidden"
      >
        <figcaption
          className="md:text-center">
          {t('header.firstFig')} <strong className="text-social-brand">
            {t('header.firstStrong')}</strong> {t('header.firstTerra')}
        </figcaption>
      </div>
    </header>
  );
}

export { Header };
