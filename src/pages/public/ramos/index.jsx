import lobinho from '../../../../public/lobinho.svg';
import { SectionTitle } from '../../../components/section-title';
import flordeliz from '../../../../public/flor-de-liz.svg';
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
              O Lobismo é parte do movimento educacional escoteiro 
              desenvolvido para aplicar os Princípios do Escotismo, de
              Conta com a colaboração de adultos voluntários, 
              segundo os Fundamentos do Escotismo, bem como da participação ativa da família.
              A organização e as atividades dos lobos foram traduzidas do Cub Book; The Jungle Book; Cub activies,
              tendo sido adaptados à nossa realidade. É inspirado na História do The Jungle Book de Rudyard Kipling,
              história que versa sobre a vida de um menino criado por lobos
              e que é educado pelos membros do povo de Seeonee.
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
        <h2 className="text-xl font-bold">Lobinho</h2>
        <p> 
          O Lobismo é parte do movimento educacional escoteiro desenvolvido para aplicar os Princípios do Escotismo,
          de Conta com a colaboração de adultos voluntários, segundo os Fundamentos do Escotismo, 
          bem como da participação ativa da família.
          A organização e as atividades dos lobos foram traduzidas do Cub Book; The Jungle Book; Cub activies,
          tendo sido adaptados à nossa realidade. É inspirado na História do The Jungle Book de Rudyard Kipling,
          história que versa sobre a vida de um menino criado por lobos e que é educado pelos membros do povo de 
          Seeonee.
          O Propósito do Lobismo é contribuir para que a criança comece a firmar a educação do lar,
          desenvolvendo a responsabilidade do seu desenvolvimento, conforme a proposta educacional
          do Movimento Escoteiro.
          Promove oportunidade para adequação do cotidiano da criança à vida escoteira, além de propiciar o 
          conhecer e respeitar o próximo, procurando desenvolver o senso de cooperação, 
          participação e o convívio harmonioso com a comunidade. tratando de forma indissociável 
          dos demais pilares, abaixo descritos, o escoteiro é estimulado a procurar em Deus seu referencial, 
          praticando sua crença e respeitando os demais. transcendendo o dever de sua comunidade o 
          escoteiro é estimulado através do seu conhecimento cívico e social, a compreender, aprimorar 
          e multiplicar os valores do cidadão Brasileiro. estimulando atividades as quais 
          se compreendem o valor do próximo, o escoteiro baseia todo o seu trabalho ao servir 
          ao próximo e cuidar de seu bem-estar. É vivenciando as experiências que o jovem aprende, 
          desenvolve e inova seu mundo. É aprendendo pela prática que ele vai aprimorando seus conhecimentos.
        </p>
        <button 
          onClick={handleModalOpenLobinho} 
          className="mt-4 text-social-brand transition duration-500 hover:brightness-50"
        >
          Fechar
        </button>
      </Modal>

      <Modal 
        open={openJunior} 
        onClose={handleModalOpenJunior}
      >
        <h2 className="text-xl font-bold">Junior</h2>
        <p>A Seção Júnior visa proporcionar ao pré-adolescente e o adolescente de ambos 
          os sexos o incentivo no desenvolvimento do caráter, respeitando as transformações 
          do corpo e da mente e trabalhando para um pleno, desenvolvimento físico, intelectual, afetivo e espiritual.
          Levando esse adolescente a buscar com afinco o conhecimento. Os escoteiros juniores 
          são estimulados a descobrir seus limites em atividades como acampamentos, jornadas e jogos ao ar livre.
          A organização e as atividades dos juniores se encontram neste documento, nos Livros de Baden-Powell, 
          Scouting for boys, e Guide of Scoutmastere nos guias específicos do Ramo Júnior.
          Em caso de divergência valerão as regras aqui descritas. 
          Prometo pela minha honra fazer o melhor possível para:
          Cumprir meus deveres para com Deus e minha Pátria;
          Ajudar o próximo em toda e qualquer ocasião;
          Obedecer à Lei Escoteira.
          A Lei Escoteira seguida pelos juniores é:
          O Escoteiro tem uma só palavra, sua honra vale mais que a própria vida;
          O Escoteiro é Leal;
          O Escoteiro está Sempre Alerta para ajudar o Próximo e pratica diariamente uma boa ação;
          O Escoteiro é Amigo de todos e Irmão dos demais Escoteiros;
        </p>
        <button 
          onClick={handleModalOpenJunior} 
          className="mt-4 text-social-brand transition duration-500 hover:brightness-50"
        >
          Fechar
        </button>
      </Modal>
    </section>
  );
}

export { Ramos };