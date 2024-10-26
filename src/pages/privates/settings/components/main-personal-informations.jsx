import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';

function MainPersonalInformations() {
  return (
    <>
      <form className="flex flex-wrap gap-x-6 gap-y-14">
        <Input 
          label="Nome completo" 
          placeholder="Digite seu nome completo"
          errorMessage="Qualquer mensagem"
        />
        <Input 
          label="CPF"
          placeholder="Digite seu cpf"
          errorMessage="Qualquer mensagem"
        />
        <Input 
          label="Data de Nascimento"
          placeholder="Digite sua data de nascimento"
          errorMessage="Qualquer mensagem"
        />
        <Input 
          label="Telefone Principal"
          placeholder="Digite seu telefone principal"
          errorMessage="Qualquer mensagem"
        />
        <Input 
          label="Telefone de Emergência"
          placeholder="Digite seu telefone de Emergência"
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

export { MainPersonalInformations };