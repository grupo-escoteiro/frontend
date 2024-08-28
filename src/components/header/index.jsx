function Header() {
    return (
        <header className="w-full h-[156px] bg-[#E2F0E1]">
            <div className="py-[28px] px-[188px] flex">
                <img
                    className="w-[95px] h-[98px]"
                    src="./src/img/logoterrasaudade.svg" 
                    alt="Logo do grupo escoteiro terra da saudade">
                </img>
                <p className="text-base py-[28px] px-[16px]">
                    Grupo <span className="text-[#059A00] font-medium">Escoteiro</span> Terra Da <br></br>Saudade - 05/SP
                </p>
                {/* Links */}
                <div className="absolute right-20 py-[28px] max-w-full">
                    <div className="flex gap-[16px]">
                        <a 
                            href="#" 
                            alt="Link da página Home"
                        >
                            <span className="text-[#059A00] border-b-2 border-green-600">Home</span>
                        </a>
                        <a 
                            href="#"
                            alt="Link da página Ramos"
                        >
                            Ramos
                        </a>
                        <a 
                            href="#"
                            alt="Link da página de Galeria"
                        >
                            Galeria
                        </a>
                        <a 
                            href="#"
                            alt="Link da página de Nossas Atividades"
                        >
                            Nossas atividades
                        </a>
                        <a 
                            href="#"
                            alt="Link da página de Login"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export { Header };