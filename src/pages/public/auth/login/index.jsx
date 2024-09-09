import { Container } from '../../../../components/container';
import { Input } from '../../../../components/input';
import { Flame } from 'lucide-react';
import boxSideBackground from '../../../../../public/register-flow/box-side-background.png';

function Login() {
  return (
    <Container
      className={`
        grid grid-cols-2 gap-x-7
      `}
    >
      <div className="text-social-white relative h-full w-full">
        <img
          src={boxSideBackground}
          alt=""
          aria-hidden={true}
          className="absolute inset-0"
        />
        <div className="">
          <p>Requisitos para uma senha forte</p>
        </div>
      </div>
      <div>
        <div className="text-center mb-9">
          <h1 className="text-4xl text-social-brand font-bold mb-3">Login</h1>
          <strong className="inline-flex items-center text-sm text-social-gray font-regular">
            <Flame />
            Venha com a gente nesta aventura
          </strong>
        </div>
        <form>
          <Input
            label="E-mail"
            placeholder="Insira o seu e-mail aqui"
          />
          <Input
            placeholder="*******"
            label="Senha"
          />
        </form>
      </div>
    </Container>
  );
}

export { Login };
