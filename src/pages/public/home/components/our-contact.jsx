import { SectionTitle } from '../../../../components/section-title';
import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactUsFormScheme } from '../../../../helpers/contact-us-validations-scheme.js';

function OurContact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactUsFormScheme),
    defaultValues: {
      email: '',
      name: '',
      content: ''
    }
  })

  function handleContactSubmit(data) {
    console.log(data);
  }

  return (
    <section className="bg-light-social-blue py-16">
      <div className="max-w-[1160px] mx-auto">
        <SectionTitle
          content="Contate-nos"
          className="mb-9"
        />
        <form
          id="contact-form"
          className="grid grid-cols-2 gap-x-8 gap-y-6 box-content max-w-[1160px]"
          onSubmit={handleSubmit(handleContactSubmit)}
        >
          <Input
            {...register('name')}
            label="Nome"
            placeholder="Digite seu nome completo"
            errorMessage={errors.name?.message}
            name="name"
          />
          <fieldset className="flex flex-col row-span-2">
            <label className="font-medium text-[16px] text-social-black">Mensagem</label>
            <textarea
              {...register('content')}
              className={`
                my-2 rounded py-5 px-4 h-full
                placeholder:font-regular placeholder:text-sm placeholder:text-social-gray
                resize-none focus:outline-none
                ${!errors.content?.message
                  ? 'border border-solid border-social-gray text-social-gray'
                  : errors.content?.message
                    ? 'border border-solid border-social-red text-social-red'
                    : 'border border-solid border-social-brand text-social-brand'
                }
              `}
              placeholder="Digite sua mensagem"
            />
            {errors.content && (
              <span className="text-social-red font-regular text-sm">
                {errors.content.message}
              </span>
            )}
          </fieldset>
          <Input
            {...register('email')}
            label="E-mail"
            placeholder="Digite seu e-mail"
            errorMessage={errors.email?.message}
            name="email"
          />
        </form>
        <div className="flex justify-end w-full gap-x-5 mt-10">
          <Button
            form="contact-form"
            type="reset"
            content="cancelar"
          />
          <Button
            type="submit"
            form="contact-form"
            variant="green"
            content="enviar"
          />
        </div>
      </div>
    </section>
  );
}

export { OurContact };
