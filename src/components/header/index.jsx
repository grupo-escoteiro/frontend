function Header() {
    return (
        <header className="w-full h-[156px] bg-[#E2F0E1]">
            <div className="px-[188px] py-[28px] flex justify-between items-center">
                <div className="flex gap-[16px] items-center">
                    <img
                        className="w-[95px] h-[98px]"
                        src="./src/img/logoterrasaudade.svg" 
                        alt="Logo do grupo escoteiro terra da saudade"
                    />
                    <p className="text-base">
                        Grupo <span className="text-[#059A00] font-medium">Escoteiro</span> Terra Da <br></br>Saudade - 05/SP
                    </p>
                </div>
                <menu className="flex justify-end">
                    <ul className="flex gap-[16px]">
                        <li>
                            <a 
                                className="no-underline text-[#059A00] font-medium"
                                href="#" 
                                alt="Link da página Home"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="no-underline"
                                href="#"
                                alt="Link da página Ramos"
                            >
                                Ramos
                            </a>
                        </li>
                        <li>
                            <a
                                className="no-underline"
                                href="#"
                                alt="Link da página de Galeria"
                            >
                                Galeria
                            </a>
                        </li>
                        <li>
                            <a
                                className="no-underline"
                                href="#"
                                alt="Link da página de Nossas Atividades"
                            >
                                Nossas atividades
                            </a>
                        </li>
                        <li>
                            <a
                                className="no-underline"
                                href="#"
                                alt="Link da página de Login"
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