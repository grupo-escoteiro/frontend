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
                        className="w-[95px] h-[95px]"
                        src={logo}
                        alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
                    />
                    <caption className="text-left max-w-44">
                        Grupo
                        <strong className="text-social-brand">Escoteiro</strong>
                        Terra Da Saudade - 05/SP
                    </caption>
                </figure>
                <menu>
                    <ul className="flex gap-4">
                        <li>
                            <AnimatedLink text={"Home"} />
                        </li>
                        <li>
                            <a
                                className="no-underline"
                                href="#"
                                target="_self"
                                rel="next noopener noreferrer follow"
                            >
                                Ramos
                            </a>
                        </li>
                        <li>
                            <a
                                className="no-underline"
                                href="#"
                                target="_self"
                                rel="next noopener noreferrer follow"
                            >
                                Galeria
                            </a>
                        </li>
                        <li>
                            <a
                                className="no-underline"
                                href="#"
                                target="_self"
                                rel="next noopener noreferrer follow"
                            >
                                Nossas atividades
                            </a>
                        </li>
                        <li>
                            <a
                                className="no-underline"
                                href="#"
                                target="_self"
                                rel="next noopener noreferrer follow"
                            >
                                Login
                            </a>
                        </li>
                    </ul>
                </menu>
            </div>
        </header>
    );
}

export { Header };
