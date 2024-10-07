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
//import { useContext } from 'react';
//import { AuthContext } from '../../../../contexts/auth-context.jsx';
import { signInWithEmailAndPasswordAsync } from '../../../../services/firebase/auth.js';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

function Login() {
  //const { userLoggedIn } = useContext(AuthContext);

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
      toast.success('Usuário logado com sucesso!');
      navigate('/');
    } catch {
      toast.error('E-mail e/ou senha inválidos');
    }
  }

  return (
    <Container className="grid grid-cols-2 gap-x-7 w-[1160px]">
      <div
        className="text-social-white h-full w-full bg-no-repeat 
                     bg-cover bg-[url('/register-flow/box-side-background.png')]">
        <div
          className={`
            bg-no-repeat bg-[position:25px_225px] w-full h-full justify-evenly
            flex-col py-16 px-8 flex items-center bg-[url('/register-flow/login-image.svg')]
          `}
        >
          <p className="mb-16 text-xl text-social-white font-semibold">
            Requisitos para uma senha forte
          </p>
          <ul className="flex flex-col gap-y-4 max-w-80">
            <PasswordRule
              content="No mínimo 8 caracteres"
              hasError={errors.password?.message === ELoginErrorMessages.password.invalidMinLength}
            />
            <PasswordRule
              content="No mínimo 1 letra minúscula e 1 letra maiúscula"
              hasError={errors.password?.message === ELoginErrorMessages.password.shouldContainLowerAndUppercaseLetter}
            />
            <PasswordRule
              content="Pelo menos um caractere especial"
              hasError={errors.password?.message === 
                        ELoginErrorMessages.password.shouldContainAtLeastOneSpecialCharacter}
            />
            <PasswordRule
              content="No mínimo 1 caracteres numérico"
              hasError={errors.password?.message === ELoginErrorMessages.password.shouldContainerAtLeastOneNumber}
            />
          </ul>
        </div>
      </div>
      <div className="py-16 px-8">
        <div className="text-center mb-9">
          <div className="text-left">
            <Link
              to="/"
              className="text-social-red font-regular transition duration-500 
                           hover:brightness-50"
            >
              Voltar
            </Link>
          </div>
          <h1 className="text-4xl text-social-brand font-bold mb-3">Login</h1>
          <strong className="inline-flex items-center text-sm text-social-gray font-regular gap-x-2">
            <Flame />
            Venha com a gente nesta aventura
          </strong>
        </div>
        <form onSubmit={handleSubmit(handleUserLogin)} className="flex flex-col gap-y-6" id="login-form">
          <Input
            {...register('email')}
            label="E-mail"
            placeholder="Insira o seu e-mail aqui"
            errorMessage={errors.email?.message}
            name="email"
          />
          <Input
            {...register('password')}
            placeholder="*******"
            label="Senha"
            errorMessage={errors.password?.message}
            type="password"
            name="password"
          />
          <fieldset className="flex justify-end gap-x-5 items-center">
            <Link
              to="/autenticacao/cadastrar"
              className="uppercase font-regular 
                       text-social-brand italic underline transition 
                       duration-500 hover:brightness-50"
            >
              Cadastre-se
            </Link>
            <Button content="Enviar" variant="green" type="submit" form="login-form" />
          </fieldset>
        </form>
      </div>
    </Container>
  );
}

export { Login };
