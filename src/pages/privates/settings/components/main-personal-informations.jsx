import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';

function MainPersonalInformations() {
  return (
    <>
      <form
        className="lg:flex lg:flex-wrap lg:gap-x-6 lg:gap-y-14
                   md:flex md:flex-wrap md:justify-between md:gap-x-6 md:gap-y-14"
      >
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
      <div
        className="lg:flex lg:justify-end lg:items-center lg:gap-x-5
                   md:flex md:justify-end md:items-center md:gap-x-5 md:py-16"
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

export { MainPersonalInformations };