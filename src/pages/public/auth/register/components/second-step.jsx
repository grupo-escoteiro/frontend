import { Container } from '../../../../../components/container';
import { PageTransition } from '../../../../../components/page-transition';
import { Step } from '../../../../../components/step';
import boneco from '/bonecopipa.svg';

function SecondStep() {
  return (
    <PageTransition>
      <Container className="grid grid-cols-[1fr_3fr] gap-x-7 w-[1160px]">
        <div
          className="text-social-white h-full w-full bg-no-repeat
                      bg-cover bg-[url('/register-flow/box-side-background.png')]">
          <div
            className={`
              w-full h-full justify-evenly flex-col py-16 px-8 flex items-center
            `}
          >
            <h1 className="mb-16 text-xl text-social-white font-semibold">
              Faça seu cadastro
            </h1>
            <img src={boneco} />
          </div>
        </div>
        <div className="py-16 px-8 gap-y-8 flex flex-col items-center">
          <Step
            steps={4}
            active={2}
          />
          <div className="w-full">
            <form className="grid grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  id="name"
                  placeholder="Digite seu nome completo"
                  className=""
                /> 
              </div>
              <div className="flex flex-col">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  name="cpf"
                  id="cpf"
                  placeholder="000.000.000-00"
                  className=""
                />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}

export { SecondStep };