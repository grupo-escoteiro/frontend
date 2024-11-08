import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';

function MainPersonalAddress() {
  return (
    <>
      <form className="flex flex-wrap gap-x-6 gap-y-14">
        <fieldset
          className="lg:hidden
                     md:hidden
                     flex flex-col px-6 py-14 gap-y-14"
        >
          <Input
            label="CEP"
            placeholder="Digite seu CEP"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Numero"
            placeholder="Digite o Numero de sua residencia"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Estado"
            placeholder="Digite seu Estado"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Cidade"
            placeholder="Digite sua Cidade"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Rua"
            placeholder="Digite sua Rua"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Bairro"
            placeholder="Digite seu Bairro"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Complemtento"
            placeholder="Digite um Complemento"
            errorMessage="Qualquer mensagem"
          />
        </fieldset>
        <fieldset
          className="lg:flex lg:gap-x-6
                     md:hidden
                     hidden"
        >
          <Input
            label="CEP"
            placeholder="Digite seu CEP"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Numero"
            placeholder="Digite o Numero de sua residencia"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Estado"
            placeholder="Digite seu Estado"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Cidade"
            placeholder="Digite sua Cidade"
            errorMessage="Qualquer mensagem"
          />
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:flex md:justify-between md:w-full
                     hidden"
        >
          <Input
            label="CEP"
            placeholder="Digite seu CEP"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Numero"
            placeholder="Digite o Numero de sua residencia"
            errorMessage="Qualquer mensagem"
          />
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:flex md:justify-between md:w-full
                     hidden"
        >
          <Input
            label="Estado"
            placeholder="Digite seu Estado"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Cidade"
            placeholder="Digite sua Cidade"
            errorMessage="Qualquer mensagem"
          />
        </fieldset>
        <fieldset
          className="lg:flex lg:gap-x-6
                     md:hidden
                     hidden"
        >
          <Input
            label="Rua"
            placeholder="Digite sua Rua"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Bairro"
            placeholder="Digite seu Bairro"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Complemtento"
            placeholder="Digite um Complemento"
            errorMessage="Qualquer mensagem"
          />
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:flex md:justify-between md:w-full
                     hidden"
        >
          <Input
            label="Rua"
            placeholder="Digite sua Rua"
            errorMessage="Qualquer mensagem"
          />
          <Input
            label="Bairro"
            placeholder="Digite seu Bairro"
            errorMessage="Qualquer mensagem"
          />
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:inline-block
                     hidden"
        >
          <Input
            label="Complemtento"
            placeholder="Digite um Complemento"
            errorMessage="Qualquer mensagem"
          />
        </fieldset>
      </form>
      <div
        className="lg:flex lg:justify-end lg:items-center lg:gap-x-5 lg:pb-0
                   md:flex md:justify-end md:items-center md:gap-x-5 md:py-16
                   hidden"
      >
        <Link className="text-social-red transition duration-500 hover:brightness-50">
          Voltar
        </Link>
        <Button
          type="submit"
          variant="green"
          content="Atualizar"
        />
      </div>
      <div
        className="lg:hidden
                   md:hidden
                   flex flex-col-reverse items-center justify-center pb-16 gap-y-4"
      >
        <Link className="text-social-red transition duration-500 hover:brightness-50">
          Voltar
        </Link>
        <Button
          type="submit"
          variant="green"
          content="Atualizar"
        />
      </div>
    </>
  );
}

export { MainPersonalAddress };