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
                   pt-12 pb-16"
      >
        <div
          className="lg:max-w-[1024px] lg:mx-auto
                     md:max-w-[620px] md:mx-auto
                     max-w-[320px] mx-auto"
        >
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
