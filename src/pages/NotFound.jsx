import { PageTransition } from '../components/page-transition';

import notFound from '/not-found.svg';
import { AnimatedLink } from '../components/header/components/AnimatedLink';

function NotFound() {
  return (
    <PageTransition>
      <main
        className={`
          grid place-items-center h-screen w-screen py-16
          bg-light-social-brand
        `}
      >
        <div
          className="lg:max-w-[1024px] lg:mx-auto
                     md:max-w-[620px] md:mx-auto
                     max-w-[320px] mx-auto">
          <div className="text-social-black">
            <h1 className="text-social-brand font-bold text-5xl mb-4">
              Ops!! Parece que você foi explorar além dos limites permitidos!!
            </h1>
            <p className="text-xl text-social-black">
              Acho que é melhor retornar antes que anoiteça, este caminho fica
              perigoso com o tempo!
            </p>
            <AnimatedLink
              to='/'
              className="text-social-brand font-bold text-xl before:bg-social-brand"
              text={'Siga suas pegadas de volta ao seu caminho'}
              title="Voltar a página inicial"
              replace
            />
          </div>
          <img
            src={notFound}
            alt="Menina explorando com um binóculo na mão e uma placa ao fundo escrito 404"
            className="h-[700px]"
          />
        </div>
      </main>
    </PageTransition>
  );
}

export { NotFound };
