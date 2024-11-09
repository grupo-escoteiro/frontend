import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';

function MainPersonalInformations() {
  return (
    <>
      <form
        className="lg:flex lg:flex-wrap lg:gap-x-6 lg:gap-y-14
                   md:flex md:flex-wrap md:justify-between md:gap-x-6 md:gap-y-14
                   flex flex-col"
      >
        <fieldset
          className="lg:hidden
                     md:hidden
                     flex flex-col px-6 py-14 gap-y-14"
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
        </fieldset>
        <fieldset
          className="lg:flex lg:justify-between lg:w-full
                     md:hidden
                     hidden"
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
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:flex md:justify-between md:w-full
                     hidden"
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
        </fieldset>
        <fieldset
          className="lg:flex lg:flex-row lg:gap-x-6
                     md:hidden
                     hidden"
        >
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
        </fieldset>
        <fieldset
          className="lg:hidden
                     md:flex md:flex-wrap md:justify-between md:gap-y-14
                     hidden"
        >
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

export { MainPersonalInformations };