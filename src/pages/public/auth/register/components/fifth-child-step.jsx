import { Container } from '../../../../../components/container';
import { Button } from '../../../../../components/button';
import { Step } from '../../../../../components/step';
import { Link } from 'react-router-dom';
import boneco from '/bonecopipa.svg';
import { useContext } from 'react';
import { registerContext } from '../../../../../contexts/register-context';

function FifthChildStep() {
  const {
    stepsAmount,
    currentStep,
    changeRegisterStep
  } = useContext(registerContext);

  return (
    <Container className="grid grid-cols-[1fr_3fr] gap-x-7 w-[1160px]">
      <div
        className="text-social-white h-full w-full bg-no-repeat
                      bg-cover bg-[url('/register-flow/box-side-background.png')]">
        <div
          className={`
              w-full h-full justify-evenly flex-col py-16 px-8 flex items-center
            `}
        >
          <h1 className="mb-16 text-xl text-social-white font-semibold text-center">
              Agora cadastre o seu grande escoteiro
          </h1>
          <img src={boneco} />
        </div>
      </div>
      <div className="py-16 px-8 gap-y-8 flex flex-col items-center">
        <Step
          steps={stepsAmount}
          active={currentStep}
        />
        <form className="w-full max-w-3xl">
          <fieldset className="grid grid-cols-2 gap-x-6 gap-y-6 pb-8">
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
                placeholder="Digite seu nome completo"
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
          <fieldset className="flex justify-end items-center gap-x-6 mt-5">
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

export { FifthChildStep };
