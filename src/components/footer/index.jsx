import logo from '/logo.svg';

function Footer() {
  return (
    <footer className="w-full py-4 bg-light-social-brand">
      <div className="max-w-[1160px] mx-auto ">
        <figure
          className="flex gap-12 items-center cursor-pointer px-48 pt-8"
          title="Voltar à home"
          aria-label="Voltar à página inicial do Grupo Escoteiro Terra Da Saudade"
        >
          <img
            className="w-24 h-24"
            src={logo}
            alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
          />
          <p className="max-w-[580px] text-base">
            Juntos construímos um mundo melhor. Cada gesto transforma sonhos em realidade.
            Lado a lado, desafios viram oportunidades e a esperança se torna ação.
            Somos parte de algo maior, e juntos, fazemos a diferença.
          </p>
          <figcaption className="text-2xl pl-20 text-left">
            Grupo <strong className="text-social-brand">Escoteiro</strong> Terra Da Saudade - 05/SP
          </figcaption>
        </figure>
        <div className="w-full text-center pt-4">
          <small className="text-social-gray">&copy; Todos direitos reservados</small>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
