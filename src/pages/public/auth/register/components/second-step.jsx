import { Button } from '../../../../../components/button';
import { Container } from '../../../../../components/container';
import { Step } from '../../../../../components/step';
import { Link } from 'react-router-dom';
import boneco from '/bonecopipa.svg';
import { useContext } from 'react';
import { registerContext } from '../../../../../contexts/register-context';
import { useTranslation } from 'react-i18next';

function SecondStep() {

  const { t } = useTranslation();
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
            {t('register.thirdthdH1')}
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
                {t('register.firsthCadastro')}
              </label>
              <input
                type="text"
                name="nome"
                id="name"
                placeholder={t('register.firsthPlace')}
                className="w-full h-16 px-5 py-5 rounded border border-social-gray
                dark:bg-dark-social-background dark:text-dark-social-white"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="cpf"
                className="font-semibold"
              >
                {t('register.secondthCadastro')}
              </label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                placeholder={t('register.secondthPlace')}
                className="w-full h-16 px-5 py-5 rounded border border-social-gray
                dark:bg-dark-social-background dark:text-dark-social-white"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="data"
                className="font-semibold"
              >
                {t('register.thirdthCadastro')}
              </label>
              <input
                type="date"
                name="data"
                id="data"
                className="w-full h-16 px-5 py-5 rounded border border-social-gray
                dark:bg-dark-social-background dark:text-dark-social-white"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="telefone"
                className="font-semibold"
              >
                {t('register.fourthCadastro')}
              </label>
              <input
                type="tel"
                name="telefone"
                id="telefone"
                placeholder={t('register.fourPlace')}
                className="w-full h-16 px-5 py-5 rounded border border-social-gray
                dark:bg-dark-social-background dark:text-dark-social-white"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="telefone-emer"
                className="font-semibold"
              >
                {t('register.fifithCadastro')}
              </label>
              <input
                type="tel"
                name="telefone-emergencia"
                id="telefone-emer"
                placeholder={t('register.fifitPlace')}
                className="w-full h-16 px-5 py-5 rounded border border-social-gray
                dark:bg-dark-social-background dark:text-dark-social-white"
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
              {t('register.fifithLink')}
            </Link>
            <Button
              variant="green"
              type="button"
              content={t('register.fifithButtom')}
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
              {t('register.sixthLink')}
            </Link>
            <Button
              variant="green"
              type="button"
              content={t('register.sixthButtom')}
              onClick={changeRegisterStep}
            />
          </fieldset>
        </form>
      </div>
    </Container>
  );
}

export { SecondStep };
