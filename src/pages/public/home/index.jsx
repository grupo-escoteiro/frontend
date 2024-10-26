import { OurHistory } from './components/our-history';
import { OurTeam } from './components/our-team';
import { OurContact } from './components/our-contact';
import { SectionTitle } from '../../../components/section-title';
import { Faq } from '../../../components/faq';
import { PageTransition } from '../../../components/page-transition';

function Home() {
  return (
    <PageTransition>
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
    </PageTransition>
  );
}

export { Home };
