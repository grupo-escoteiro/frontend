function Header() {
    return (
        <header className="w-full h-[156px] bg-[#E2F0E1]">
            <div className="px-[188px] py-[28px] flex justify-between items-center">
                <figure 
                    className="flex gap-[16px] items-center"
                    title="Voltar à home"
                    ariaLabel="Voltar à página inicial do Grupo Escoteiro Terra Da Saudade"
                >
                    <img
                        className="w-[95px] h-[98px]"
                        src="./src/img/logoterrasaudade.svg" 
                        alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
                    />
                    <caption className="text-left max-w-[180px]">
                        Grupo <strong className="text-[#059A00]">Escoteiro</strong> Terra Da Saudade - 05/SP
                    </caption>
                </figure>
                <menu className="flex justify-end">
                    <ul className="flex gap-[16px]">
                        <li>
                            <a 
                                className="no-underline text-[#059A00] font-medium"
                                href="#" 
                                target="_self"
                                rel="next noopener noreferrer follow"
                            >
                                Home
                            </a>
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