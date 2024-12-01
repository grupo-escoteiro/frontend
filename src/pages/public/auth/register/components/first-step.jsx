import { Link } from 'react-router-dom';
import { Step } from '../../../../../components/step';
import { Container } from '../../../../../components/container';
import { Button } from '../../../../../components/button';
import { Checkbox } from './checkbox';
import boneco from '/bonecopipa.svg';
import { registerContext } from '../../../../../contexts/register-context';
import { useContext } from 'react';
import { EJourney } from '../../../../../helpers/enums/journey.js';
import { useTranslation } from 'react-i18next';

function FirstStep() {
  const { t } = useTranslation ();
  const {
    setJourney,
    journey,
    changeRegisterStep,
    stepsAmount,
    currentStep
  } = useContext(registerContext);

  return (
    <Container
      className="lg:grid lg:grid-cols-[1fr_3fr] gap-x-7 lg:max-w-[1024px]
                 md:max-w-[620px] md:grid md:grid-cols-1
                 max-w-[320px] grid grid-cols-1"
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
            {t('register.h1Cadastro')}
          </h1>
          <img src={boneco} />
        </div>
      </div>
      <div
        className="lg:py-16 lg:px-8 lg:gap-y-8 lg:flex lg:flex-col lg:items-center
                   md:py-16 md:px-8 md:gap-y-8 md:flex md:flex-col md:items-center
                   py-8 px-6 flex flex-col items-center gap-y-6"
      >
        <Step
          steps={stepsAmount}
          active={currentStep}
        />
        <div className="w-full">
          <h2
            className="lg:text-3xl text-social-brand font-semibold mb-3
                       md:text-3xl
                       text-2xl"
          >
            {t('register.h2Cadastro')}

          </h2>
          <strong className="font-semibold text-xl">
            {t('register.strongCadastro')}
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
                {t('register.labelCadastro')}

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
                {t('register.secondLabelCadastro')}

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
                {t('register.thirdLabelCadastro')}
              </label>
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
              {t('register.firstLink')}

            </Link>
            <Button
              variant="green"
              type="button"
              content={t('register.firstbuttom')}
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
              {t('register.secondLink')}
            </Link>
            <Button
              variant="green"
              type="button"
              content={t('register.secondButtom')}
              onClick={changeRegisterStep}
            />
          </fieldset>
        </form>
      </div>
    </Container>
  );
}

export { FirstStep };
