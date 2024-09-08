import { SectionTitle } from '../../../../components/section-title';
import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';

function OurContact() {
  return (
    <section className="bg-light-social-blue py-16">
      <div className="max-w-[1160px] mx-auto">
        <SectionTitle 
          content="Contate-nos"
          className="mb-9"
        />
        <form className="grid grid-cols-2 gap-x-8 gap-y-6 box-content max-w-[1160px]">
          <Input 
            label="Nome"
            placeholder="Digite seu nome completo"
            errorMessage="Seu nome não é valido!"
          />
          <fieldset className="flex flex-col row-span-2">
            <label className="font-medium text-[16px] text-social-black">Mensagem</label>
            <textarea 
              className="my-2 rounded py-[20px] px-4 h-full
                         placeholder:font-regular placeholder:text-[16px] placeholder:text-social-gray
                         resize-none focus:outline-none"
              placeholder="Digite sua mensagem"
            >
            </textarea>
            <span className="text-social-red font-regular text-[16px]"></span>
          </fieldset>
          <Input 
            label="E-mail"
            placeholder="Digite seu e-mail"
            errorMessage="Seu e-mail está incorreto!"
          />
        </form>
        <div className="flex justify-end w-full gap-x-5 mt-10">
          <Button content="cancelar" />
          <Button 
            variant="green" 
            content="enviar"
          />
        </div>
      </div>
    </section>
  );
}

export { OurContact };