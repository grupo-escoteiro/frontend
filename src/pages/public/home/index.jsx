import imagem from '../../../../public/imagem-1.jpg';
import ryan from '../../../../public/fotos-ryan.jpg';
import alemao from '../../../../public/fotos-alemao.jpg';
import jao from '../../../../public/fotos-jao.jpg';
import { Cards } from '../../../components/cards';
import { SectionTitle } from '../../../components/section-title';
import { Input } from '../../../components/input';
import { Button } from '../../../components/button';

function Home() {
  function generateImagesBoard() {
    const images = [];
    for(let i = 1; i <= 7; i++) {
      images.push(
        <img
          className="w-24 h-24 rounded-[80px] cursor-pointer object-cover hover:scale-105 transition duration-500"
          title="01/08/2024"
          src={imagem}
          alt="Alcateia de escoteiros saindo pelo portão uniformizados juntamente com a chefe"
        />
      );
    }
    return images;
  }
  return (
    <div className="h-[3000px]">
      <div className="w-full h-[800px] bg-light-social-brand px-48 pt-12">
        <SectionTitle content="Nossa História" />
        <div className="pt-12 flex gap-20">
          {
            generateImagesBoard().map(image => image)
          }
        </div>
        <div className="flex pt-12">
          <img
            className="w-[580px] h-[420px] rounded-md cursor-pointer object-cover shadow-lg"
            title="01/08/2024"
            src={imagem}
            alt="Alcateia de escoteiros saindo pelo portão uniformizados juntamente com a chefe"
          />
          <div className="text-center w-full">
            <h1 className="py-6 text-2xl font-semibold">
              <span className="text-social-brand font-semibold text-2xl">Piquinique</span> com as crianças.
            </h1>
            <p className="pl-16 text-justify">
              is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It 
              has survived not only five centuries, but also the leap into electronic typesetting, remaining 
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing 
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="flex justify-start items-center gap-4 px-16 pt-16">
              <p><span className="text-social-brand font-semibold">Venha </span> 
                fazer parte desta <span className="text-social-brand font-semibold">história:</span>
              </p>
              <button
                className="flex items-center bg-social-brand text-social-white font-semibold py-1 px-4 rounded-md
                           shadow-lg hover:text-social-black hover:bg-transparent hover:border-social-brand 
                           border transition-colors"
                type="button"
              >
                  Cadastre-se
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="pl-48 py-16">
        <div className="pb-16">
          <SectionTitle content="Nossa equipe"/>
        </div>
        <div className="flex gap-12">
          <Cards url={ryan} />
          <Cards url={alemao} />
          <Cards url={jao} />
        </div>
      </section>
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
            <Button />
            <Button variant="green" />
          </div>
        </div>
      </section>
    </div>
  );
}

export { Home };