import img1 from '../../../../public/imagem-1.jpg';
import { SectionTitle } from '../../../components/section-title';

function Gallery() {
  return (
    <div className="pt-12 pb-20">
      <div className="max-w-[1160px] mx-auto">
        <div className="pt-12 pb-14">
          <SectionTitle content="Galeria" />
        </div>
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-8 row-span-2">
            <img
              src={img1}
              alt="Imagem 1"
              className="max-w-full max-h-full object-cover shadow-default"
            />
          </div>
          <div className="col-span-4">
            <img
              src={img1}
              alt="Imagem 2"
              className="max-w-full max-h-full object-cover shadow-default"
            />
          </div>
          <div className="col-span-4">
            <img
              src={img1}
              alt="Imagem 3"
              className="max-w-full max-h-full object-cover shadow-default"
            />
          </div>
          <div className="col-span-4">
            <img
              src={img1}
              alt="Imagem 3"
              className="max-w-full max-h-full object-cover shadow-default"
            />
          </div>
          <div className="col-span-8 row-span-2">
            <img
              src={img1}
              alt="Imagem 5"
              className="max-w-full max-h-full object-cover shadow-default"
            />
          </div>
          <div className="col-span-4">
            <img
              src={img1}
              alt="Imagem 3"
              className="max-w-full max-h-full object-cover shadow-default"
            />
          </div>
          <div className="col-span-12">
            <img
              src={img1}
              alt="Imagem 6"
              className="max-w-full max-h-full object-cover shadow-default"
            />
          </div>
        </div>
        <div className="flex justify-center items-center pt-14">
          <button 
            className="text-social-gray text-3xl transition duration-500 hover:brightness-75 hover:scale-105" 
            id="loadMore"
            type="button"
          >
            Carregar mais +
          </button>
        </div>
      </div>
    </div>
  );
}

export { Gallery };
