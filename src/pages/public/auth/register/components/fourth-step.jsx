import { Container } from '../../../../../components/container';
import { Step } from '../../../../../components/step';
import { Button } from '../../../../../components/button';
import { Link } from 'react-router-dom';
import boneco from '/bonecopipa.svg';
import { useContext } from 'react';
import { registerContext } from '../../../../../contexts/register-context';
import { EJourney } from '../../../../../helpers/enums/journey';
import { useTranslation } from 'react-i18next';

function FourthStep() {
  const { t } = useTranslation ();

  const {
    stepsAmount,
    currentStep,
    journey,
    changeRegisterStep,
    register
  } = useContext(registerContext);

  return (
    <Container
      className="lg:grid lg:grid-cols-[1fr_3fr] lg:gap-x-7 lg:max-w-[1024px]
                 md:grid md:grid-cols-1 md:gap-x-7 md:max-w-[620px]
                 grid grid-cols-1 gap-x-7 max-w-[320px]"
    >
      <div
        className="lg:inline-block lg:text-social-white lg:w-full lg:h-full lg:bg-no-repeat
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
            {t('register.fourthStepH1')}
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
          <fieldset className="grid grid-cols-1 gap-x-6 gap-y-6 pb-8">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="email"
                className="font-semibold"
              >
                {t('register.fourthStepFirstCadastro')}
              </label>
              <input
                type="email"
                name="email"
                id={t('register.fourthStepFirstPlace')}
                placeholder="seuemail@gmail.com"
                className="w-full h-16 px-4 py-2 rounded border border-social-gray"
              />
            </div>
          </fieldset>
          <fieldset
            className="grid lg:grid-cols-2 gap-x-6 gap-y-6 pb-8
                       md:grid-cols-2
                       grid-cols-1"
          >
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="senha"
                className="font-semibold"
              >
                {t('register.fourthStepSecondCadastro')}
              </label>
              <input
                type="password"
                name="password"
                id="senha"
                placeholder={t('register.fourthStepSecondPlace')}
                className="w-full h-16 px-4 py-2 rounded border border-social-gray"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="confirm-password"
                className="font-semibold"
              >
                {t('register.fourthStepThirdCadastro')}
              </label>
              <input
                type="password"
                name="passwordConfirmation"
                id="confirm-password"
                placeholder={t('register.fourthStepThirdPlace')}
                className="w-full h-16 px-4 py-2 rounded border border-social-gray"
              />
            </div>
          </fieldset>
          <fieldset
            className="lg:flex lg:justify-end lg:items-center lg:gap-x-6 lg:mt-5
                       md:flex md:justify-end md:items-center md:gap-x-6 md:mt-5
                       hidden"
          >
            <Link
              to="/"
              className="text-social-red font-regular transition duration-500
                            hover:brightness-50"
            >
              {t('register.fourthStepFirstLink')}
            </Link>
            <Button
              variant="green"
              type={journey === EJourney.voluntary ? 'submit' : 'button'}
              content={journey === EJourney.voluntary ? t('register.fourthStepFirstButtom')
                : t('register.fourthStepFirstContentButtom')}
              onClick={journey === EJourney.voluntary ? null : changeRegisterStep}
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
              {t('register.fourthStepSecondLink')}
            </Link>
            <Button
              variant="green"
              type={journey === EJourney.voluntary ? 'submit' : 'button'}
              content={journey === EJourney.voluntary ? t('register.fourthStepSecondtButtom') 
                : t('register.fourthStepSecondContentButtom')}
              onClick={journey === EJourney.voluntary ? null : changeRegisterStep}
            />
          </fieldset>
        </form>
      </div>
    </Container>
  );
}

export { FourthStep };
