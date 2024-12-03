import { Cards } from '../../../../components/cards';
import { SectionTitle } from '../../../../components/section-title';
import wilberchefinho from '/chefe-wilber.jpg';
import chefa from '/chefa.jpg';
import ryanchefinho from '/chefe-ryan.jpg';
import { useTranslation } from 'react-i18next';


function OurTeam() {

  const { t } = useTranslation();

  return (
    <section
      className="lg:pt-12 lg:pb-20
                 md:pt-12 md:pb-20
                 pt-12 pb-20
                 dark:bg-dark-social-gray dark:text-dark-social-white">
      <div
        className="lg:max-w-[1024px] lg:mx-auto
                   md:max-w-[620px] md:mx-auto
                   max-w-[320px] mx-auto">
        <SectionTitle
          content={t('home.ourTeam.title')}
          className="lg:mb-9 lg:text-left
                     md:mb-9 md:text-left
                     mb-9 text-left"
        />
        <div
          className="lg:flex lg:flex-row lg:gap-12
                     md:grid md:grid-cols-2
                     flex flex-col justify-center items-center gap-12">
          <Cards
            url={ryanchefinho}
            instagram="https://www.instagram.com/ryan_carvalho06?igsh=ZnFzYTVrNjN3aG90&utm_source=qr"
            linkedin="https://www.linkedin.com/in/richard-ryan-carvalho-63a9a5261?utm_source=share&utm_
            campaign=share_via&utm_content=profile&utm_medium=ios_app"
            title="Ícaro Vegano"
            desc={t('home.ourTeam.firstDesc')}
          />
          <Cards
            url={wilberchefinho}
            instagram="https://www.instagram.com/ryan_carvalho06?igsh=ZnFzYTVrNjN3aG90&utm_source=qr"
            linkedin="https://www.linkedin.com/in/richard-ryan-carvalho-63a9a5261?utm_source=share&utm_
            campaign=share_via&utm_content=profile&utm_medium=ios_app"
            title="Zé Luneta"
            desc={t('home.ourTeam.secondDesc')}
          />
          <Cards
            url={chefa}
            instagram="https://www.instagram.com/ryan_carvalho06?igsh=ZnFzYTVrNjN3aG90&utm_source=qr"
            linkedin="https://www.linkedin.com/in/richard-ryan-carvalho-63a9a5261?utm_source=share&utm_
            campaign=share_via&utm_content=profile&utm_medium=ios_app"
            title="Nina Bússola"
            desc={t('home.ourTeam.thirdDesc')}
          />
        </div>
      </div>
    </section>
  );
}

export { OurTeam };
