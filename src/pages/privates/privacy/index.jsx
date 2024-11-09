import { Container } from '../../../components/container';
import { PageTransition } from '../../../components/page-transition';
import { SectionTitle } from '../../../components/section-title';
import { useState } from 'react';

function Privacy() {

  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/pdf/privacy.pdf';
    link.download = 'Arquivo PDF';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloading(false);
  };

  return (
    <PageTransition>
      <main>
        <section className="pt-12 pb-20">
          <div
            className="lg:max-w-[1024px] lg:mx-auto
                       md:max-w-[620px] md:mx-auto
                       max-w-[320px] mx-auto"
          >
            <SectionTitle
              content="Políticas de Privacidade"
              className="lg:mb-14 lg:text-left
                         md:mb-14 md:text-left
                         mb-10 text-left"
            />
            <Container
              className="lg:pt-8 lg:pb-6 lg:px-4
                         md:pt-8 md:pb-6 md:px-4
                         pt-8 pb-6 px-4"
            >
              <div
                className="lg:pb-6
                           md:pb-6
                           pb-6"
              >
                <div
                  className="lg:flex lg:gap-x-52
                             md:flex md:gap-x-52"
                >    
                  <h2
                    className="lg:text-2xl lg:font-semibold lg:text-left text-social-brand
                               md:text-xl md:font-semibold md:text-left
                               text-lg font-semibold text-center"
                  >
                    Nosso comprometimento com sua privacidade
                  </h2>
                  <div>
                    <h2
                      className="lg:text-lg lg:font-semibold lg:inline-block text-social-brand
                                 md:hidden
                                 hidden"
                    >
                      Última atualização
                    </h2>
                    <p
                      className="lg:text-justify lg:text-sm lg:pt-1 lg:inline-block text-social-gray
                                 md:hidden
                                 hidden"
                    >
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
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                        Fornecer, operar e manter nosso site.
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                        Observar se você está ativo dentro do nosso site.
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                        Melhorar e personalizar a sua experiência de navegação, 
                        oferecendo conteúdos e funcionalidades mais relevantes.
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                        Enviar comunicações importantes sobre o uso do site, 
                        atualizações ou mudanças em nossas políticas.
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                        Garantir a segurança do site e prevenir atividades fraudulentas ou não autorizadas.
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
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
                  (ou dos pais/responsáveis, no caso de menores) antes de usar ou compartilhar 
                  essas imagens publicamente.
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
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                        Armazenamento seguro de dados.
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
                        Acesso restrito às informações pessoais.
                    </li>
                    <li className="flex items-center">
                      <span
                        className="lg:inline-block lg:w-2 lg:h-2 lg:rounded-full bg-social-brand lg:mr-2
                                   md:hidden
                                   hidden"
                      ></span>
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
                  lado da tela ou poderá enviar uma mensagem de e-mail que iremos de responder e tirar todas as suas 
                  dúvidas.
                </p>
              </div>
              <div className="pb-6">
                <h2
                  className="text-lg font-semibold text-social-brand border-t-2 border-social-gray
                         pt-6">
                  Arquivos
                </h2>
                <div className="pt-7">
                  <a
                    onClick={downloadPDF}
                    disabled={isDownloading}
                    className="border border-social-gray rounded lg:px-28 md:px-20 px-16 py-1 font-semibold
                              transition duration-500 hover:text-social-white 
                              hover:bg-social-brand hover:border-social-white cursor-pointer
                              disabled:opacity-50 disabled:cursor-not-allowed">
                    Baixar PDF
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

export { Privacy };