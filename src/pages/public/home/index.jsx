import { OurHistory } from './components/our-history';
import { OurTeam } from './components/our-team';
import { OurContact } from './components/our-contact';
import { SectionTitle } from '../../../components/section-title';
import { Faq } from '../../../components/faq';

const faqs = [
  {
    question: 'Como posso participar?',
    answer: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
  {
    question: 'A partir de qual idade posso ser escoteiro?',
    answer: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
  {
    question: 'Onde os escoteiros se reunem?',
    answer: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
  {
    question: 'Terão responsáveis por perto?',
    answer: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
  {
    question: 'Quais atividades nós fazemos?',
    answer: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
  {
    question: 'Posso acompanhar meus fílhos no escoteiro?',
    answer: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
];

function Home() {
  return (
    <>
      <OurHistory />
      <OurTeam />
      <OurContact />
      <section className="pt-12 pb-16">
        <div className="max-w-[1160px] mx-auto">
          <SectionTitle
            content="Perguntas frequentes"
            className="mb-14"
          />
          <Faq faqs={faqs} />
        </div>
      </section>
    </>
  );
}

export { Home };
