import imagem from '../../../../../public/imagem-1.jpg';
import { SectionTitle } from '../../../../components/section-title';

function OurHistory() {

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
    <section className="bg-light-social-brand pt-12 pb-28">
      <div className="max-w-[1160px] mx-auto">
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
    </section>
  );
}

export { OurHistory };