import { Container } from '../../../components/container';
import { Header } from '../../../components/header';
import { SectionTitle } from '../../../components/section-title';
import { Tabs } from '../../../components/tabs';
import { MainPersonalAddress } from './components/main-personal-address';
import { MainPersonalInformations } from './components/main-personal-informations';
import { MainPersonalImage } from './components/main-personal-image';
import { PageTransition } from '../../../components/page-transition';
import { useTranslation } from 'react-i18next';

function Settings() {

  const { t } = useTranslation ();

  const tabs = [
    <MainPersonalInformations key="1" />,
    <MainPersonalAddress key="2" />,
    <MainPersonalImage key="3"/>
  ];

  return (
    <PageTransition>
      <Header />
      <section className="pt-12 pb-16">
        <div
          className="lg:max-w-[1024px] lg:mx-auto
                     md:max-w-[620px] md:mx-auto
                     max-w-[320px] mx-auto"
        >
          <SectionTitle
            content={t('settings.sectionTitle')}
            className="mb-5"
          />
          <Container
            className="lg:flex lg:flex-row lg:py-16 lg:px-8 lg:gap-x-9
                       md:flex md:flex-col md:px-8 md:gap-x-9"
          >
            <menu>
              <ul
                className="lg:flex lg:flex-col lg:gap-y-6 lg:py-0
                           md:flex md:flex-row md:gap-x-0 md:py-4 md:max-w-48
                           flex flex-col gap-y-2 max-w-44 py-4"
              >
                <li
                  className="text-nowrap font-semibold text-social-brand
                              transition duration-500 p-2 hover:bg-social-brand hover:text-social-white
                              rounded">
                  <button>
                    {t('settings.firstbuttom')}  
                  </button>
                </li>
                <li
                  className="font-semibold transition duration-500 p-2 
                  hover:bg-social-brand hover:text-social-white rounded">
                  <button>
                    {t('settings.secondButtom')}
                  </button>
                </li>
              </ul>
            </menu>
            <div className="lg:border-l lg:border-social-gray lg:w-full">
              <Tabs
                titles={[t('settings.firstTitle'), t('settings.secondTitle'), t('settings.thirdTitle')]}
                body={ tabs }
              />
            </div>
          </Container>
        </div >
      </section >
    </PageTransition>
  );
}

export { Settings };
