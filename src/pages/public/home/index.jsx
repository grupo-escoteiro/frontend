import { OurHistory } from './components/our-history';
import { OurTeam } from './components/our-team';
import { OurContact } from './components/our-contact';
import { SectionTitle } from '../../../components/section-title';
import { Faq } from '../../../components/faq';

const faqs = [
  {
    question: 'Como posso participar?',
    answer: `Basta apenas fazer o cadastro e ir pessoalmente ter uma conversa com os chefes do grupo,
             mas caso prefira fazer a ficha cadastral pessoalmente, poderá ser feito do mesmo jeito.`,
  },
  {
    question: 'A partir de qual idade posso ser escoteiro?',
    answer: `Ramo dos lobinhos poderão participar aos 6 anos de idade até os 10 anos de idade, e depois
             que completar essa idade, o escoteiro será transferido para o Ramo de júnior.`,
  },
  {
    question: 'Onde os escoteiros se reunem?',
    answer: 'A sede do Grupo Escoteiro da Saudade fica localizado na escola Padre Nelson.',
  },
  {
    question: 'Terão responsáveis por perto?',
    answer: `Todas as seções tem os chefes como responsáveis pelas crianças e também podem contar com o apoio dos 
             pais.`,
  },
  {
    question: 'Quais atividades nós fazemos?',
    answer: `As atividades são pensadas no desenvolvimento das crianças e dos jovens, ou seja, deixando a criança
             com a capacidade de se virar sozinha desde cedo.`,
  },
  {
    question: 'Posso acompanhar meus fílhos no escoteiro?',
    answer: `Para acompanhar nas atividades semanais das crianças e dos jovens escoteiros,
             os pais podem se voluntariar e se tornarem chefes de um dos setores ou de apoio.`,
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
