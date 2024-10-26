import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';

function MainPersonalAddress() {
  return (
    <>
      <form className="flex flex-wrap gap-x-6 gap-y-14">
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
      </form>
      <div className="flex justify-end items-center gap-x-5">
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