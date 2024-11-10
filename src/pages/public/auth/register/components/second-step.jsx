import { Button } from '../../../../../components/button';
import { Container } from '../../../../../components/container';
import { Step } from '../../../../../components/step';
import { Link } from 'react-router-dom';
import boneco from '/bonecopipa.svg';
import { useContext } from 'react';
import { registerContext } from '../../../../../contexts/register-context';

function SecondStep() {
  const {
    stepsAmount,
    currentStep,
    changeRegisterStep
  } = useContext(registerContext);

  return (
    <Container
      className="lg:grid lg:grid-cols-[1fr_3fr] lg:gap-x-7 lg:max-w-[1024px]
                 md:grid md:grid-cols-1 md:gap-x-7 md:max-w-[620px]
                 grid grid-cols-1 gap-x-7 max-w-[320px]"
    >
      <div
        className="lg:inline-block lg:text-social-white lg:h-full lg:w-full lg:bg-no-repeat
                   lg:bg-cover lg:bg-[url('/register-flow/box-side-background.png')]
                   md:hidden
                   hidden"
      >
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
      <div
        className="lg:py-16 px-8 gap-y-8 flex flex-col items-center
                   md:py-16
                   py-8"
      >
        <Step
          steps={stepsAmount}
          active={currentStep}
        />
        <form className="w-full max-w-3xl">
          <fieldset
            className="grid lg:grid-cols-2 gap-x-6 gap-y-6 pb-8
                       md:grid-cols-2
                       grid-cols-1"
          >
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="name"
                className="font-semibold"
              >
                Nome completo
              </label>
              <input
                type="text"
                name="nome"
                id="name"
                placeholder="Digite o nome do responsável"
                className="w-full h-16 px-5 py-5 rounded border border-social-gray"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="cpf"
                className="font-semibold"
              >
                CPF
              </label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                placeholder="Digite seu cpf"
                className="w-full h-16 px-5 py-5 rounded border border-social-gray"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="data"
                className="font-semibold"
              >
                    Data de nascimento
              </label>
              <input
                type="date"
                name="data"
                id="data"
                className="w-full h-16 px-5 py-5 rounded border border-social-gray"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="telefone"
                className="font-semibold"
              >
                    Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                id="telefone"
                placeholder="(xx) xxxxx-xxxx"
                className="w-full h-16 px-5 py-5 rounded border border-social-gray"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="telefone-emer"
                className="font-semibold"
              >
                    Telefone de emergência
              </label>
              <input
                type="tel"
                name="telefone-emergencia"
                id="telefone-emer"
                placeholder="(xx) xxxxx-xxxx"
                className="w-full h-16 px-5 py-5 rounded border border-social-gray"
              />
            </div>
          </fieldset>
          <fieldset
            className="lg:flex lg:items-center lg:justify-end lg:gap-x-6
                       md:flex md:items-center md:justify-end md:gap-x-6
                       hidden"
          >
            <Link
              to="/"
              className="text-social-red font-regular transition duration-500
                            hover:brightness-50"
            >
              Voltar
            </Link>
            <Button
              variant="green"
              type="button"
              content="Próximo"
              onClick={changeRegisterStep}
            />
          </fieldset>
          <fieldset
            className="lg:hidden
                       md:hidden
                       flex flex-col-reverse items-center justify-center gap-y-6"
          >
            <Link
              to="/"
              className="text-social-red font-regular transition duration-500
                            hover:brightness-50"
            >
              Voltar
            </Link>
            <Button
              variant="green"
              type="button"
              content="Próximo"
              onClick={changeRegisterStep}
            />
          </fieldset>
        </form>
      </div>
    </Container>
  );
}

export { SecondStep };
