import { Container } from '../../../../components/container';
import { Input } from '../../../../components/input';
import { Flame } from 'lucide-react';
import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from '../../../../helpers/login-validations-scheme.js';
import { PasswordRule } from './components/password-rule.jsx';
import { ELoginErrorMessages } from '../../../../helpers/enums/login-error-messages.js';
import { signInWithEmailAndPasswordAsync } from '../../../../services/firebase/auth.js';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../../../../components/page-transition/index.jsx';
import { useTranslation } from 'react-i18next';



function Login() {

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const navigate = useNavigate();

  async function handleUserLogin(data) {
    try {
      await signInWithEmailAndPasswordAsync(data.email, data.password);
      toast.success(t('login.loginSucess'));
      navigate('/');
    } catch {
      toast.error(t('login.loginError'));
    }
  }

  return (
    <PageTransition>
      <Container
        className="lg:grid lg:grid-cols-2 lg:gap-x-7 lg:max-w-[1024px]
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
              bg-no-repeat bg-[position:25px_225px] w-full h-full justify-evenly
              flex-col py-16 px-8 flex items-center bg-[url('/register-flow/login-image.svg')]
            `}
          >
            <p className="mb-16 text-xl text-social-white font-semibold">
              {t('login.strongPassword')}
            </p>
            <ul className="flex flex-col gap-y-4 max-w-80">
              <PasswordRule
                content={t('login.contentCaracteres')}
                hasError={errors.password?.message === ELoginErrorMessages.password.invalidMinLength}
              />
              <PasswordRule
                content={t('login.contentMinimal')}
                hasError={errors.password?.message ===
                  ELoginErrorMessages.password.shouldContainLowerAndUppercaseLetter
                }
              />
              <PasswordRule
                content={t('login.contentCaracterSpecial')}
                hasError={errors.password?.message ===
                  ELoginErrorMessages.password.shouldContainAtLeastOneSpecialCharacter}
              />
              <PasswordRule
                content={t('login.contentCaracterNumber')}
                hasError={errors.password?.message === ELoginErrorMessages.password.shouldContainerAtLeastOneNumber}
              />
            </ul>
          </div>
        </div>
        <div
          className="lg:py-16 lg:px-8
                     md:py-16 md:px-8
                     py-6 px-8"
        >
          <div className="text-center mb-9">
            <div className="text-left">
              <Link
                to="/"
                className="text-social-red font-regular transition duration-500
                            hover:brightness-50"
              >
                {t('login.voltar')}
              </Link>
            </div>
            <h1 className="text-4xl text-social-brand font-bold mb-3">{t('login.h1Login')}</h1>
            <strong className="inline-flex items-center text-sm text-social-gray font-regular gap-x-2">
              <Flame />
              {t('login.strong')}
            </strong>
          </div>
          <form onSubmit={handleSubmit(handleUserLogin)} className="flex flex-col gap-y-6" id="login-form">
            <Input
              {...register('email')}
              label={t('login.firstLabel')}
              placeholder={t('login.firstPlace')}
              errorMessage={errors.email?.message}
              name="email"
            />
            <Input
              {...register('password')}
              placeholder={t('login.secondPlace')}
              label={t('login.secondLabel')}
              errorMessage={errors.password?.message}
              type="password"
              name="password"
            />
            <fieldset
              className="lg:flex lg:justify-end lg:gap-x-5 lg:items-center
                         md:flex md:justify-end md:gap-x-5 md:items-center
                         hidden"
            >
              <Link
                to="/autenticacao/cadastrar"
                className="uppercase font-regular
                        text-social-brand italic underline transition
                        duration-500 hover:brightness-50"
              >
                {t('login.linkCadastro')}
              </Link>
              <Button content="Enviar" variant="green" type="submit" form="login-form" />
            </fieldset>
            <fieldset
              className="lg:hidden
                         md:hidden
                         flex flex-col-reverse gap-y-4 justify-center items-center"
            >
              <Link
                to="/autenticacao/cadastrar"
                className="uppercase font-regular
                        text-social-brand italic underline transition
                        duration-500 hover:brightness-50"
              >
                {t('login.secondLinkCadastro')}
              </Link>
              <Button content="Enviar" variant="green" type="submit" form="login-form" />
            </fieldset>
          </form>
        </div>
      </Container>
    </PageTransition>
  );
}

export { Login };
