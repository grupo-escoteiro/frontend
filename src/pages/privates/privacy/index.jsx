import { Container } from '../../../components/container';
import { SectionTitle } from '../../../components/section-title';

function Privacy() {

  function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'a/a/a';
    link.download = 'Currículo - Richard R Carvalho';
  }

  return (
    <section className="pt-12 pb-20">
      <div className="max-w-[1160px] mx-auto">
        <SectionTitle
          content="Políticas de Privacidade"
        />
        <Container className="mt-10 pt-9 pb-9 pl-4 pr-36">
          <div className="pb-6">
            <div className="flex gap-x-52">    
              <h2 className="text-2xl font-semibold text-social-brand">
                Nosso comprometimento com sua privacidade
              </h2>
              <div>
                <h2 className="text-lg font-semibold text-social-brand">
                    Última atualização
                </h2>
                <p className="text-justify text-sm pt-1 text-social-gray">
                    Esta política foi atualizada em: 07/10/2024
                </p>
              </div>
            </div>
            <p className="pt-5">
                A sua privacidade é importante para nós. É política do Grupo Escoteiro
                Terra da Saudade respeitar sua privacidade em relação a qualquer
                informação sua que possamos coletar no site GETS (Grupo Escoteiro
                Terra da Saudade).
            </p>
          </div>
          <div className="pb-6">
            <h2 className="text-lg font-semibold text-social-brand">
                1. Informações que coletamos
            </h2>
            <p className="pt-5">
                Coletamos informações pessoais que você nos fornece
                diretamente, como: nome, data de nascimento, e-mail, endereço residencial, 
                número de telefone e etc.
                Esses dados são muito importantes para nosso controle de quem segue cadastrado
                dentro do nosso sistema e que esteja participando das atividades.
            </p>
          </div>
          <div className="pb-6">
            <h2 className="text-lg font-semibold text-social-brand">
                2. Como usamos suas informações
            </h2>
            <p className="pt-5">
                Usamos as informações que coletamos de várias formas,
                inclusive para:
              <ul className="pl-2">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-social-brand mr-2"></span>
                  Fornecer, operar e manter nosso site.
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-social-brand mr-2"></span>
                  Observar se você está ativo dentro do nosso site.
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-social-brand mr-2"></span>
                  Melhorar e personalizar a sua experiência de navegação, 
                  oferecendo conteúdos e funcionalidades mais relevantes.
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-social-brand mr-2"></span>
                  Enviar comunicações importantes sobre o uso do site, 
                  atualizações ou mudanças em nossas políticas.
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-social-brand mr-2"></span>
                  Garantir a segurança do site e prevenir atividades fraudulentas ou não autorizadas.
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-social-brand mr-2"></span>
                  Cumprir com requisitos legais e regulamentares que nos obrigam a reter 
                  determinados dados por um período específico.
                </li>
              </ul>
            </p>
          </div>
          <div className="pb-6">
            <h2 className="text-lg font-semibold text-social-brand">
                3. Proteção de dados
            </h2>
            <p className="pt-5">
                Temos um cuidado especial com os dados de crianças e adolescentes. Sempre solicitamos autorização dos
                pais ou responsáveis legais antes de coletar ou usar informações de menores de idade.
            </p>
          </div>
          <div className="pb-6">
            <h2 className="text-lg font-semibold text-social-brand">
                4. Uso de imagem
            </h2>
            <p className="pt-5">
                Ocasionalmente, tiramos fotos e gravamos vídeos durante nossas atividades. 
                Sempre solicitamos autorização prévia dos participantes
                (ou dos pais/responsáveis, no caso de menores) antes de usar ou compartilhar essas imagens publicamente.
            </p>
          </div>
          <div className="pb-6">
            <h2 className="text-lg font-semibold text-social-brand">
                5. Compartilhamento de informações
            </h2>
            <p className="pt-5">
                Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, 
                exceto quando necessário para cumprir com a lei,
                desenvolver nossas atividades escoteiras ou proteger nossos direitos.
            </p>
          </div>
          <div className="pb-6">
            <h2 className="text-lg font-semibold text-social-brand">
                6. Segurança de dados
            </h2>
            <p className="pt-5">
                Implementamos medidas de segurança para proteger suas informações pessoais, incluindo:
              <ul className="pl-2">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-social-brand mr-2"></span>
                  Armazenamento seguro de dados.
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-social-brand mr-2"></span>
                  Acesso restrito às informações pessoais.
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-social-brand mr-2"></span>
                  Treinamento de voluntários sobre práticas de privacidade.
                </li>
              </ul>
            </p>
          </div>
          <div className="pb-6">
            <h2 className="text-lg font-semibold text-social-brand">
                7. Contato
            </h2>
            <p className="pt-5">
            Poderá entrar em contato caso tenha alguma dúvida, é só clicar no ícone flutuante do WhatsApp ao 
            lado da tela ou poderá enviar uma mensagem de e-mail que iremos de responder e tirar todas as suas dúvidas.
            </p>
          </div>
          <div className="pb-6">
            <h2 className="text-lg font-semibold text-social-brand">
                7. Contato
            </h2>
            <p className="pt-5">
            Poderá entrar em contato caso tenha alguma dúvida, é só clicar no ícone flutuante do WhatsApp ao 
            lado da tela ou poderá enviar uma mensagem de e-mail que iremos de responder e tirar todas as suas dúvidas.
            </p>
          </div>
          <div className="pb-6">
            <h2
              className="text-lg font-semibold text-social-brand border-t-2 border-social-gray
                         pt-6">
                Arquivos
            </h2>
            <div className="pt-7">
              <button 
                onClick={downloadPDF()}
                className="border border-social-gray rounded px-28 py-1 font-semibold
                           transition duration-500 hover:text-social-white 
                           hover:bg-social-brand hover:border-social-white">
                            Baixar PDF
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export { Privacy };