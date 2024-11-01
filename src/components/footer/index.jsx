import logo from '/logo.svg';

function Footer() {
  return (
    <footer className="lg:w-full lg:py-4 bg-light-social-brand">
      <div className="lg:max-w-[1160px] lg:mx-auto ">
        <figure
          className="lg:flex lg:gap-12 lg:items-center lg:pt-8 lg:pb-0 lg:px-0
                     items-center pt-4"
          title="Voltar à home"
          aria-label="Voltar à página inicial do Grupo Escoteiro Terra Da Saudade"
        >
          <div className="lg:hidden flex justify-center py-4">
            <img
              className="lg:w-28 lg:h-28
                       w-20 h-20"
              src={logo}
              alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
            />
          </div>
          <img
            className="lg:inline-block lg:w-24 lg:h-24
                       hidden"
            src={logo}
            alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
          />
          <p
            className="lg:max-w-[580px] lg:text-base lg:block
                       hidden">
            Juntos construímos um mundo melhor. Cada gesto transforma sonhos em realidade.
            Lado a lado, desafios viram oportunidades e a esperança se torna ação.
            Somos parte de algo maior, e juntos, fazemos a diferença.
          </p>
          <figcaption
            className="lg:text-2xl lg:pl-20 lg:text-left
                       text-lg text-center">
            Grupo <strong className="text-social-brand">Escoteiro</strong> Terra Da Saudade - 05/SP
          </figcaption>
        </figure>
        <div
          className="lg:w-full lg:text-center lg:pt-4 lg:pb-0
                     w-full text-center pt-4 pb-12">
          <small className="text-social-gray">&copy; Todos direitos reservados</small>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
