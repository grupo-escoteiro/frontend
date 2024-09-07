import logo from '../../../public/logo.svg';
import { AnimatedLink } from './components/AnimatedLink';

function Header() {
  return (
    <header className="w-full bg-light-social-brand">
      <div className="px-48 py-7 flex justify-between items-center">
        <figure
          className="flex gap-4 items-center cursor-pointer"
          title="Voltar à home"
          aria-label="Voltar à página inicial do Grupo Escoteiro Terra Da Saudade"
        >
          <img
            className="w-24 h-24"
            src={logo}
            alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
          />
          <figcaption className="text-left max-w-44">
            Grupo
            <strong className="text-social-brand">Escoteiro</strong>
              Terra Da Saudade - 05/SP
          </figcaption>
        </figure>
        <nav>
          <ul className="flex gap-4">
            <li>
              <AnimatedLink
                text={'Home'}
                to="/"
              />
            </li>
            <li>
              <AnimatedLink
                to="/ramos"
                text={'Ramos'}
              />
            </li>
            <li>
              <AnimatedLink
                to="/galeria"
                text={'Galeria'}
              />
            </li>
            <li>
              <AnimatedLink
                to="/autenticacao/login"
                text={'Login'}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
