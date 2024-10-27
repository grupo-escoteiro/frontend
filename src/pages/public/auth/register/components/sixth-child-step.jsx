import { Container } from '../../../../../components/container';
import { Button } from '../../../../../components/button';
import { Step } from '../../../../../components/step';
import { Link } from 'react-router-dom';
import boneco from '/bonecopipa.svg';
import { useContext } from 'react';
import { registerContext } from '../../../../../contexts/register-context';

function SixthChildStep() {
  const {
    stepsAmount,
    currentStep,
    register
  } = useContext(registerContext);

  return (
    <Container className="grid grid-cols-[1fr_3fr] gap-x-7 w-[1160px]">
      <div
        className="text-social-white w-full h-full bg-no-repeat
                       bg-cover bg-[url('/register-flow/box-side-background.png')]"
      >
        <div
          className={`
              w-full h-full justify-evenly flex-col py-16 px-8 flex items-center
            `}
        >
          <h1 className="mb-16 text-xl text-social-white font-semibold text-center">
              Agora cadastre o seu grande escoteiro
          </h1>
          <img src={boneco} alt="Ilustração" />
        </div>
      </div>
      <div className="py-16 px-8 gap-y-8 flex flex-col items-center">
        <Step
          steps={stepsAmount}
          active={currentStep}
        />
        <form
          className="w-full max-w-3xl"
          onSubmit={register}
        >
          <fieldset className="grid grid-cols-2 gap-x-6 gap-y-6 pb-8">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="cep"
                className="font-semibold"
              >
                    CEP
              </label>
              <input
                type="text"
                name="cep"
                id="cep"
                placeholder="xxxxx-xxx"
                className="w-full h-16 px-4 py-2 rounded border border-social-gray"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="rua"
                className="font-semibold"
              >
                Rua
              </label>
              <input
                type="text"
                name="rua"
                id="rua"
                placeholder="Digite sua rua"
                className="w-full h-16 px-4 py-2 rounded border border-social-gray"
              />
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-3 gap-x-6 gap-y-6 pb-8">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="bairro"
                className="font-semibold"
              >
                  Bairro
              </label>
              <input
                type="text"
                name="bairro"
                id="bairro"
                placeholder="Digite seu bairro"
                className="w-full h-16 px-4 py-2 rounded border border-social-gray"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="cidade"
                className="font-semibold"
              >
                  Cidade
              </label>
              <input
                type="text"
                name="cidade"
                id="cidade"
                placeholder="Digite sua cidade"
                className="w-full h-16 px-4 py-2 rounded border border-social-gray"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="estado"
                className="font-semibold"
              >
                  Estado
              </label>
              <select id="estado" className="w-full h-16 px-4 py-2 rounded border border-social-gray">
                <option>SP</option>
                <option>RJ</option>
                <option>AM</option>
              </select>
            </div>
          </fieldset>
          <fieldset className="flex flex-col gap-y-2 pb-8">
            <label
              htmlFor="complemento"
              className="font-semibold"
            >
                    Complemento
            </label>
            <input
              type="text"
              name="complemento"
              id="complemento"
              placeholder="Escreva seu complemento"
              className="w-full h-16 px-4 py-2 rounded border border-social-gray"
            />
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
              type="submit"
              content="Cadastrar"
            />
          </fieldset>
        </form>
      </div>
    </Container>
  );
}

export { SixthChildStep };
