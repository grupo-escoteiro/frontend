import { OurHistory } from './components/our-history';
import { OurTeam } from './components/our-team';
import { OurContact } from './components/our-contact';
import { SectionTitle } from '../../../components/section-title';
import { Faq } from '../../../components/faq';
import { PageTransition } from '../../../components/page-transition';

const faqs = [
  {
    question: 'home.faqs.firstQuestion',
    answer: 'home.faqs.firstAnswer',
  },
  {
    question: 'home.faqs.secondQuestion',
    answer: 'home.faqs.secondAnswer',
  },
  {
    question: 'home.faqs.thirdQuestion',
    answer: 'home.faqs.thirdAnswer',
  },
  {
    question: 'home.faqs.forthQuestion',
    answer: 'home.faqs.forthAnswer',
  },
  {
    question: 'home.faqs.fifithQuestion',
    answer: 'home.faqs.fifithAnswer',
  },
  {
    question: 'home.faqs.sixthQuestion',
    answer: 'home.faqs.sixthAnswer',
  },
];

function Home() {
  return (
    <PageTransition>
      <OurHistory />
      <OurTeam />
      <OurContact />
      <section
        className="lg:pt-12 lg:pb-16
                   md:pt-12 md:pb-16
                   pt-12 pb-16 dark:bg-dark-social-gray dark:text-social-white"
      >
        <div
          className="lg:max-w-[1024px] lg:mx-auto
                     md:max-w-[620px] md:mx-auto
                     max-w-[320px] mx-auto"
        >
          <div className="w-full aspect-w-4 aspect-h-3 mb-10 shadow-default">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.4580113466154
              !2d-48.361909424951634!3d-21.607069280190956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768
              !4f13.1!3m3!1m2!1s0x94b91e2ab58bbe25%3A0xc7f77f012140891d!2sEscola%20Estadual
              %20Padre%20Nelson%20Ant%C3%B4nio%20Rom%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v17330589
              89202!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <SectionTitle
            content="Perguntas frequentes"
            className="lg:mb-14 lg:text-left
                       md:mb-14 md:text-left
                       mb-10 text-left"
          />
          <Faq faqs={faqs} />
        </div>
      </section>
    </PageTransition>
  );
}

export { Home };
