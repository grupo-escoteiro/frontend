import { Link } from 'react-router-dom';
import { Step } from '../../../../../components/step';
import { Container } from '../../../../../components/container';
import { Button } from '../../../../../components/button';
import { Checkbox } from './checkbox';
import boneco from '/bonecopipa.svg';
import { registerContext } from '../../../../../contexts/register-context';
import { useContext } from 'react';
import { EJourney } from '../../../../../helpers/enums/journey.js';

function FirstStep() {
  const {
    setJourney,
    journey,
    changeRegisterStep,
    stepsAmount,
    currentStep
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
          <h1 className="mb-16 text-xl text-social-white font-semibold">
              Faça seu cadastro
          </h1>
          <img src={boneco} />
        </div>
      </div>
      <div className="py-16 px-8 gap-y-8 flex flex-col items-center">
        <Step
          steps={stepsAmount}
          active={currentStep}
        />
        <div className="w-full">
          <h2
            className="text-3xl text-social-brand font-semibold
                      mb-3"
          >
            Aqui você irá decidir o rumo da sua jornada!
          </h2>
          <strong className="font-semibold text-xl">
              Escolha qual caminho quer seguir
          </strong>
        </div>
        <form className="flex flex-col gap-y-16 w-full">
          <fieldset className="flex flex-col gap-y-7">
            <div className="flex items-center gap-x-4">
              <div>
                <input
                  type="radio"
                  name="journey"
                  id="first-choice"
                  checked={journey === EJourney.responsible ? true : false}
                  className="sr-only"
                  value={EJourney.responsible}
                  onChange={e => setJourney(+e.target.value)}
                />
                <Checkbox checked={journey === EJourney.responsible ? true : false} />
              </div>
              <label
                htmlFor="first-choice"
                className="text-base font-normal cursor-pointer"
              >
                  Desejo ser o responsável pelo novo escoteiro
              </label>
            </div>
            <div className="flex items-center gap-x-4">
              <div>
                <input
                  type="radio"
                  name="journey"
                  id="second-choice"
                  checked={journey === EJourney.voluntary ? true : false}
                  className="sr-only"
                  value={EJourney.voluntary}
                  onChange={e => setJourney(+e.target.value)}
                />
                <Checkbox checked={journey === EJourney.voluntary ? true : false} />
              </div>
              <label
                htmlFor="second-choice"
                className="text-base font-normal cursor-pointer"
              >
                  Estou aqui para ser voluntário
              </label>
            </div>
            <div className="flex items-center gap-x-4">
              <div>
                <input
                  type="radio"
                  name="journey"
                  id="third-choice"
                  checked={journey === EJourney.both ? true : false}
                  className="sr-only"
                  value={EJourney.both}
                  onChange={e => setJourney(+e.target.value)}
                />
                <Checkbox checked={journey === EJourney.both ? true : false} />
              </div>
              <label
                htmlFor="third-choice"
                className="text-base font-normal cursor-pointer"
              >
                  Meu destino é grandioso: serei voluntário e responsável
              </label>
            </div>
          </fieldset>
          <fieldset className="flex items-center self-end gap-x-6">
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

export { FirstStep };
