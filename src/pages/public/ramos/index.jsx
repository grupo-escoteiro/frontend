import lobinho from '/lobinho.svg';
import { SectionTitle } from '../../../components/section-title';
import flordeliz from '/flor-de-liz.svg';
import { useState } from 'react';
import { Modal } from '../../../components/modal';

function Ramos() {
  const [openLobinho, setOpenLobinho] = useState(false);

  const [openJunior, setOpenJunior] = useState(false);

  const handleModalOpenLobinho = () => {
    setOpenLobinho(state => !state);
  };

  const handleModalOpenJunior = () => {
    setOpenJunior(state => !state);
  };

  return (
    <section className="pt-12 pb-20">
      <div className="max-w-[1160px] mx-auto">
        <SectionTitle
          className="pt-12 pb-14"
          content="Ramos"
        />
        <div className="flex margin-auto gap-x-32">
          <img
            className="w-[278px] h-[225px] rounded-full object-cover shadow-default"
            src={lobinho}
          />
          <p className="text-2xl">
            <span className="text-social-brand pr-2">
              Lobinho:
            </span>
              O Lobismo é parte do movimento educacional escoteiro desenvolvido para aplicar os Princípios do
              Escotismo, de Conta com a colaboração de adultos voluntários, segundo os Fundamentos do Escotismo,
              bem como da participação ativa da família. A organização e as atividades dos lobos foram traduzidas do
              Cub Book; The Jungle Book; Cub activies, tendo sido adaptados à nossa realidade.
              É inspirado na História do The Jungle Book de Rudyard Kipling, história que versa
              sobre a vida de um menino criado por lobos e que é educado pelos membros do povo de Seeonee.
              O Propósito do Lobismo é contribuir para que a criança comece a firmar a educação do lar,
              desenvolvendo a responsabilidade do seu desenvolvimento,
              conforme a proposta educacional do Movimento Escoteiro.
              Promove oportunidade para adequação do cotidiano da criança à vida escoteira,
              além de propiciar o conhecer e respeitar o próximo, procurando desenvolver o senso de cooperação,
              participação e o convívio harmonioso com a comunidade.
            <button
              onClick={handleModalOpenLobinho}
              className="text-social-brand flex py-10 transition duration-500 hover:brightness-50"
              type="button"
            >
              Ver mais
            </button>
          </p>
        </div>
        <div className="flex margin-auto pt-44 gap-x-28">
          <p className="text-2xl">
            <span className="text-social-brand pr-2">
              Junior:
            </span>
              A Seção Júnior visa proporcionar ao pré-adolescente e o
              adolescente de ambos os sexos o incentivo no desenvolvimento do caráter,
              respeitando as transformações do corpo e da mente e trabalhando para um pleno,
              desenvolvimento físico, intelectual, afetivo e espiritual.
              Levando esse adolescente a buscar com afinco o conhecimento.
              Os escoteiros juniores são estimulados a descobrir seus limites em atividades como acampamentos,
              jornadas e jogos ao ar livre.
            <button
              onClick={handleModalOpenJunior}
              className="text-social-brand flex py-10 transition duration-500 hover:brightness-50"
              type="button">
              Ver mais
            </button>
          </p>
          <img
            className="w-[309px] h-[246px] rounded-full object-cover shadow-default"
            src={flordeliz}
          />
        </div>
      </div >

      <Modal
        open={openLobinho}
        onClose={handleModalOpenLobinho}
      >
        <div className="flex items-center gap-4">
          <img
            className="w-[140px] h-[140px]"
            src={lobinho}
          />
          <h2 className="text-xl font-bold text-social-brand">Lobinho</h2>
        </div>
        <p>
          Deveres com Deus: tratando de forma indissociável dos demais pilares, 
          abaixo descritos, o escoteiro é estimulado a procurar em Deus seu referencial, 
          praticando sua crença e respeitando os demais.
          Deveres para com a Pátria: transcendendo o dever de sua comunidade o escoteiro é 
          estimulado através do seu conhecimento cívico e social, a compreender, 
          aprimorar e multiplicar os valores do cidadão Brasileiro.
          Deveres para com o Próximo: estimulando atividades as quais se compreendem o valor do próximo, 
          o escoteiro baseia todo o seu trabalho ao servir ao próximo e cuidar de seu bem-estar.
          Aprender fazendo: É vivenciando as experiências que o jovem aprende, desenvolve e inova seu mundo. 
          É aprendendo pela prática que ele vai aprimorando seus conhecimentos.
          Aceitação da Lei e Promessa: O escoteiro é estimulado através das experiências a assumir voluntariamente 
          um código de conduta que o leva a um conjunto de valores, e estes são representados pela Lei e 
          Promessa.
          Sistema de Patrulhas: Vivendo em pequenas equipes cooperativas eles desenvolvem valores e 
          habilidades.
          A patrulha é a unidade para todo o trabalho desenvolvido no movimento escoteiro. 
          Desenvolvimento individual meritocrático: Cada jovem experimenta a sua maneira e cresce dentro do seu ritmo, 
          orientado por chefes e pelo sistema de etapas e conquistas, vai individualmente superando desafios e 
          adquirindo habilidades, e quando atinge um padrão mínimo, lhe é reconhecido com um distintivo de conquista.
        </p>
        <div className="text-end py-6 px-12">
          <button
            onClick={handleModalOpenLobinho}
            className="mt-4 text-social-red transition duration-500 hover:brightness-50"
          >
            Fechar
          </button>
        </div>
      </Modal>

      <Modal
        open={openJunior}
        onClose={handleModalOpenJunior}
      >
        <div className="flex items-center gap-4">
          <img
            className="w-[140px] h-[140px]"
            src={flordeliz}
          />
          <h2 className="text-xl font-bold text-social-brand">Junior</h2>
        </div>
        <p>
          Prometo pela minha honra fazer o melhor possível para:
          Cumprir meus deveres para com Deus e minha Pátria;
          Ajudar o próximo em toda e qualquer ocasião;
          Obedecer à Lei Escoteira.
          A Lei Escoteira seguida pelos juniores é:
          O Escoteiro tem uma só palavra, sua honra vale mais que a própria vida;
          O Escoteiro é Leal;
          O Escoteiro está Sempre Alerta para ajudar o Próximo e pratica diariamente uma boa ação;
          O Escoteiro é Amigo de todos e Irmão dos demais Escoteiros;
          O Escoteiro é cortês;
          O Escoteiro é amigo dos animais e das Plantas;
          O Escoteiro é obediente e disciplinado;
          O Escoteiro é alegre e sorri nas dificuldades;
          O Escoteiro é econômico e respeita o bem alheio;
          O Escoteiro é limpo de corpo e alma.
          O Lema do Escoteiro Júnior é Sempre Alerta.
        </p>
        <div className="text-end py-6 px-12">
          <button
            onClick={handleModalOpenJunior}
            className="mt-4 text-social-red transition duration-500 hover:brightness-50"
          >
            Fechar
          </button>
        </div>
      </Modal>
    </section>
  );
}

export { Ramos };
