import { Container } from '../../../../../components/container';
import { PageTransition } from '../../../../../components/page-transition';
import { Step } from '../../../../../components/step';
import { Button } from '../../../../../components/button';
import { Link } from 'react-router-dom';
import boneco from '/bonecopipa.svg';

function FourthStep() {
  return (
    <PageTransition>
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
            <h1 className="mb-16 text-xl text-social-white font-semibold">
              Faça seu cadastro
            </h1>
            <img src={boneco} alt="Ilustração" />
          </div>
        </div>
        <div className="py-16 px-8 gap-y-8 flex flex-col items-center">
          <Step 
            steps={4}
            active={4}
          />
          <form className="w-full max-w-3xl">
            <fieldset className="grid grid-cols-1 gap-x-6 gap-y-6 pb-8">
              <div className="flex flex-col gap-y-2">
                <label 
                  htmlFor="email"
                  className="font-semibold"
                >
                    E-mail
                </label>
                <input 
                  type="email"
                  name="email"
                  id="email"
                  placeholder="seuemail@gmail.com"
                  className="w-full h-16 px-4 py-2 rounded border border-social-gray"
                />
              </div>
            </fieldset>
            <fieldset className="grid grid-cols-2 gap-x-6 gap-y-6 pb-8">
              <div className="flex flex-col gap-y-2">
                <label 
                  htmlFor="senha"
                  className="font-semibold"
                >
                  Senha
                </label>
                <input 
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="Digite sua senha"
                  className="w-full h-16 px-4 py-2 rounded border border-social-gray"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label 
                  htmlFor="confirm-password"
                  className="font-semibold"
                >
                  Confirmação de senha
                </label>
                <input 
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Confirme sua senha"
                  className="w-full h-16 px-4 py-2 rounded border border-social-gray"
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
                type="submit"
                content="Cadastrar"
              />
            </fieldset>
          </form>
        </div>
      </Container>
    </PageTransition>
  );
}

export { FourthStep };